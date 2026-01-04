import React from 'react'
import Post from './Post';

function Feed(props) {
    const posts = props.posts;

    return (
        <>
            {posts.map(post => {
                <Post key={post.id} post={post}></Post>
            })}
        </>
    )
}

export default Feed
