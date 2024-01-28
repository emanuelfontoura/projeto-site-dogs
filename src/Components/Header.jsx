import React from "react";
import styles from "./Header.module.css"
import Dogs from "../Assets/dogs.svg?react"
import { NavLink } from "react-router-dom";

const Header = () => {
    return <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
            <NavLink className={styles.logo} to="/" aria-label="Dogs - Home" end>
                <Dogs />
            </NavLink>
            <NavLink className={styles.login} to="/login">Login / Criar</NavLink>
        </nav>
    </header>
}

export default Header