import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Useapp from './Newprogram/Useapp'
import { Route, Router, Routes } from 'react-router-dom'
import StateBasic from './Newprogram/StateBasic'
import Counter from './Newprogram/counter'
import DisplayName from './Newprogram/DisplayName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Useapp/>
      <Routes>
        <Route path='/s' element={<StateBasic/>}/>
        <Route path='/c' element={<Counter/>}/>
        <Route path='/p' element={<DisplayName/>}/>
      </Routes>
    </>
  )
}

export default App
