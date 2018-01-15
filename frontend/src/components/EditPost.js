import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, editPost } from '../actions/posts';
import PageNotFound from './NotFound';
import Loading from './Loading';
import BackButton from './BackButton';
import PostForm from './PostForm';

class EditPost extends React.Component {
    // If data hasn't been fetched yet, go ahead and fetch all the data.
    componentDidMount() {
        if (Array.isArray(this.props.posts.byID)) {
            this.props.fetchPosts();
        }
    }

    handleEditPost = post => {
        this.props.editPost(post);
        this.props.history.push('/');
    };
    render() {
        if (Array.isArray(this.props.posts.byID)) {
            return (
                <Loading
                    type="spinningBubbles"
                    color="black"
                    height={64}
                    width={64}
                />
            );
        } else if (!this.props.posts.byID[this.props.match.params.post_id]) {
            return <PageNotFound />;
        }

        const post = this.props.posts.byID[this.props.match.params.post_id];
        return (
            <div className="container page">
                <div className="row">
                    <BackButton className="col col-sm-3" />
                    <div className="col col-lg">
                        <h1 className="h1">Edit Post</h1>
                        <hr />
                        <PostForm
                            post={post}
                            disabled={true}
                            handleOnClick={this.handleEditPost}
                            text="Edit Post"
                        />
                    </div>
                    <div className="col-3" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, { fetchPosts, editPost })(EditPost);
