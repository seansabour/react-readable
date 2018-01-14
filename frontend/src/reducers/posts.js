import * as actionType from '../actionTypes/posts';

const initialState = {
    byID: [],
    isFetching: false,
    sort_by: 'newest',
    alert: {},
    sortedIds: []
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.NEW_POST:
            const newPostById = {
                ...state.byID,
                [action.post.id]: action.post
            };
            const transformedPost = transformPostToArray(newPostById);
            return {
                ...state,
                byID: newPostById,
                alert: action.alert,
                sortedIds: sort(transformedPost, state.sort_by)
            };
        case actionType.MODIFY_POST:
            return {
                ...state,
                alert: action.alert,
                byID: { ...state.byID, [action.post.id]: action.post }
            };
        case actionType.REQUEST_POSTS:
            return { ...state, isFetching: action.isFetching };
        case actionType.RECEIVE_POSTS:
            return {
                ...state,
                byID: transformPosts(action.posts),
                isFetching: action.isFetching,
                sortedIds: sort(action.posts, state.sort_by)
            };

        case actionType.SORT_POSTS:
            const posts = transformPostToArray(state.byID);
            return {
                ...state,
                sort_by: action.name,
                sortedIds: sort(posts, action.name)
            };
        case actionType.DELETE_POST:
            const activePosts = Object.assign({}, state.byID);
            delete activePosts[action.post.id];

            return {
                ...state,
                byID: activePosts,
                alert: action.alert,
                sortedIds: state.sortedIds.filter(
                    sorted => sorted !== action.post.id
                )
            };
        case actionType.HIDE_NOTIFICATION:
            return { ...state, alert: {} };

        case actionType.VOTE_POST:
            const newByID = {
                ...state.byID,
                [action.post.id]: action.post
            };
            const sortedIds = transformPostToArray(newByID);
            return {
                ...state,
                byID: newByID,
                sortedIds: sort(sortedIds, state.sort_by)
            };
        default:
            return state;
    }
};

const transformPosts = posts => {
    return posts.reduce((postByID, post) => {
        postByID[post.id] = post;
        return postByID;
    }, {});
};

const transformPostToArray = posts => {
    if (Array.isArray(posts)) return posts;

    return Object.entries(posts).map(([key, value]) => value);
};

const compare = (a, b, sort_by, key, ascending) => {
    if (a[key] < b[key]) {
        return ascending;
    }
    if (a[key] > b[key]) {
        return ascending * -1;
    }
    return 0;
};

const sort = (posts, sort_by) => {
    switch (sort_by) {
        case 'highest':
            return posts
                .sort((a, b) => compare(a, b, 'highest', 'voteScore', 1))
                .map(post => post.id);
        case 'lowest':
            return posts
                .sort((a, b) => compare(a, b, 'lowest', 'voteScore', -1))
                .map(post => post.id);
        case 'newest':
            return posts
                .sort((a, b) => compare(a, b, 'newest', 'timestamp', 1))
                .map(post => post.id);
        case 'oldest':
            return posts
                .sort((a, b) => compare(a, b, 'oldest', 'timestamp', -1))
                .map(post => post.id);
        default:
            return posts;
    }
};

export default postReducer;
