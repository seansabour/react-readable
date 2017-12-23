import React from "react";
import "whatwg-fetch";
class Footer extends React.Component {
    state = {
        quote: "",
        author: ""
    };
    // TODO: Change this to REDUX to display quote of the day!
    async componentWillMount() {
        const response = await fetch(
            "http://quotes.rest/qod.json?category=inspire"
        );
        const json = await response.json();

        this.setState({
            quote: json.contents.quotes[0].quote,
            author: json.contents.quotes[0].author
        });
    }
    render() {
        return (
            <div
                id="footer"
                className="container-fluid fixed-bottom text-center align-middle"
            >
                <em>
                    "{this.state.quote}" - {this.state.author}
                </em>
            </div>
        );
    }
}

export default Footer;
