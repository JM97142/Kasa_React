import { useState } from "react";
import '../Style/slideshow.css'

function Slideshow(props) {
    const [slideshowId, setSlideshowId] = useState(0);

    const previousImg = () => {
        slideshowId > 0 ?
            setSlideshowId(slideshowId - 1) : setSlideshowId(props.pictures.length - 1)
    }
    const nextImg = () => {
        slideshowId < props.pictures.length - 1 ?
            setSlideshowId(slideshowId + 1) : slideshowId(0)
    }

    return (
        <div className="slideshow-wrapper">
            <button onClick={() => previousImg()}>Prev</button>
            <img src={props.pictures[slideshowId]} alt="" className="slideshow-img" />
            <button onClick={() => nextImg()}>Next</button>
        </div>
    )
}

export default Slideshow;