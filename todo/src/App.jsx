import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import Todolist from './components/Todolist';

function App() {

  return (
    <>
    <TodoForm/>
    <Todolist/>
    </>
  )
}

export default App
