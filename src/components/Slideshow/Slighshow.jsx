import { useState } from "react";
import '../Style/slideshow.css'

function Slideshow(props) {
    const [slideshowId, setSlideshowId] = useState(0);

    return (
        <div className="slideshow-wrapper">
            <img src={props.pictures[slideshowId]} alt="" className="slideshow-img" />
        </div>
    )
}

export default Slideshow;