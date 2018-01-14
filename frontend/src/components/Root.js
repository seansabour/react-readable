import React from 'react';
import PropTypes from 'prop-types';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '../index.css';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
