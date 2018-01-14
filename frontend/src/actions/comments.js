import * as api from '../utils';
import * as commentTypes from '../actionTypes/comments';

/*
 * Synchronous action creators
 */
const receiveComments = comments => ({
    type: commentTypes.RECEIVE_COMMENTS,
    comments
});

const receiveComment = (response, comment) => ({
    type: commentTypes.ADD_COMMENT,
    comments: Object.assign({}, response, comment)
});

const voteCommentSuccess = comment => ({
    type: commentTypes.VOTE_COMMENT,
    comment
});
const deleteCommentSuccess = comment => ({
    type: commentTypes.DELETE_COMMENT,
    comment
});
const updateCommentSuccess = comment => ({
    type: commentTypes.UPDATE_COMMENT,
    comment
});

/*
 * Async action creators
 */
export const fetchComments = post_id => dispatch =>
    api
        .getCommentsForPost(post_id)
        .then(comments => dispatch(receiveComments(comments)));

export const addComment = comment => dispatch =>
    api
        .addComment(comment)
        .then(response => dispatch(receiveComment(response, comment)));

export const voteComment = (commentID, vote) => dispatch =>
    api
        .voteComment(commentID, vote)
        .then(comment => dispatch(voteCommentSuccess(comment)));

export const deleteComment = commentID => dispatch =>
    api
        .deleteComment(commentID)
        .then(comment => dispatch(deleteCommentSuccess(comment)));

export const updateComment = (commentID, body) => dispatch =>
    api
        .updateComment(commentID, body)
        .then(comment => dispatch(updateCommentSuccess(comment)));
