import React from 'react';
import { connect } from 'react-redux';
import BackButton from './BackButton';
import { addComment } from '../actions/comments';
import { fetchPosts, votePost, deletePost } from '../actions/posts';
import PageNotFound from './NotFound';
import Loading from './Loading';
import CommentBox from './CommentBox';
import CommentsList from './CommentsList';
import moment from 'moment';
import TopicList from './TopicList';
import Options from './Options';

class DetailedPost extends React.Component {
    componentDidMount() {
        if (Array.isArray(this.props.post.byID)) {
            this.props.getPosts();
        }
    }

    handleSubmit = comment => {
        this.props.addComment(comment);
    };

    handleDropDownSelection = (e, data) => {
        switch (data.value) {
            case 'edit':
                this.props.history.push(
                    `/edit/${this.props.match.params.post_id}`
                );
                break;
            case 'delete':
                if (
                    window.confirm('Are you sure you want to delete this post?')
                ) {
                    this.props.deletePost(this.props.match.params.post_id);
                    this.props.history.push('/');
                }

                break;
            default:
                return;
        }
    };

    render() {
        let post = this.props.post.byID;
        const postId = this.props.match.params.post_id;

        // If no error exists, then display loading
        // indicator while fetching data.
        if (Array.isArray(post)) {
            return (
                <Loading
                    type="spinningBubbles"
                    color="black"
                    height={64}
                    width={64}
                />
            );
        } else if (!post[postId]) {
            // Check to see if error exists
            return <PageNotFound error={post.error} />;
        }

        // Return a detailed view of the post
        return (
            <div className="container">
                <div className="container page">
                    <div style={{ padding: '15px' }} className="text-center">
                        Discover: <TopicList />
                    </div>
                    <div className="row">
                        <BackButton className="col col-sm-1" />
                        <div className="container col col-lg">
                            <div>
                                <div className="container">
                                    <div>
                                        <h2>{post[postId].title}</h2>
                                        <div className="float-left">
                                            <h6 style={{ display: 'inline' }}>
                                                <strong>Published:</strong>{' '}
                                                {moment(
                                                    post[postId].timestamp
                                                ).format(
                                                    'MM-DD-YY hh:MM A'
                                                )}&nbsp;<strong>By:</strong>{' '}
                                                {post[postId].author}
                                            </h6>
                                        </div>
                                        <div className="float-right">
                                            <Options
                                                postID={post[postId].id}
                                                voteScore={
                                                    post[postId].voteScore
                                                }
                                                downVote={() => {
                                                    this.props.votePost(
                                                        this.props.match.params
                                                            .post_id,
                                                        'downVote'
                                                    );
                                                }}
                                                upVote={() =>
                                                    this.props.votePost(
                                                        this.props.match.params
                                                            .post_id,
                                                        'upVote'
                                                    )
                                                }
                                                dropdownHandler={
                                                    this.handleDropDownSelection
                                                }
                                            />
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                </div>

                                <hr />

                                <div
                                    style={{ marginBottom: '100px' }}
                                    className="container">
                                    <p>{post[postId].body}</p>
                                </div>

                                <CommentBox handleSubmit={this.handleSubmit} />
                                <CommentsList
                                    postID={this.props.match.params.post_id}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { comments, posts } = state;
    return {
        comments: comments.comments,
        post: posts
    };
};

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch(addComment(comment)),
    getPosts: () => dispatch(fetchPosts()),
    votePost: (id, vote) => dispatch(votePost(id, vote)),
    deletePost: id => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedPost);
