import React from 'react'
import {Route, Routes} from 'react-router'
import Landing from './pages/Landing/landing'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ToDolist from './pages/ToDo/ToDolist'

function App() {
  return (
    <Routes>
        <Route path = "/" element = {<Landing />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/to-do-list" element = {<ToDolist />} />
    </Routes>
  )
}

export default App
