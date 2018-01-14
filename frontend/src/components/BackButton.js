import React from 'react';
import { withRouter } from 'react-router-dom';
import Back from 'react-icons/lib/fa/arrow-left';

const BackButton = props => (
    <div className={props.className}>
        <Back
            className="pointerCursor"
            size={32}
            onClick={() => props.history.goBack()}
        />
    </div>
);
export default withRouter(BackButton);
