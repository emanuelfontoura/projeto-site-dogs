import React from "react";
import Enviar from "../../Assets/enviar.svg?react"
import useFetch from "../../Hooks/useFetch.jsx"
import Error from "../Helper/Error.jsx"
import styles from "./PhotoCommentsForm.module.css"
import { COMMENT_POST } from "../../api.js"

const PhotoCommentsForm = ({id, setComments}) => {
    const {error, request} = useFetch()
    const [comment, setComment] = React.useState('')

    async function handleSubmit(e){
        e.preventDefault()
        const {url, options} = COMMENT_POST(id, {comment})
        const {response, json} = await request(url, options)
        if(response.ok){
            setComment('')
            setComments((comments) => [...comments, json])
        }
    }

    return <form className={styles.form} onSubmit={handleSubmit}>
        <textarea className={styles.textarea} placeholder="Comente..." id="comment" name="comment" value={comment} onChange={({target}) => setComment(target.value)} />
        <button className={styles.button} ><Enviar /></button>
        {error && <Error error={error} />}
    </form>
}

export default PhotoCommentsForm