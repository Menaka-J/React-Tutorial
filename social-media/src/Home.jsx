import React from 'react'
import Feed from './Feed';

function Home({posts}) {
    // const posts = props.posts;
    return (
        <>
            <div className='Home'>
                {posts.length ? (
                    <Feed posts={posts}></Feed>
                ) : (
                    <p style={{ marginTop: "2rem" }}>
                        No Posts to display.
                    </p>
                )}
            </div>
        </>
    )
}

export default Home
 