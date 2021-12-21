import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';
import './Comment.css';

const Comment = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [id])

    return (
        <div className='comments'>
            <div className="comment-title">
                <h1>Comments: {comments.length}</h1>
            </div>
            <div className="comment">
                {
                    comments.map(comment => <CommentDetails key={comment.id} comment={comment} />)
                }
            </div>
        </div>
    );
};

export default Comment;