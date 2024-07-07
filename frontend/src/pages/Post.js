import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Post Page</h1>
            <p>Post ID: {id}</p>
        </div>
    );
};

export default Post;