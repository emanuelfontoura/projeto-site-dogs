import React from "react";
import { UserContext } from "../../UserContext.jsx";
import { Link } from "react-router-dom";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx"
import useForm from "../../Hooks/useForm.jsx";

const LoginForm = () => {
    const username = useForm()
    const password = useForm()
    const {userLogin} = React.useContext(UserContext)

    async function handleSubmit(e){
        e.preventDefault()
        if(username.validate() && password.validate()){
            userLogin(username.value, password.value)
        }
    }

    return <section>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
            <Input type="text" label="Usário" id="user" placeholder="Usuário" {...username}/>
            <Input type="password" label="Senha" id="password" placeholder="Senha" {...password}/>
            <Button contentText="Entrar"/>
        </form>
        <Link to="/login/criar">Cadastro</Link>
    </section>
}

export default LoginForm