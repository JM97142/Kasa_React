import { useParams } from "react-router-dom"
// Data
import { listLocations } from "../../../data/locations"
// Components
import Slideshow from "../../Slideshow/Slighshow"
import Error from "../Error/404";

import '../../Style/logement.css'


function Logement() {
    const { id } = useParams();
    const locationId = listLocations.find(location =>
        location.id === id)

    return locationId ? (
        <div className="location-wrapper">
            <Slideshow pictures={locationId.pictures} />
        </div>
    ) : (
        <Error />
    )
}

export default Logement;