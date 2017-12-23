import * as API from "../utils";

// Comment related action creators
export const ADD_COMMENT = "SUBMIT_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const addComment = comment => ({
    type: ADD_COMMENT,
    id: comment.post_id
});

export const removeComment = comment => ({
    type: REMOVE_COMMENT,
    id: comment.post_id
});

// Post related action creators
export const NEW_POST = "NEW_POST";
export const MODIFY_POST = "MODIFY_POST";
export const REMOVE_POST = "REMOVE_POST";

export const addPost = post => ({
    type: NEW_POST,
    post
});

export const modifyPost = post => ({
    type: MODIFY_POST,
    id: post.post_id
});

export const removePost = post => ({
    type: REMOVE_POST,
    id: post.post_id
});

// TOPICS RELATED
export const RECEIVE_TOPICS = "RECEIVE_TOPICS";
export const fetchTopics = () => dispatch =>
    API.getCategories().then(topics => dispatch(receiveTopics(topics)));

export const receiveTopics = topics => ({
    type: RECEIVE_TOPICS,
    topics
});
