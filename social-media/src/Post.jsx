import React from 'react'
import { useParams } from 'react-router-dom'

function Post(props) {
    const posts = props.posts;

    return (
        <>
            <article className='post'>
                <h2 className='posttitle'>{posts.title}</h2>
                <p className='postdate'>{posts.datetime}</p>
                <p className='postbody'>
                    {(posts.body).length <= 25 ? posts.body : `${(posts.body).slice(0, 25)}...`}
                </p>
            </article>
        </>
    )
}

export default Post
