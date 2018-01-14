import React from 'react';

const SortSelection = props => (
    <select
        style={{ display: 'inline' }}
        onChange={e => props.handleSelection(e.target.value)}>
        <option disabled>Sort By</option>
        <option value="newest">Date (Latest)</option>
        <option value="oldest">Date (Oldest)</option>
        <option value="highest">Votes (Highest)</option>
        <option value="lowest">Votes (Lowest)</option>
    </select>
);
export default SortSelection;
