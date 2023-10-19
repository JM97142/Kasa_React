import { useState } from 'react'

import Arrow from '../Assets/fleche-collapse.png'
import '../Style/collapse.css'

function Collapse(props) {
    const [isBtnClicked, setIsBtnClicked] = useState(false)

    return (
        <div className='collapse-btn'>
            <button onClick={() => setIsBtnClicked(!isBtnClicked)}>
                {props.title}
                <img src={Arrow} alt='' className={'collapse-arrow' + (isBtnClicked ? ' rotate' : '')} />
            </button>
            <p className={'collapse-btn-content' + (isBtnClicked ? ' isClicked' : '')}>{props.description}</p>
        </div >
    )
}

export default Collapse;