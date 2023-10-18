import { useParams } from "react-router-dom"
// Data
import { listLocations } from "../../../data/locations"
// Components
import Slideshow from "../../Slideshow/Slighshow"
import Collapse from "../../Collapse/Collapse";
import Rating from "../../Rating/Rating";
import Error from "../Error/404";

import '../../Style/logement.css'


function Logement() {
    const { id } = useParams();
    const locationId = listLocations.find(location =>
        location.id === id)

    return locationId ? (
        <div className="location-wrapper">
            <Slideshow pictures={locationId.pictures} />
            <div className="location-header">
                <div className="location-name">
                    <h2>{locationId.title}</h2>
                    <h3>{locationId.location}</h3>
                </div>
                <div className="location-host">
                    <h3>{locationId.host.name}</h3>
                    <img src={locationId.host.picture} alt="" className="host-img" />
                </div>
            </div>
            <div className="location-tags">
                <h3>{locationId.tags}</h3>
                <div className="location-ratings">
                    <Rating rating={locationId.rating} />
                </div>
            </div>
            <div className="location-btn">
                {/* <Collapse /> */}
            </div>
        </div>
    ) : (
        <Error />
    )
}

export default Logement;