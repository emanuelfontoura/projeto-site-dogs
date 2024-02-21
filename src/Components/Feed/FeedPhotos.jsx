import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error.jsx"
import Loading from "../Helper/Loading.jsx"
import styles from "./FeedPhotos.module.css"
import { PHOTOS_GET } from "../../api";

const FeedPhotos = ({setInfinite, page, user, setModalPhoto}) => {
    const {data, error, loading, request} = useFetch()

    React.useEffect(() => {
        async function fetchPhotos(){
            const total = 3
            const {url, options} = PHOTOS_GET({page, total, user})
            const {response, json} = await request(url, options)
            console.log(json)
            console.log(response)
            console.log(response.ok)
            if(response && response.ok && json.length < total){
                setInfinite(false)
            }
                
        }
        fetchPhotos()
    }, [])

    if(error) return <Error error={error} />
    if(loading) return <Loading />
    if(data){ 
        return <ul className={`${styles.feed} animeLeft`}>
                {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />)}
            </ul>
    }else{
        return null
    }
}

export default FeedPhotos