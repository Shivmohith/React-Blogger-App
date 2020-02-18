import React from 'react';

const PostDetail = (props) =>
    <div>
        <div>
        <div>
            <h4>Title: {props.post.title}</h4>
        </div>
        <div>
            <h4>Author: {props.post.author}</h4>
        </div>
        <div>
            <h4>Category: {props.post.category}</h4>
        </div>
        <div>
            <p>{props.post.content}</p>
        </div>
        <hr />
    </div>
    </div>

export default PostDetail 