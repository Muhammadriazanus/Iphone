import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './App.css'
import Hero from './Components/Hero'
import Highlights from './Components/Highlights'
import Model from './Components/Model'

const  App=()=> {

  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      
    </main>
  )
}

export default App
