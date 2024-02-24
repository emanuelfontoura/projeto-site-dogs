import React from "react";
import Input from '../Forms/Input.jsx'
import Button from '../Forms/Button.jsx'
import useForm from '../../Hooks/useForm.jsx'
import { USER_POST } from '../../api.js'
import { UserContext } from "../../UserContext.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import Error from "../Helper/Error.jsx"
import Head from "../Helper/Head.jsx"

const LoginCreate = () => {
    const {userLogin} = React.useContext(UserContext)
    const username = useForm()
    const email = useForm('email')
    const password = useForm()
    const {loading, error, request} = useFetch()

    async function handleSubmit(e){
        e.preventDefault()
        const {url, options} = USER_POST({username: username.value, email: email.value, password: password.value})
        if(username.validate() && email.validate() && password.validate()){
            const {response} = await request(url, options)
            if(response.ok) userLogin(username.value, password.value)
        }
    }

    return <section className="animeLeft">
        <Head title='Criar' description='Página para criar a sua conta.' />
        <h1 className="title">Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
            <Input type="text" label="Usuário" id="username" placeholder="Usuário" {...username}/>
            <Input type="text" label="Email" id="email" placeholder="Email" {...email}/> 
            <Input type="password" label="Senha" id="password" placeholder="Senha" {...password}/>
            {loading ? (
                <Button disabled contentText="Cadastrar"/>
            ) : (
                <Button contentText="Cadastrar"/>
            )}
        </form>
        {error && <Error error={error} />}
    </section>
}

export default LoginCreate