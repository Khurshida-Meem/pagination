import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Post from './Post';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div>
            <div>
                {posts.length > 0 ? (
                    <>
                        <Pagination
                            data={posts}
                            RenderComponent={Post}
                            title="Posts"
                            pageLimit={10}
                            dataLimit={10}
                        />
                    </>
                ) : (
                    <h1>No Posts to display</h1>
                )}
            </div>
        </div>
    );
};

export default Posts;