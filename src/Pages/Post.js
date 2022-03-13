import React from 'react';
import './Post.css'

const Post = (props) => {

    const { id, title, body } = props.data;

    return (
        <div>
            <div className="post">
                <small>{id}</small>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Post;