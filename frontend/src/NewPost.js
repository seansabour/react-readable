import React from "react";
import Back from "react-icons/lib/fa/arrow-left";

class NewPost extends React.Component {
    state = {
        title: "",
        author: "",
        text: ""
    };

    handleChange = (e, field) => {
        this.setState({
            [field]: e
        });
    };

    render() {
        return (
            <div className="container-fluid extraPadding">
                <div className="row">
                    <div className="col-3">
                        <Back
                            id="backToHomePageButton"
                            size={32}
                            onClick={() => this.props.history.goBack()}
                        />
                    </div>
                    <div className="col-6">
                        <h1 className="h1">New Post</h1>
                        <hr />
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">
                                    <strong>Title</strong>
                                </label>

                                <input
                                    className="form-control"
                                    type="text"
                                    name="title"
                                    onChange={e =>
                                        this.handleChange(
                                            e.target.value,
                                            "title"
                                        )}
                                    value={this.state.title}
                                />
                                <br />
                                <label htmlFor="author">
                                    <strong>Author</strong>
                                </label>

                                <input
                                    className="form-control"
                                    name="author"
                                    type="text"
                                    value={this.state.author}
                                    onChange={e =>
                                        this.handleChange(
                                            e.target.value,
                                            "author"
                                        )}
                                />
                                <br />
                                <label htmlFor="description">
                                    <strong>Text</strong>
                                </label>

                                <textarea
                                    className="form-control"
                                    name="description"
                                    type="textarea"
                                    rows="5"
                                    value={this.state.description}
                                    onChange={e =>
                                        this.handleChange(
                                            e.target.value,
                                            "text"
                                        )}
                                />
                            </div>
                            {/*  handle REDUX Dispatch here to create a new post here! */}
                            <button type="button" className="btn btn-primary">
                                Create Post
                            </button>
                        </form>
                    </div>
                    <div className="col-3" />
                </div>
            </div>
        );
    }
}

export default NewPost;
