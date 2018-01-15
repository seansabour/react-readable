import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/comments';
import Comment from './Comment';

class CommentsList extends React.Component {
    componentDidMount() {
        this.props.fetchComments(this.props.postID);
    }
    render() {
        let { comments } = this.props;
        comments = comments.map(comment => {
            return <Comment key={comment.id} comment={comment} />;
        });

        return (
            <div className="container comments">
                <p>Comments: {Object.keys(comments).length}</p>
                <hr />

                <ul className="list-unstyled">
                    {Object.keys(comments).length > 0
                        ? comments
                        : 'No comments, be the first to reply!'}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ comments }) => ({
    comments: comments.comments
});

export default connect(mapStateToProps, { fetchComments })(CommentsList);
