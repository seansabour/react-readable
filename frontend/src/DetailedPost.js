import React from "react";
import Back from "react-icons/lib/fa/arrow-left";

class DetailedPost extends React.Component {
    state = { textarea: "" };

    handleChange = e => {
        this.setState({ textarea: e.target.value });
    };

    render() {
        return (
            <div className="container-fluid  extraPadding">
                <div className="col-1 justify-content-left">
                    <Back
                        id="backToHomePageButton"
                        size={32}
                        onClick={() => this.props.history.goBack()}
                    />
                </div>
                <div style={{ margin: "auto" }} className="row container">
                    <div className="col-11">
                        <div className="container">
                            <h2>{this.props.title || "TEST"}</h2>
                            <h6>By: Sean S {this.props.author}</h6>
                        </div>

                        <div className="clearfix" />

                        <hr />

                        <div className="container">
                            <p>{this.props.body || "Test body"}</p>
                        </div>

                        <div className="container-fluid">
                            <textarea
                                className="form-control"
                                name="comments"
                                type="textarea"
                                placeholder="Write your response..."
                                rows="5"
                                value={this.state.textarea}
                                onChange={this.handleChange}
                            />
                            <button type="button" className="btn btn-primary">
                                Add Comment
                            </button>
                        </div>
                        <hr />

                        <div className="container">
                            <p>{this.props.comments || "No Comments..."}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailedPost;
