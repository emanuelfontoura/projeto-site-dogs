import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos.jsx"

const Feed = ({user}) => {
    const [modalPhoto, setModalPhoto] = React.useState(null)
    const [pages, setPages] = React.useState([1])
    const [infinite, setInfinite] = React.useState(true)

    React.useEffect(() => {
        let wait = false
        function infiniteScroll(){
            if(infinite){
                const scroll = window.scrollY
                const height = document.body.offsetHeight - window.innerHeight
                console.log(infinite)
                if((scroll > (height*0.75)) && !wait){
                    setPages((pages) => [...pages, pages.length + 1])
                    wait = true
                    setTimeout(() => {
                        wait = false
                    }, 500)
                }
            }
        }
        window.addEventListener('wheel', infiniteScroll)
        window.addEventListener('scroll', infiniteScroll)
        return () => {
            window.removeEventListener('wheel', infiniteScroll)
            window.removeEventListener('scroll', infiniteScroll)
        }
    }, [infinite])

    return <div>
        {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} modalPhoto={modalPhoto} />}
        {pages.map(page => {
            return <FeedPhotos key={page} setInfinite={setInfinite} user={user} page={page} setModalPhoto={setModalPhoto} />
        })}
    </div>
}

export default Feed