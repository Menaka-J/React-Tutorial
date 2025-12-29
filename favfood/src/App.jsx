import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'

function App() {

  return (
    <>
      <Header></Header>
      <Food></Food>
      <Footer></Footer>
    </>
  )
}

export default App
