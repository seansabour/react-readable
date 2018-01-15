import React from 'react';
import { connect } from 'react-redux';
import Comment from 'react-icons/lib/fa/comment-o';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';
import { deletePost, votePost } from '../actions/posts';
import Options from './Options';

class Post extends React.Component {
    handleDropDownSelection = (e, data) => {
        switch (data.value.toLowerCase()) {
            case 'edit':
                this.props.history.push(`/edit/${this.props.post.id}`);
                break;
            case 'delete':
                if (
                    window.confirm('Are you sure you want to delete this post?')
                ) {
                    this.props.deletePost(this.props.post.id);
                }

                break;
            default:
                return;
        }
    };

    render() {
        return (
            <div className="card h-100">
                <div className="card-header text-center">
                    <Link
                        to={`${this.props.post.category}/${
                            this.props.post.id
                        }`}>
                        <h4 className="card-title h4">
                            {this.props.post.title}
                        </h4>
                    </Link>
                    <div>
                        <h6 className="h6">By: {this.props.post.author}</h6>
                    </div>
                </div>

                <div className="card-body">
                    <p className="card-text">
                        {this.props.post.body.substr(0, 70)}
                    </p>
                </div>
                <div className="card-footer clearfix">
                    <div className="float-left text-left">
                        {moment(this.props.post.timestamp).format(
                            'M/D/YYYY, h:mm a'
                        )}
                    </div>
                    <div className="float-right text-right">
                        <span
                            aria-hidden="true"
                            style={{ marginRight: '25px', display: 'inline' }}>
                            <Comment color="green" />&nbsp;
                            {this.props.post.commentCount}
                        </span>

                        <Options
                            style={{ display: 'inline' }}
                            postID={this.props.post.id}
                            voteScore={this.props.post.voteScore}
                            downVote={() => {
                                this.props.votePost(
                                    this.props.post.id,
                                    'downVote'
                                );
                            }}
                            upVote={() =>
                                this.props.votePost(
                                    this.props.post.id,
                                    'upVote'
                                )
                            }
                            dropdownHandler={this.handleDropDownSelection}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(connect(null, { deletePost, votePost })(Post));
