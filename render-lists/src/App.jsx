import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'

function App() {

  const cricketplayers = [{ id: 1, name: "MS Dhoni", team: "India" },
  { id: 2, name: "Steve Smith", team: "Australia" },
  { id: 3, name: "Aiden Markram", team: "South Africa" },
  { id: 4, name: "Kane Williamson", team: "New Zealand" },
  { id: 5, name: "Jos Buttler", team: "England" }]

  const f1players = [{ id: 1, name: "Max Verstappen", team: "Red Bull" },
  { id: 2, name: "Charles Leclerc", team: "Ferrari" },
  { id: 3, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 4, name: "Oscar Piastri", team: "McLaren" },
  { id: 5, name: "George Rusell", team: "Mercedes" }]

  return (
    <>
      {cricketplayers.length>0 && <List playersList={cricketplayers} sportName="CRICKET"></List>}
      {f1players.length>0 && <List playersList={f1players} sportName="F1"></List>}
    </>
  )
}

export default App
