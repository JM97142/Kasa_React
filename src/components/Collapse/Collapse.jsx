import { useState } from 'react'
// Components
import Arrow from '../../assets/fleche.png'

function Collapse(props) {
    const [isBtnClicked, setIsBtnClicked] = useState(false)

    return (
        <div className='collapse'>
            <button className='collapse-btn' onClick={() => setIsBtnClicked(!isBtnClicked)}>
                {props.title}
                <img src={Arrow} alt='' className={'collapse-arrow' + (isBtnClicked ? ' rotate' : '')} />
            </button>
            <p className={'collapse-btn-content' + (isBtnClicked ? ' isClicked' : '')}>{props.description}</p>
        </div >
    )
}

export default Collapse;