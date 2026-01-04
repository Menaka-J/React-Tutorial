import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Nav from './Nav'
import PostPage from './PostPage'
import NewPost from './NewPost'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'
import Home from './Home'
import { Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='App'>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/newpost">Newpost</Link></li>
            <li><Link to="/postpage">Postpage</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/newpost' element={<NewPost />} />
          <Route path='/postpage' element={<PostPage/>} />
        </Routes>

        {/* <Header></Header>
        <Nav></Nav>
        <Home></Home>
        <NewPost></NewPost>
        <PostPage></PostPage>
        <About></About>
        <Missing></Missing>
        <Footer></Footer> */}
      </div>

    </>
  )
}

export default App
