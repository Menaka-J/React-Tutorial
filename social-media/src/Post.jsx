import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Post({ post }) {
    return (
        <article className='post'>
            <Link to={`post/${post.id}`} className='postlink'>
                <h2 className='posttitle'>{post.title}</h2>
                <p className='postdate'>{post.datetime}</p>
            </Link>

            <p className='postbody'>
                {post.body.length <= 25
                    ? post.body
                    : `${post.body.slice(0, 25)}...`}
            </p>
        </article>
    )
}

export default Post
