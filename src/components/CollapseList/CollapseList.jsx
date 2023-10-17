import { useState } from 'react'
// Data
import { aboutContent } from '../../data/aboutContent'
// Components
import Collapse from '../Collapse/Collapse'

function CollapseList() {
    const [isBtnClicked, setIsBtnClicked] = useState(false)

    const collapseListItem = aboutContent.map((content, index) =>
        <div key={index}>
            <button className='about-btn' onClick={() => setIsBtnClicked(!isBtnClicked)}>{content.title}</button>
            <p className={'about-btn-content' + (isBtnClicked ? ' isClicked' : '')}>{content.description}</p>
        </div>
    )

    const items = [{
        item: collapseListItem
    }]

    return (
        items.map((item, index) =>
            <Collapse key={index} item={item} />
        )
    )
}

export default CollapseList;