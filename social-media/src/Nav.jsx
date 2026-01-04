import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <>
            <nav className='Nav'>
                <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="search">Search Post</label>
                    <input type="text" value={props.search} onChange={(e)=>props.setSearch(e.target.value)} id="search" placeholder='Search Posts' />
                </form>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/post'>Post</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
