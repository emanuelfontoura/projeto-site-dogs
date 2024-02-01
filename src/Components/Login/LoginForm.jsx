import React from "react";
import { UserContext } from "../../UserContext.jsx";
import { Link } from "react-router-dom";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx"
import useForm from "../../Hooks/useForm.jsx";
import Error from "../Help/Error.jsx";
import styles from "./LoginForm.module.css"
import stylesBtn from "../Forms/Button.module.css";

const LoginForm = () => {
    const username = useForm()
    const password = useForm()
    const {userLogin, error, loading} = React.useContext(UserContext)

    async function handleSubmit(e){
        e.preventDefault()
        if(username.validate() && password.validate()){
            userLogin(username.value, password.value)
        }
    }

    return <section className="animeLeft">
        <h1 className="title">Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input type="text" label="Usário" id="user" placeholder="Usuário" {...username}/>
            <Input type="password" label="Senha" id="password" placeholder="Senha" {...password}/>
            {loading ? (
                <Button disabled contentText="Entrar"/>
            ) : (
                <Button contentText="Entrar"/>
            )}
            <Error error={error} />
        </form>
        <Link className={styles.perdeu} to="/login/perdeu">Esqueci a senha</Link>
        <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link  className={stylesBtn.button} to="/login/criar">Cadastro</Link>
        </div>
    </section>
}

export default LoginForm