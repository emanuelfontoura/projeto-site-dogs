import React from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer.jsx"
import Home from "./Components/Home.jsx"
import Login from "./Components/Login/Login.jsx"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
}

export default App
