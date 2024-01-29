import React from "react";
import { TOKEN_POST, USER_GET } from "./api";

export const UserContext = React.createContext()

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null)
    const [login, setLogin] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    // PEGA O TOKEN
    async function userLogin(username, password){
        const {url, options} = TOKEN_POST({username, password})
        try{
            const fetchData = await fetch(url, options)
            const data = await fetchData.json()
            window.localStorage.setItem('token', data.token)
            getUser(data.token)
            console.log(data)
        }catch (erro) {
            setError('Erro ' + erro)
        }
    }

    // PUXA O USER DE ACORDO COM O TOKEN PEGO
    async function getUser(token){
        const {url, options} = USER_GET(token)
        try{
            const fetchData = await fetch(url, options)
            const data = await fetchData.json()
            setData(data)
            setLogin(true)
            console.log(data)
        }catch (erro){
            setError('Erro ' + erro)
        }
    }

    return <UserContext.Provider value={{userLogin, data}}>
        {children}
    </UserContext.Provider>
}