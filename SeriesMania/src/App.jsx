import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Seriescard from './Seriescard'

function App() {

  return (
    <>
      <Header></Header>

      <Seriescard></Seriescard>
      <Footer></Footer>
    </>
  )
}

export default App
