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
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Post from './Post'
import PostLayout from './PostLayout'

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "January 01, 2026 00:00:00 AM",
      body: "Stepping into 2026 with gratitude #newyear #celebrate"
    },
    {
      id: 2,
      title: "My Second Post",
      datetime: "July 28, 2025 09:10:00 AM",
      body: "Celebrating my Birthday #party #myself"
    }, {
      id: 3,
      title: "My Third Post",
      datetime: "December 18, 2026 12:00:00 PM",
      body: "The world is DOOMED #marvel #doomsday"
    }, {
      id: 4,
      title: "My Fourth Post",
      datetime: "May 31, 2022 12:34:23 PM",
      body: "The last day of school #school #life"
    }
  ]);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    Navigate('/');
  }
  return (
    <>
      <div className='App'>
        <Header title="PostMania"></Header>
        <Nav search={search} setSearch={setSearch}></Nav>
        <Home posts={posts}></Home>
        <NewPost></NewPost>
        <PostPage></PostPage>
        <About></About>
        <Missing></Missing>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App


// <>
//       <div className='App'>

//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/postpage">Postpage</Link></li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/newpost' element={<NewPost />} />
//           <Route path='/postpage' element={<PostLayout />}>
//             <Route index element={<PostPage />} />
//             <Route path=':id' element={<Post />} />
//             <Route path='newpost' element={<NewPost />} />
//           </Route>
//           <Route path='*' element={<Missing />} />
//         </Routes>

//         {/* <Header></Header>
//         <Nav></Nav>
//         <Home></Home>
//         <NewPost></NewPost>
//         <PostPage></PostPage>
//         <About></About>
//         <Missing></Missing>
//         <Footer></Footer> */}
//       </div>

//     </>
