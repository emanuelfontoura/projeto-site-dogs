import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import LoginCreate from "./LoginCreate.jsx"
import LoginPasswordLost from "./LoginPasswordLost.jsx"
import LoginPasswordReset from "./LoginPasswordReset.jsx"
import styles from "./Login.module.css"

const Login = () => {
    return <div>
        Login
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/criar" element={<LoginCreate />} /> 
            <Route path="/perdeu" element={<LoginPasswordLost />} />
            <Route path="/resetar" element={<LoginPasswordReset />} />
        </Routes>
    </div>
}

export default Login