import { combineReducers } from 'redux';
import postReducer from './posts';
import topicReducer from './topics';
import commentReducer from './comments';

export default combineReducers({
    posts: postReducer,
    comments: commentReducer,
    topics: topicReducer
});
