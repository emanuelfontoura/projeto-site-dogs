import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import Error from "../Help/Error.jsx"
import Loading from "../Help/Loading.jsx"
import { PHOTOS_GET } from "../../api";

const FeedPhotos = () => {
    const {data, error, loading, request} = useFetch()

    React.useEffect(() => {
        async function fetchPhotos(){
            const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0})
            const {response, json} = await request(url, options)
            console.log(json)
        }
        fetchPhotos()
    }, [])

    if(error) return <Error error={error} />
    if(loading) return <Loading />
    if(data){ 
        return <div>
            <ul>
                {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} />)}
            </ul>
        </div>
    }else{
        return null
    }
}

export default FeedPhotos