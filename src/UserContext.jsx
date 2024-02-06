import React from "react";
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "./api";
import { useNavigate } from "react-router-dom"; 

export const UserContext = React.createContext()

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null)
    const [login, setLogin] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const navigate = useNavigate()

    // FAZ LOGIN AUTOMÁTICO QUANDO ABRE A PÁGINA
    React.useEffect(() => {
        const autoLogin = async () => {
            const token = window.localStorage.getItem('token')
            if(token){
                try{
                    setError(null)
                    setLoading(true)
                    const {url, options} = TOKEN_VALIDATE_POST(token)
                    const fetchData = await fetch(url, options)
                    if(!fetchData.ok) throw new Error('Token inválido!')
                    await getUser(token)
                    navigate('/conta')
                }catch (erro) {
                    setError('Erro: ' + erro)
                    userLogout()
                }finally{
                    setLoading(false)
                }
            }else{
                setLogin(false)
            }
        }
        autoLogin()
    }, [])

    // PEGA O TOKEN
    async function userLogin(username, password){
        const {url, options} = TOKEN_POST({username, password})
        try{
            setError(null)
            setLoading(true)
            const fetchData = await fetch(url, options)
            if(!fetchData.ok) throw new Error('Usuário e/ou senha incorreto(s).')
            const data = await fetchData.json()
            window.localStorage.setItem('token', data.token)
            await getUser(data.token)
            navigate('/conta')
        }catch (erro){
            setError(erro.message)
            setLogin(false)
        }finally{
            setLoading(false)
        }
    }

    // FAZER O LOGOUT DO USUÁRIO
    const userLogout = React.useCallback(
        async function () {
            setData(null)
            setError(null)
            setLoading(false)
            setLogin(false)
            window.localStorage.removeItem('token')
        },
    [])

    // PUXA O USER DE ACORDO COM O TOKEN PEGO
    async function getUser(token){
        const {url, options} = USER_GET(token)
        try{
            const fetchData = await fetch(url, options)
            const data = await fetchData.json()
            setData(data)
            setLogin(true)
        }catch (erro){
        }
    }

    return <UserContext.Provider value={{userLogin, userLogout, data, error, loading, login}}>
        {children}
    </UserContext.Provider>
}