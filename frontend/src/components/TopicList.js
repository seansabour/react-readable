import React, { Component } from 'react';
import FilterLink from './FilterLink';
import { capitalize } from '../utils';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTopics } from '../actions/topics';

class TopicList extends Component {
    componentDidMount() {
        if (this.props.topics.length <= 1) {
            this.props.getTopics();
        }
    }

    render() {
        const { topics } = this.props;
        const categoryOptions = topics.map(topic => (
            <FilterLink key={topic} topic={topic}>
                {capitalize(topic + ' ')}
            </FilterLink>
        ));
        return (
            <div style={{ display: 'inline' }} className="text-right">
                {categoryOptions}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    topics: state.topics.names
});

const mapDispatchToProps = dispatch => ({
    getTopics: topics => dispatch(fetchTopics(topics))
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TopicList)
);
