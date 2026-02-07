import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Components/Welcome'
import Count from './Components/Count'

function App() {
   const greet={
    msg:"Welcome to React",
    name:'Manik'
   }

  return (
    <>
     
     <Count/>
    </>
  )
}

export default App
