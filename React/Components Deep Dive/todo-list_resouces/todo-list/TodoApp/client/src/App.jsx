import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header"
import Footer from "./components/Footer"
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">

        <TodoList/>
      </main>
      <Footer/>
    </>
  );
}

export default App
