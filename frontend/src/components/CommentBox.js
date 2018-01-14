import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import uuid from 'uuid';

class CommentBox extends React.Component {
    state = { error: '', comment: '', author: '' };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    validateSubmit = e => {
        e.preventDefault();

        if (!this.state.comment || !this.state.author) {
            const type = !this.state.comment ? 'comment' : 'author';
            return this.setState({
                error: `You need to enter a ${type} before submitting.`
            });
        } else if (this.state.error) {
            return this.setState({ error: '' });
        } else {
            this.props.handleSubmit({
                id: uuid(),
                timestamp: moment(),
                body: this.state.comment,
                author: this.state.author,
                parentId: this.props.match.params.post_id
            });
            return this.setState({ author: '', comment: '', error: '' });
        }
    };

    render() {
        return (
            <div className="container-fluid comments">
                {this.state.error !== '' && (
                    <p className="alert alert-danger">{this.state.error}</p>
                )}
                <form className="form">
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="author"
                        placeholder="Jon Snow"
                        value={this.state.author}
                        onChange={this.handleChange}
                    />
                    <label style={{ marginTop: '15px' }} htmlFor="author">
                        What are your thoughts?
                    </label>

                    <textarea
                        className="form-control"
                        name="comment"
                        type="textarea"
                        placeholder="Write your response..."
                        rows="5"
                        value={this.state.comment}
                        onChange={this.handleChange}
                    />

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.validateSubmit}>
                        Add Comment
                    </button>
                    <br />
                </form>
            </div>
        );
    }
}
export default withRouter(CommentBox);
