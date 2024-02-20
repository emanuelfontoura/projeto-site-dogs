import React from "react";
import styles from "./PhotoDelete.module.css"
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";

const PhotoDelete = ({id}) => {
    const {error, loading, request} = useFetch()

    async function handleClick(){
        const confirm = window.confirm('Tem certeza que deseja deletar esta foto?')
        if(confirm){
            const {url, options} = PHOTO_DELETE(id)
            const {response} = await request(url, options)
            if(response.ok) window.location.reload()
        }
    }

    return <>
        {loading ? 
        <button disabled className={styles.delete}>Deletar</button> : 
        <button onClick={handleClick} className={styles.delete}>Deletar</button>}
        {error && <Error error={error} />}
    </>
}

export default PhotoDelete