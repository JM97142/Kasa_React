import { aboutContent } from '../../data/aboutContent'
import Collapse from '../Collapse/Collapse'
import { useState } from 'react'

function CollapseList() {
    const [isBtnClicked, setIsBtnClicked] = useState(false);

    const collapseListTitle = aboutContent.map((content, index) =>
        <button key={index} className='about-btn' onClick={() => setIsBtnClicked(!isBtnClicked)}>{content.title}</button>
    )
    const collapseListContent = aboutContent.map((content, index) =>
        <p key={index} className={'about-btn-content' + (isBtnClicked ? ' isClicked' : '')}>{content.description}</p>
    )
    const items = [{
        title: collapseListTitle,
        content: collapseListContent
    }]

    return (
        <div>{items.map((item, index) =>
            <Collapse key={index} item={item} />
        )}</div>
    )
}

export default CollapseList;