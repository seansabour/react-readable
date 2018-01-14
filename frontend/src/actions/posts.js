import * as api from '../utils';
import * as actionType from '../actionTypes/posts';

/*
 * Synchronous action creators
 */
const addPostSuccess = post => ({
    type: actionType.NEW_POST,
    post,
    alert: { message: 'Successfully added the post!', type: 'alert-success' }
});

const receivePosts = posts => ({
    type: actionType.RECEIVE_POSTS,
    posts,
    isFetching: false
});

const requestPosts = isFetching => ({
    type: actionType.REQUEST_POSTS,
    isFetching
});

const votePostSuccess = post => ({
    type: actionType.VOTE_POST,
    post
});

const deletePostSuccess = post => ({
    type: actionType.DELETE_POST,
    post,
    alert: {
        message: 'Successfully deleted the post!',
        type: 'alert-success'
    }
});

const editPostSuccess = post => ({
    type: actionType.MODIFY_POST,
    alert: {
        message: 'Successfully modified the post!',
        type: 'alert-success'
    }
});

export const sortPosts = name => ({
    type: actionType.SORT_POSTS,
    name
});

export const hideNotification = () => ({
    type: actionType.HIDE_NOTIFICATION
});

/*
 * Asynchronous action creators
 */
export const addPost = post => dispatch =>
    api.addPost(post).then(post => dispatch(addPostSuccess(post)));

export const deletePost = postID => dispatch =>
    api.deletePost(postID).then(post => dispatch(deletePostSuccess(post)));

export const editPost = post => dispatch =>
    api.editPost(post).then(post => dispatch(editPostSuccess(post)));

export const votePost = (postID, vote) => dispatch =>
    api.votePost(postID, vote).then(post => dispatch(votePostSuccess(post)));

export const fetchPosts = () => dispatch => {
    dispatch(requestPosts(true));
    api.getPosts().then(posts => dispatch(receivePosts(posts)));
};
