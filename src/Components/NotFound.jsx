import React from "react";
import Head from "./Helper/Head";

const NotFound = () => {
    return <div className="container mainContainer">
        <Head title='Error 404' description='Página não encontrada.' />
        <h1 className="title">Error 404</h1>
        <p>Página não encontrada.</p>
    </div>
}

export default NotFound