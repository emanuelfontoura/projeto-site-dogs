import React from "react";
import Feed from "../Feed/Feed";
import { useParams } from "react-router-dom";
import Head from "../Helper/Head.jsx"

const UserProfile = () => {
    const {user} = useParams()

    return <section className="container mainSection">
        <Head title={user} description='Página com as fotos postadas pelo usuário.' />
        <h1 className="title">{user}</h1>
        <Feed user={user}/>
    </section>
}

export default UserProfile