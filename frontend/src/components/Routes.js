import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewsFeed from './NewsFeed';
import NewPost from './NewPost';
import DetailedPost from './DetailedPost';
import EditPost from './EditPost';

const Routes = props => (
    <div id="content">
        <div className="container-fluid">
            <Switch>
                <Route exact path="/:filter?" component={NewsFeed} />
                <Route exact path="/posts/new" component={NewPost} />
                <Route exact path="/edit/:post_id" component={EditPost} />
                <Route path="/:category/:post_id" component={DetailedPost} />
            </Switch>
        </div>
    </div>
);
export default Routes;
