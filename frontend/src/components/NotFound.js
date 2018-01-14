import React from 'react';

const NotFound = props => {
    return (
        <div className="container text-center align-center page">
            <div style={{ marginTop: '30%' }}>
                <h1>404 Error - Not Found</h1>
                <p>{props.error}</p>
            </div>
        </div>
    );
};
export default NotFound;
