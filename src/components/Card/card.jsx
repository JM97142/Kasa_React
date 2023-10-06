import { listLocations } from "../../data/locations";
import '../Style/card.css';

function Card(props) {
    // Récupération du titre des logements
    const titleLocation = listLocations.map(location =>
        <h2 key={location.id} className="card-name">{location.title}</h2>
    )

    return (
        <div className="card-wrap">{titleLocation}</div>
    )
}

export default Card;