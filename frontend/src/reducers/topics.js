import * as actionType from '../actionTypes/topics';
const initialState = {
    names: ['all'],
    isFetching: false
};

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.RECEIVE_TOPICS:
            return {
                ...state,
                names: [
                    'all',
                    ...action.topics.categories.map(topic => topic.name)
                ],
                isFetching: action.isFetching
            };
        case actionType.REQUEST_TOPICS:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
};

export default topicReducer;
