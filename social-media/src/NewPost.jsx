import React from 'react'

function NewPost({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) {
    return (
        <>
            <div className='NewPost'>
                <h2>New Post</h2>
                <form className='newpostform' onSubmit={handleSubmit}>
                    <label htmlFor="posttitle">Title:</label>
                    <input type="text" id="posttitle" required value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />

                    <label htmlFor="postbody">Post:</label>
                    <textarea id="postbody" required value={postBody} onChange={(e) => setPostBody(e.target.value)}></textarea>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default NewPost
