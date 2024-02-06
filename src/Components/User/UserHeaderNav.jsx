import React from "react";
import MinhasFotos from '../../Assets/feed.svg?react'
import Estatisticas from '../../Assets/estatisticas.svg?react'
import Adicionar from '../../Assets/adicionar.svg?react'
import Sair from '../../Assets/sair.svg?react'
import styles from "./UserHeaderNav.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext.jsx"

const UserHeaderNav = () => {
    const [mobile, setMobile] = React.useState(null)
    const {userLogout} = React.useContext(UserContext)
    const navigate = useNavigate()

    function handleLogout(){
        userLogout()
        navigate('/login')
    }

    return <nav className={styles.nav}>
        <NavLink to='/conta' end><MinhasFotos />{mobile ? 'Minhas Fotos' : ''}</NavLink>
        <NavLink to='/conta/estatisticas' ><Estatisticas />{mobile ? 'Estatísticas' : ''}</NavLink>
        <NavLink to='/conta/postar' ><Adicionar />{mobile ? 'Adicionar Foto' : ''}</NavLink>
        <button onClick={handleLogout}><Sair />{mobile ? 'Sair' : ''}</button>
    </nav>
}

export default UserHeaderNav