import React from "react";
import { Link } from "react-router-dom";
import Book from "react-icons/lib/fa/book";

const Header = props => {
    return (
        <nav className="header fixed-top clearfix">
            <div className="float-left">
                <Link to="/" style={{ color: "#CCFFFF" }}>
                    <h2 className="h2">
                        <Book />Readable
                    </h2>
                </Link>
            </div>
            <div
                className="float-right header"
                style={{ a: "white !important" }}
            >
                <Link
                    style={{ color: "#CCFFFF" }}
                    to="/posts/new"
                    onClick={props.newPost}
                >
                    Create Post
                </Link>
            </div>
        </nav>
    );
};

export default Header;
