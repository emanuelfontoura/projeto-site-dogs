import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx"
import useForm from "../../Hooks/useForm.jsx";

const LoginForm = () => {
    const [error, setError] = React.useState(null)
    const username = useForm()
    const password = useForm()

    async function handleSubmit(e){
        e.preventDefault()
        if(username.validate() && password.validate()){
            try{
                const fetchData = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify()
                })
                const data = await fetchData.json()
            }catch (erro){
                setError(`Erro: ${erro}`)
            }
        }
    }

    if(error) return <p>{error}</p>
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