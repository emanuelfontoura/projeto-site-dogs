import React from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer.jsx"
import Home from "./Components/Home.jsx"
import Login from "./Components/Login/Login.jsx"
import User from "./Components/User/User.jsx"
import ProtectedRoute from "./Components/Helper/ProtectedRoute.jsx"
import Photo from "./Components/Photo/Photo.jsx"
import './App.css'
import { UserStorage } from "./UserContext.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserProfile from "./Components/User/UserProfile.jsx"
import NotFound from "./Components/NotFound.jsx"

function App() {

  return <div className="App">
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="conta/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  </div>
}

export default App
