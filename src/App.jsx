import { useState } from 'react'
import './App.css'
import { Card } from './Card'
import {PokeInfo} from "./Poke-info";


function App() {

  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className="right-content">
          <PokeInfo/>
        </div>
      </div>
    </>
  )
}

export default App
