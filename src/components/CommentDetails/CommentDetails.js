import React from 'react';
import './CommentDetails.css';

const CommentDetails = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div className='commentDetails'>
            <h1>{name}</h1>
            <h3>{email}</h3>
            <p>{body}</p>
        </div>
    );
};

export default CommentDetails;