import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import NoPostFound from './NoPostFound';
import Loading from './Loading';
import TopicList from './TopicList';
import SortSelection from './SortSelection';
import { capitalize } from '../utils';
import { withRouter } from 'react-router-dom';
import { fetchPosts, sortPosts } from '../actions/posts';
import Notification from './Notification';

class NewsFeed extends React.Component {
    componentDidMount() {
        if (this.props.posts.length === 0) {
            this.props.fetchPosts();
        }
    }

    filterByActiveCategory = (posts, category = 'all') => {
        if (category === 'all') {
            return this.props.sortedIds.map(id => posts[id]);
        }
        return this.props.sortedIds
            .map(id => posts[id])
            .filter(post => post.category === category);
    };

    formatPostGrid = posts => {
        const groupSize = 3;
        return posts
            .map(post => (
                <div
                    key={`${post.title}:${post.timestamp}`}
                    className="col-sm-4">
                    <Post post={post} />
                </div>
            ))
            .reduce((r, element, index) => {
                index % groupSize === 0 && r.push([]);
                r[r.length - 1].push(element);
                return r;
            }, [])
            .map((rowContent, idx) => (
                <div key={idx} className="row">
                    {rowContent}
                </div>
            ));
    };

    handleSelection = name => {
        this.props.sortPosts(name);
    };

    render() {
        const { posts, isFetching } = this.props;
        const filter = this.props.match.params.filter;
        const filterAndSortedPosts = this.filterByActiveCategory(posts, filter);
        const formattedPosts = this.formatPostGrid(filterAndSortedPosts);

        return (
            <div>
                <div className="container page">
                    <Notification />
                    <div className="text-center">
                        Discover: <TopicList />
                    </div>
                    <div>
                        <h1
                            style={{
                                display: 'inline',
                                paddingRight: '63%'
                            }}>
                            News Feed
                        </h1>

                        <SortSelection handleSelection={this.handleSelection} />
                    </div>

                    <hr />
                    <div id="cards">
                        {isFetching ? (
                            <Loading
                                type="spinningBubbles"
                                color="black"
                                height={64}
                                width={64}
                            />
                        ) : formattedPosts.length > 0 ? (
                            formattedPosts
                        ) : (
                            <NoPostFound
                                category={capitalize(filter || 'all')}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ posts }) => ({
    posts: posts.byID,
    isFetching: posts.isFetching,
    alert: posts.alert,
    sortedIds: posts.sortedIds
});

export default withRouter(
    connect(mapStateToProps, { fetchPosts, sortPosts })(NewsFeed)
);
