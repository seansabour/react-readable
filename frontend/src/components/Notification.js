import React from 'react';
import { connect } from 'react-redux';
import { hideNotification } from '../actions/posts';

class Notification extends React.Component {
    render() {
        let { message, type } = this.props.alert;
        if (message) {
            setTimeout(() => {
                this.props.hideNotification();
            }, 5000);
            return (
                <div className={`text-center alert ${type}`} role="alert">
                    <strong>{message}</strong>
                </div>
            );
        }
        return <div />;
    }
}
const mapStateToProps = ({ posts }) => ({
    alert: posts.alert
});

export default connect(mapStateToProps, { hideNotification })(Notification);
