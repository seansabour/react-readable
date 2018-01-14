import React from 'react';
import ReactLoading from 'react-loading';

const Loading = props => {
    return (
        <div
            style={{ marginTop: '10%' }}
            className="row h-100 text-center justify-content-center align-items-center">
            <ReactLoading
                type={props.type}
                color={props.color}
                height={props.height}
                width={props.width}
            />
        </div>
    );
};

export default Loading;

/* Loading Types:
* blank
* balls
* bars
* bubbles
* cubes
* cylon
* spin
* spinningBubbles
* spokes
*/
