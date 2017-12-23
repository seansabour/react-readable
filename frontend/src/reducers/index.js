import { combineReducers } from "redux";
import {
    ADD_COMMENT,
    REMOVE_COMMENT,
    NEW_POST,
    MODIFY_POST,
    REMOVE_POST,
    RECEIVE_TOPICS
} from "../actions";

const commentReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return state;
        case REMOVE_COMMENT:
            return state;
        default:
            return state;
    }
};

const postReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_POST:
            return state;
        case MODIFY_POST:
            return state;
        case REMOVE_POST:
            return state;
        default:
            return state;
    }
};

const receiveTopics = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_TOPICS:
            return Object.assign({}, state, {
                topics: action.topics.categories.map(topic => topic.name)
            });
        default:
            return state;
    }
};

export default combineReducers({
    postReducer,
    commentReducer,
    receiveTopics
});
