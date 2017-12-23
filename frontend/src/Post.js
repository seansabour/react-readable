import React from "react";
import UpVote from "react-icons/lib/fa/thumbs-o-up";
import DownVote from "react-icons/lib/fa/thumbs-o-down";
import moment from "moment";
import { Link } from "react-router-dom"

const Post = props => {
    return (
        <div className="card h-100">
            <div className="card-header text-center">
                <Link to={`${props.post.category}/${props.post.id}`} >
                    <h4 className="card-title h4">
                        {props.post.title || "Card Title"}
                    </h4>
                </Link>
                <h6 className="h6">By: {props.post.author || "Unknown"}</h6>
            </div>

            <div className="card-body">
                <p className="card-text">{props.post.body}</p>
            </div>
            <div className="card-footer clearfix">
                <div className="float-left text-left">
                    {moment(props.post.timestamp).format("M/D/YYYY, h:mm a")}
                </div>
                <div className="float-right text-right">
                    <DownVote color="red" />&nbsp;&nbsp;
                    {props.post.voteScore || 0}&nbsp;&nbsp;
                    <UpVote color="blue" />&nbsp;&nbsp;
                </div>
            </div>
        </div>
    );
};

export default Post;
