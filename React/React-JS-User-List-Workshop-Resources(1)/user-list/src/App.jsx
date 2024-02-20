import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./components/styles.css"
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import UserList from './components/UserList.jsx'

function App() {
  return (
    <>
      <main className="main">
        <Header/>

        <UserList/>

        <Footer/>
      </main>
    </>
  )
}

export default App
