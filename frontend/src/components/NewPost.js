import React from 'react';
import BackButton from './BackButton';
import PostForm from './PostForm';
import { v4 } from 'uuid';
import { addPost } from '../actions/posts';
import { connect } from 'react-redux';

class NewPost extends React.Component {
    state = { error: '' };
    handleNewPost = post => {
        if (post.category === 'Choose a Category') {
            return this.setState({ error: 'Please select a valid category..' });
        }

        this.props.addPost({
            id: v4(),
            timestamp: Date.now(),
            title: post.title,
            body: post.body,
            author: post.author,
            category: post.category.toLowerCase()
        });
        this.props.history.push('/');
    };

    render() {
        const errorMessage = this.state.error && (
            <div className="text-center alert alert-danger" role="alert">
                <strong>{this.state.error}</strong>
            </div>
        );
        return (
            <div className="container page">
                {errorMessage}
                <div className="row">
                    <BackButton className="col col-sm-3" />
                    <div className="col col-lg">
                        <h1 className="h1">New Post</h1>
                        <hr />
                        <PostForm
                            handleOnClick={this.handleNewPost}
                            text="Create Post"
                        />
                    </div>
                    <div className="col-3" />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {};
};
const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(addPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
