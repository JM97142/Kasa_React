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
            <div className="slideshow-controls">
                <button className="control-left" onClick={() => previousImg()}>
                    <img src={arrowLeft} alt="" />
                </button>
                <p className="slideshow-number">{slideshowIndex + 1}/{props.pictures.length}</p>
                <button className="control-right" onClick={() => nextImg()}>
                    <img src={arrowRight} alt="" />
                </button>
            </div>
            <img src={props.pictures[slideshowIndex]} alt="" className="slideshow-img" />
            {/* <div className="slideshow-number">
                <p>{slideshowIndex + 1}/{props.pictures.length}</p>
            </div> */}
        </div>
    )
}

export default Slideshow;