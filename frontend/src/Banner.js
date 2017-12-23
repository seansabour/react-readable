import React from "react";

const Banner = props => {
    return (
        <div id="banner" className="jumbotron text-center">
            <h1 className="h1">{props.title}</h1>
            <h3 className="h3">{props.subtitle}</h3>
        </div>
    );
};

export default Banner;
