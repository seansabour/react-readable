import React from 'react';
import UpVote from 'react-icons/lib/fa/thumbs-o-up';
import DownVote from 'react-icons/lib/fa/thumbs-o-down';
import { Dropdown } from 'semantic-ui-react';

const Options = props => (
    <div style={props.style}>
        <UpVote
            className="pointerCursor"
            color="blue"
            onClick={() => props.upVote()}
        />&nbsp;&nbsp;
        {props.voteScore || 0}&nbsp;&nbsp;
        <DownVote
            className="pointerCursor"
            color="red"
            onClick={() => props.downVote()}
        />&nbsp;&nbsp;
        <Dropdown
            className="icon"
            icon="cogs"
            simple
            item
            text=" "
            onChange={props.dropdownHandler}
            options={[
                {
                    key: 'edit',
                    text: 'Edit',
                    value: 'edit'
                },
                {
                    key: 'delete',
                    text: 'Delete',
                    value: 'delete'
                }
            ]}
        />
    </div>
);

export default Options;
