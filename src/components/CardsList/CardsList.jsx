import '../Style/card.css';
// Data
import { listLocations } from '../../data/locations';
// Components
import Cards from '../Cards/Cards';

function CardsList() {
    return (
        <div className="card-wrap">{listLocations.map((location, index) =>
            <Cards key={index} location={location} />
        )}</div>
    )
}

export default CardsList;