import React from 'react';
import { connect } from 'react-redux';
import { updateComment } from '../actions/comments';

class EditableComment extends React.Component {
    state = { comment: { ...this.props.comment } };

    // Dispatch the updateComment action to handle updating a comment.
    // Also toggleEdit so form is not editable anymore.
    handleUpdate = e => {
        e.preventDefault();
        this.props.updateComment(
            this.props.comment.id,
            this.state.comment.body
        );
        this.props.toggleEdit();
    };

    handleChange = e => {
        this.setState({ comment: { body: e.target.value } });
    };

    render() {
        return (
            <li style={{ marginBottom: '10px' }} className="media">
                <img
                    src="/images/user.svg"
                    alt="default avatar"
                    height={36}
                    width={36}
                    className="d-flex mr-3"
                />
                <div className="media-body">
                    <form className="form">
                        <textarea
                            className="form-control"
                            type="textarea"
                            value={this.state.comment.body}
                            name="body"
                            onChange={this.handleChange}
                        />
                        <div className="btn-group" role="group">
                            <input
                                className="btn btn-primary"
                                type="button"
                                value="Update"
                                onClick={this.handleUpdate}
                            />
                            <input
                                className="btn btn-danger"
                                type="button"
                                value="Cancel"
                                onClick={this.props.toggleEdit}
                            />
                        </div>
                    </form>
                </div>
            </li>
        );
    }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    updateComment: (commentID, body) => dispatch(updateComment(commentID, body))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditableComment);
