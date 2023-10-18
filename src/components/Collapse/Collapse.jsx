import { useState } from 'react'

import '../Style/collapse.css'

function Collapse(props) {
    const [isBtnClicked, setIsBtnClicked] = useState(false)

    return (
        <div className="btn-wrapper">
            <button className='about-btn' onClick={() => setIsBtnClicked(!isBtnClicked)}>{props.title}</button>
            <p className={'about-btn-content' + (isBtnClicked ? ' isClicked' : '')}>{props.description}</p>
        </div >
    )
}

export default Collapse;