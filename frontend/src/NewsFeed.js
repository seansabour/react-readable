import React from "react";
import Post from "./Post";
import Banner from "./Banner";
import { capitalize } from "./utils";
import { fetchTopics } from "./actions";
import { connect } from "react-redux";
import { removePost, modifyPost } from "./actions";

const initalState = {
    categories: [
        {
            name: "react",
            path: "react"
        },
        {
            name: "redux",
            path: "redux"
        },
        {
            name: "udacity",
            path: "udacity"
        }
    ],
    posts: [
        {
            id: "8xf0y6ziyjabvozdd253nd",
            timestamp: 1467166872634,
            title: "Udacity is the best place to learn React",
            body: "Everyone says so after all.",
            author: "thingtwo",
            category: "react",
            voteScore: 6,
            deleted: false,
            commentCount: 2
        },
        {
            id: "6ni6ok3ym7mf1p33lnez",
            timestamp: 1468479767190,
            title: "Learn Redux in 10 minutes!",
            body:
                "Just kidding. It takes more than 10 minutes to learn technology.",
            author: "thingone",
            category: "redux",
            voteScore: -5,
            deleted: false,
            commentCount: 0
        }
    ]
};

class NewsFeed extends React.Component {
    constructor() {
        super();
        this.state = initalState;
    }

    componentWillMount() {
        this.props.getTopics();
    }

    render() {
        const { posts, categories } = this.state;
        const { topics } = this.props;
        console.log("Rendering with topics set to: ", this.props.topics);

        const categoryOptions = categories.map(category => (
            <option key={category.name} name={category.name}>
                {capitalize(category.name)}
            </option>
        ));

        var groupSize = 3;
        var blogPosts = posts
            .map(post => {
                // map content to html elements
                return (
                    <div
                        key={`${post.title}:${post.timestamp}`}
                        className="col-sm-4"
                    >
                        <Post post={post} handleClick={this.handleClick} />
                    </div>
                );
            })
            .reduce(function(r, element, index) {
                // create element groups with size 3, result looks like:
                // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
                index % groupSize === 0 && r.push([]);
                r[r.length - 1].push(element);
                return r;
            }, [])
            .map(function(rowContent, idx) {
                // surround every group with 'row'
                return (
                    <div key={idx} className="row">
                        {rowContent}
                    </div>
                );
            });

        return (
            <div
                className="container-fluid"
                style={{
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    paddingTop: "20px"
                }}
            >
                <Banner
                    title="Welcome to Readable."
                    subtitle="Read. Contribute. Learn."
                />
                <div className="container">
                    <div>
                        <h1 style={{ display: "inline", paddingRight: "50%" }}>
                            News Feed
                        </h1>

                        <select style={{ display: "inline" }}>
                            <option disabled>Sort By Category</option>
                            <option default>All</option>
                            {categoryOptions}
                        </select>

                        <select style={{ display: "inline" }}>
                            <option disabled>Sort By</option>
                            <option>Date (Latest)</option>
                            <option>Date (Oldest)</option>
                            <option>Votes (Highest)</option>
                            <option>Votes (Lowest)</option>
                        </select>
                    </div>

                    <hr />
                    <div id="cards">{blogPosts}</div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { posts, comments, receiveTopics } = state;

    return {
        posts,
        comments,
        topics: receiveTopics.topics
    };
}

const mapDispatchToProps = dispatch => ({
    removePost: post => dispatch(removePost(post)),
    modifyPost: post => dispatch(modifyPost(post)),
    getTopics: () => dispatch(fetchTopics())
});
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
