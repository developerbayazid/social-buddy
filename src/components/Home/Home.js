import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Home.css';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div className='home'>
            <h1>This is Home</h1>
            <h2>I have got {posts.length}</h2>
            {
                posts.map(post => <div className='post' key={post.id}><Post post={post} /></div>)
            }
        </div>
    );
};

export default Home;