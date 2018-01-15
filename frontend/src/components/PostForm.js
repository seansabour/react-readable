import React from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions/topics';
import { capitalize } from '../utils';
class PostForm extends React.Component {
    state = { title: '', author: '', body: '', category: 'Choose a Category' };

    componentDidMount() {
        const { post } = this.props;
        this.props.fetchTopics();

        this.setState({ ...post });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { topics } = this.props;
        const options = topics.filter(topic => topic !== 'all').map(topic => (
            <option key={topic} name={topic}>
                {capitalize(topic)}
            </option>
        ));
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">
                        <strong>Title</strong>
                    </label>

                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                        disabled={this.props.disabled}
                    />
                    <br />
                    <label htmlFor="category">
                        <strong>Category</strong>
                    </label>

                    <select
                        name="category"
                        className="form-control"
                        value={this.state.category}
                        onChange={this.handleChange}
                        disabled={this.props.disabled}>
                        <option disabled name="invalidOption">
                            Choose a Category
                        </option>
                        {options}
                    </select>
                    <br />
                    <label htmlFor="body">
                        <strong>Body</strong>
                    </label>

                    <textarea
                        className="form-control"
                        name="body"
                        type="textarea"
                        rows="5"
                        value={this.state.body}
                        onChange={this.handleChange}
                    />
                </div>

                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.props.handleOnClick(this.state)}>
                    {this.props.text}
                </button>
            </form>
        );
    }
}
const mapStateToProps = ({ topics }) => ({
    topics: topics.names
});

export default connect(mapStateToProps, { fetchTopics })(PostForm);
