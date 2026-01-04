import React from 'react'
import { Link, useParams } from 'react-router-dom'

function PostPage({ posts, handledelete }) {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    return (
        <>
            <div className='postpage'>
                <article className='post'>
                    {
                        post &&
                        <>
                            <h2>{post.title}</h2>
                            <p className='postdate'>{post.datetime}</p>
                            <p className='postbody'>{post.body}</p>
                            <button onClick={() => handledelete(post.id)}>Delete Post</button>
                        </>
                    }
                    {
                        !post &&
                        <>
                            <h2>Post not found!</h2>
                            <p>Sorry, Some Error occured 😢</p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </>
                    }
                </article>
            </div>
        </>
    )
}

export default PostPage

//for study 