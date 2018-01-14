import React from 'react';
import { Link } from 'react-router-dom';
import Book from 'react-icons/lib/fa/book';

const Header = props => {
    return (
        <nav id="header" className="navbar-default navbar-fixed-top clearfix">
            <div className="float-left">
                <Link to="/" style={{ color: '#CCFFFF' }}>
                    <h2 className="h2">
                        <Book />Readable
                    </h2>
                </Link>
            </div>
            <div
                className="float-right header"
                style={{ a: 'white !important', padding: '5px' }}>
                <Link
                    style={{ color: '#CCFFFF' }}
                    to="/posts/new"
                    onClick={props.newPost}>
                    Create Post
                </Link>
            </div>
            <div className="clearfix" />
        </nav>
    );
};

export default Header;
