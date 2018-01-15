import React from 'react';
import moment from 'moment';
import Options from './Options';
import { connect } from 'react-redux';
import { voteComment, deleteComment } from '../actions/comments';
import EditableComment from './EditableComment';
import { withRouter } from 'react-router-dom';

class Comment extends React.Component {
    state = { editable: false };

    dropdownHandler = (e, data) => {
        switch (data.value) {
            case 'edit':
                this.setState({ editable: true });
                break;
            case 'delete':
                if (
                    window.confirm(
                        'Are you sure you want to delete this comment?'
                    )
                ) {
                    this.props.deleteComment(this.props.comment.id);
                }
                break;
            default:
                return;
        }
    };

    render() {
        const { editable } = this.state;
        if (editable) {
            return (
                <EditableComment
                    toggleEdit={() => this.setState({ editable: false })}
                    comment={this.props.comment}
                />
            );
        }
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
                    <div className="float-left">
                        <h6 className="mt-0 mb-1">
                            <strong>{this.props.comment.author}</strong> -{' '}
                            {moment(this.props.comment.timestamp).format(
                                'MM-DD-YY hh:MM A'
                            )}
                        </h6>

                        <p>{this.props.comment.body}</p>
                    </div>
                    <div className="float-right">
                        <Options
                            postID={this.props.match.params.post_id}
                            voteScore={this.props.comment.voteScore}
                            upVote={() =>
                                this.props.voteComment(
                                    this.props.comment.id,
                                    'upVote'
                                )
                            }
                            downVote={() =>
                                this.props.voteComment(
                                    this.props.comment.id,
                                    'downVote'
                                )
                            }
                            dropdownHandler={this.dropdownHandler}
                        />
                    </div>
                    <div className="clearfix" />
                </div>
            </li>
        );
    }
}

export default withRouter(
    connect(null, {
        voteComment,
        deleteComment
    })(Comment)
);
