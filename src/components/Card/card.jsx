import { listLocations } from "../../data/locations";
import '../Style/card.css';

function Card(props) {
    // Récupération du titre des logements
    const titleLocation = listLocations.map(location =>
        <div>
            <h1>{location.title}</h1>
        </div>
    )

    return (
        <div className="card-location">{titleLocation}</div>
    )
}

export default Card;