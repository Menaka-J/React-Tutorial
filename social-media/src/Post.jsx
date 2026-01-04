import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const { id } = useParams();
    return (
        <>
            <h3>Post {id} in Socialmedia</h3>
        </>
    )
}

export default Post
