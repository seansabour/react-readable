import React from 'react';
import PropTypes from 'prop-types';

const NoPostFound = ({ category }) => (
    <div className="text-center ">
        <h3>
            Oops! There seems to be no posts currently for the {category}{' '}
            category.
        </h3>
        <p>
            You can be the first one to write on this topic, click here to
            create a post.
        </p>
    </div>
);

NoPostFound.propTypes = {
    category: PropTypes.string.isRequired
};

export default NoPostFound;
