import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/posts'); // Assure-toi que l'URL correspond à ta route backend
            setPosts(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>Author: {post.author.username}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;