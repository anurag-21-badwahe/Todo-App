import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Note } from './components/Note'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <Navbar darkMode = {darkMode} setDarkMode={setDarkMode}/>
    <Note darkMode = {darkMode} setDarkMode={setDarkMode}/>
    </>
  )
}

export default App
