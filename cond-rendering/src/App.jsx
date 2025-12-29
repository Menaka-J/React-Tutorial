import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usergreet from './Usergreet'

function App() {

  return (
    <>
      <Usergreet isLogged={true} name="Menaka"></Usergreet>
    </>
  )
}

export default App
