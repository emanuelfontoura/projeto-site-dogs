import React from "react";
import Input from "../Forms/Input.jsx"
import Button from "../Forms/Button.jsx"
import useForm from "../../Hooks/useForm.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import Error from "../Helper/Error.jsx"
import { PASSWORD_RESET } from "../../api.js"
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head.jsx";

const LoginPasswordReset = () => {
    const [key, setKey] = React.useState('')
    const [login, setLogin] = React.useState('')
    const password = useForm()
    const {data, error, loading, request} = useFetch()
    const navigate = useNavigate()

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const key = params.get('key')
        const login = params.get('login')
        if(key) setKey(key)
        if(login) setLogin(login)
    }, [])

    async function handleSubmit(e){
        e.preventDefault()
        if(password.validate()){
            const {url, options} = PASSWORD_RESET({
                login,
                key,
                password : password.value
            })
            const { response } = await request(url, options)
            if(response.ok) navigate('/login')
        }
    }

    return <section className="animeLeft">
        <Head title='Redefinir' description='Página para redefinir a sua senha.' />
        <h1 className="title" >Redefinir Senha</h1>
        <form onSubmit={handleSubmit}>
            <Input label="Nova Senha" type="password" id="password" {...password} />
            {loading ? <Button disabled contentText='Resetar' /> : <Button contentText='Resetar' />}
            {error && <Error error={error} />}
        </form>
    </section>
}

export default LoginPasswordReset