import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
    return (
        <div className="container text-center align-center page">
            <div style={{ marginTop: '30%' }}>
                <h1>404 Error - Not Found</h1>
                <p>Probably not the place you were looking for. ¯\_(ツ)_/¯</p>
                <Link to="/">Go back home</Link>
            </div>
        </div>
    );
};
export default NotFound;
