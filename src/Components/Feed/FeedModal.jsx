import React from "react";
import styles from "./FeedModal.module.css"
import useFetch from "../../Hooks/useFetch.jsx"
import Error from "../Helper/Error.jsx"
import Loading from "../Helper/Loading.jsx";
import PhotoContent from "../Photo/PhotoContent.jsx";
import { PHOTO_GET } from "../../api.js"

const FeedModal = ({setModalPhoto, modalPhoto}) => {
    const {data, error, loading, request} = useFetch()

    React.useEffect(() => {
        const {url, options} = PHOTO_GET(modalPhoto.id)
        request(url, options)
    }, [modalPhoto])

    const handleOutsideClick = ({target, currentTarget}) => {
        if(target === currentTarget){
            setModalPhoto(null)
        }
    }

    return <div className={styles.modal} onClick={handleOutsideClick}>
        {error && <Error error={error} />}
        {loading && <Loading />}
        {data && <PhotoContent data={data} />}
    </div>
}

export default FeedModal