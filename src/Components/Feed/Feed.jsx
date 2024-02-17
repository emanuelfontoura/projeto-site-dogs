import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos.jsx"

const Feed = () => {
    const [modalPhoto, setModalPhoto] = React.useState(null)
    console.log(modalPhoto)
    return <div>
        {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} modalPhoto={modalPhoto} />}
        <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
}

export default Feed