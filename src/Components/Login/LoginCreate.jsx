import React from "react";
import Input from '../Forms/Input.jsx'
import Button from '../Forms/Button.jsx'
import useForm from '../../Hooks/useForm.jsx'
import { USER_POST } from '../../api.js'
import { UserContext } from "../../UserContext.jsx";

const LoginCreate = () => {
    const {userLogin} = React.useContext(UserContext)
    const [loading, setLoading] = React.useState(false)
    const username = useForm()
    const email = useForm('email')
    const password = useForm()

    async function handleSubmit(e){
        e.preventDefault()
        const {url, options} = USER_POST({username: username.value, email: email.value, password: password.value})
        if(username.value && email.value && password.value){
            try{
                setLoading(true)
                const fetchData = await fetch(url, options)
                if(!fetchData.ok) throw new Error('Algo inesperado ocorreu. Tente novamente!')
                userLogin(username.value, password.value)
            }catch(err){ 
            }finally{
                setLoading(false)
            }
        }
    }

    return <section className="animeLeft">
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
    </section>
}

export default LoginCreate