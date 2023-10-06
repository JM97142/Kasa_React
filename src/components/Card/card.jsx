import '../Style/card.css';

function Card(props) {

    return (
        <div className="card-wrap">{props.title}</div>
    )
}

export default Card;