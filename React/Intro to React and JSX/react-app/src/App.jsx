import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  return(
    <div>
        <Header></Header>
        <Slider></Slider>
        <Info></Info>
        <Layolt></Layolt>
        <Loyalt></Loyalt>
        <Service></Service>
        <Slider></Slider>
        <Client></Client>
        <Header></Header>
    </div>
  );
}

export default App
