import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student/Student'

function App() {

  return (
    <>
      <Student name="Menaka" age={19} dept="AI&DS" hashonour={false}></Student>
      <Student name="Meena" age={19} dept="AI&DS" hashonour={true}></Student>
      <Student name="Hemalathaa" age={20} dept="IT" hashonour={true} ></Student>
      <Student name="Lavanya" age={21} dept="CT" hashonour={false}></Student>
    </>
  )
}

export default App
