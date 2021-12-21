import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {
    const {id, title, body} = props.post;
    const navigate = useNavigate();

    const handleComments = id => {
        navigate(`/post/${id}`);
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick={() => handleComments(id)}>Show Comments</button>
        </div>
    );
};

export default Post;