import '../Style/card.css';
import Cards from '../Cards/Cards';
import { listLocations } from '../../data/locations';

function CardsList() {
    return (
        <div className="card-wrap">{listLocations.map((location, index) =>
            <Cards key={index} location={location} />
        )}</div>
    )
}

export default CardsList;