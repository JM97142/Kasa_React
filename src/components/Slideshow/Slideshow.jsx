import { useState } from "react"

import arrowLeft from '../../assets/fleche-gauche.png'
import arrowRight from '../../assets/fleche-droite.png'

function Slideshow(props) {
    const [slideshowIndex, setSlideshowIndex] = useState(0);

    const previousImg = () => {
        slideshowIndex > 0 ?
            setSlideshowIndex(slideshowIndex - 1) : setSlideshowIndex(props.pictures.length - 1)
    }
    const nextImg = () => {
        slideshowIndex < props.pictures.length - 1 ?
            setSlideshowIndex(slideshowIndex + 1) : setSlideshowIndex(0)
    }

    return (
        <div className="slideshow-wrapper">
            <button className="control-left" onClick={() => previousImg()}>
                <img src={arrowLeft} alt="" />
            </button>
            <img src={props.pictures[slideshowIndex]} alt="" className="slideshow-img" />
            <button className="control-right" onClick={() => nextImg()}>
                <img src={arrowRight} alt="" />
            </button>
        </div>
    )
}

export default Slideshow;