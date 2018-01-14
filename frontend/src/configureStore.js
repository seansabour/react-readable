import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const configureStore = () => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(
        reducer,
        composeWithDevTools(applyMiddleware(...middlewares))
    );
};

export default configureStore;
