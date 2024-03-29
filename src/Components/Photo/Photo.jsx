import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import { PHOTO_GET_UNIQUE } from "../../api";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";
import Head from "../Helper/Head.jsx"

const Photo = () => {
    const {id} = useParams()
    const {data, loading, error, request} = useFetch()

    React.useEffect(() => {
        const {url} = PHOTO_GET_UNIQUE(id)
        request(url)
    }, [id])
    
    if(error) return <Error error={error} />
    if(loading) return <Loading />
    if(data){
        return <section className="container mainContainer">
            <Head title={data.photo.title} description='Página com uma das fotos que o usuário postou.' />
            <PhotoContent data={data} single={true} />
        </section>
    }else{
        return null
    }
}

export default Photo