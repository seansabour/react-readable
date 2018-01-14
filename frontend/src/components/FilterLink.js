import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ topic, children }) => (
    <NavLink
        exact
        to={topic === 'all' ? '/' : `/${topic}`}
        activeStyle={{
            textDecoration: 'none',
            color: 'black'
        }}>
        {children}
    </NavLink>
);

export default FilterLink;
