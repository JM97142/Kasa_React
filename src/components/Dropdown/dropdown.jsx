import '../Style/dropdown.css';

function Dropdown(props) {
    return (
        <div className="btn-wrapper">
            <div>{props.title}</div>
        </div>
    )
}

export default Dropdown;