import '../Style/dropdown.css'

function Collapse(props) {
    return (
        <div className="btn-wrapper">
            <div key={props.index} className='btn-title'>{props.item.title}</div>
            <div key={props.index} className='btn-text'>{props.item.content}</div>
        </div>
    )
}

export default Collapse;