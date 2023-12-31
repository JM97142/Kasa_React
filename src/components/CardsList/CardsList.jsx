// Data
import { listLocations } from '../../data/locations';
// Components
import Cards from '../Cards/Cards';

function CardsList() {
    return (
        <div className="card-wrapper">{listLocations.map((location, index) =>
            <Cards key={index} location={location} />
        )}</div>
    )
}

export default CardsList;