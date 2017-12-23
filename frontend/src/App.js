import React from "react";
import Header from "./Header";
import NewsFeed from "./NewsFeed";
import NewPost from "./NewPost";
import Footer from "./Footer";
import DetailedPost from "./DetailedPost";

import { Switch, Route } from "react-router-dom";

const App = props => {
    return (
        <div>
            <Header />

            <Switch>
                <Route exact path="/" component={NewsFeed} />
                <Route exact path="/posts/new" component={NewPost} />

                <Route path="/:category/:post_id" component={DetailedPost} />
            </Switch>

            <Footer />
        </div>
    );
};

export default App;
