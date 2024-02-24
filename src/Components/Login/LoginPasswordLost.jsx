import React from "react";
import Input from "../Forms/Input.jsx"
import Button from "../Forms/Button.jsx"
import useForm from "../../Hooks/useForm.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import Error from "../Helper/Error.jsx"
import { PASSWORD_LOST } from "../../api.js"
import Head from "../Helper/Head.jsx";

const LoginPasswordLost = () => {
    const login = useForm()
    const {data, error, loading, request} = useFetch()

    async function handleSubmit(e){
        e.preventDefault()
        if(login.validate()){
            const {url, options} = PASSWORD_LOST({login : login.value, url: window.location.href.replace('perdeu', 'resetar')})
            const {json} = await request(url, options)
        }
    }

    return <section className="animeLeft">
        <Head title='Perdeu' description='Página para recuperar a sua senha.' />
        <h1 className="title">Perdeu a senha?</h1>
        {data ? <p style={{color: '#4c1'}}>{data}</p> : <form onSubmit={handleSubmit}>
            <Input type="text" label="Email / Usuário" id="email" {...login} />
            {loading ? <Button disabled contentText="Enviando..." /> : <Button contentText="Enviar Email" />}
            {error && <Error error={error} />}
        </form>}
    </section>
}

export default LoginPasswordLost