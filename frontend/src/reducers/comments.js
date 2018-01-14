import * as actionType from '../actionTypes/comments';

const initialState = {
    comments: []
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_COMMENT:
            return {
                ...state,
                comments: state.comments.concat(action.comments)
            };
        case actionType.DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(
                    comment => comment.id !== action.comment.id
                )
            };
        case actionType.RECEIVE_COMMENTS:
            return {
                ...state,
                comments: action.comments.filter(comment => !comment.is_deleted)
            };
        case actionType.VOTE_COMMENT:
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if (comment.id === action.comment.id) {
                        return action.comment;
                    }
                    return comment;
                })
            };
        case actionType.UPDATE_COMMENT:
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if (comment.id === action.comment.id) {
                        return action.comment;
                    }
                    return comment;
                })
            };
        default:
            return state;
    }
};

export default commentReducer;
