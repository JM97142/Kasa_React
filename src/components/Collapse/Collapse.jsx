import { useState } from 'react'
// Components
import Arrow from '../../assets/fleche.png'
import './collapse.css'

function Collapse(props) {
    const [isBtnClicked, setIsBtnClicked] = useState(false)

    return (
        <div className='collapse'>
            <button className='collapse-btn' onClick={() => setIsBtnClicked(!isBtnClicked)}>
                {props.title}
                <img src={Arrow} alt='' className={'collapse-arrow' + (isBtnClicked ? ' rotate' : '')} />
            </button>
            {(props.content) ? (
                <ul className={'collapse-content' + (isBtnClicked ? ' isClicked' : '')}>
                    {props.content.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            ) : (
                <p className={'collapse-content' + (isBtnClicked ? ' isClicked' : '')}>{props.description}</p>
            )}
        </div>
    )
}

export default Collapse;