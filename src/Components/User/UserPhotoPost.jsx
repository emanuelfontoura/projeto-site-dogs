import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input.jsx"
import Button from "../Forms/Button.jsx"
import Error from "../Help/Error.jsx"
import useForm from "../../Hooks/useForm.jsx"
import useFetch from "../../Hooks/useFetch.jsx"
import { useNavigate } from "react-router-dom";
import {PHOTO_POST} from "../../api.js"

const UserPhotoPost = () => {
    const nome = useForm()
    const peso = useForm('number')
    const idade = useForm('number')
    const [img, setImg] = React.useState({})
    const {data, error, loading, request} = useFetch()
    const navigate = useNavigate()

    React.useEffect(() => {
        if(data) navigate('/conta')
    }, [data, navigate])

    async function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('img', img.raw)
        formData.append('nome', nome.value)
        formData.append('peso', peso.value)
        formData.append('idade', idade.value)

        const {url, options} = PHOTO_POST(formData, window.localStorage.getItem('token'))
        await request(url, options)
    }

    function handleImgChange({target}){
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0]
        })
    }

    return <section className={`${styles.photoPost} animeLeft`}>
        <form  onSubmit={handleSubmit}>
            <Input label="Nome" type="text" id="nome" {...nome} />
            <Input label="Peso" type="number" id="peso" {...peso} />
            <Input label="Idade" type="number" id="idade" {...idade} />
            <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange} />
            {loading ? (
                <Button contentText="Enviar" disabled/>
            ): (
                <Button contentText="Enviar" />
            )}
            {error && <Error error={error} />}
        </form>
        <div>
            {img.preview && <div className={styles.preview} style={{backgroundImage: `url('${img.preview}')`}}></div>}
        </div>
    </section>
}

export default UserPhotoPost