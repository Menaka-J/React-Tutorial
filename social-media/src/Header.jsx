import React from 'react'

function Header(props) {
    const Apptitle = props.title;
    return (
        <>
            <header className='header'><h1>{Apptitle}</h1></header>
        </>
    )
}

export default Header
