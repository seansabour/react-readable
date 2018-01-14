import * as API from '../utils';
import * as actionType from '../actionTypes/topics';

/*
 * Synchronous action creators
 */
const receiveTopics = topics => ({
    type: actionType.RECEIVE_TOPICS,
    topics,
    isFetching: false
});

const requestTopics = isFetching => ({
    type: actionType.REQUEST_TOPICS,
    isFetching
});

/*
  * Asynchronous action creators
  */
export const fetchTopics = () => dispatch => {
    dispatch(requestTopics(true));
    API.getCategories().then(topics => dispatch(receiveTopics(topics)));
};
