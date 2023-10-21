import { useParams } from "react-router-dom"
// Data
import { listLocations } from "../../data/locations"
// Components
import Slideshow from "../../components/Slideshow/Slideshow.jsx"
import Collapse from "../../components/Collapse/Collapse.jsx";
import Rating from "../../components/Rating/Rating.jsx";
import Error from "../Error/404.jsx";

function Logement() {
    const { id } = useParams();
    const locationId = listLocations.find(location =>
        location.id === id)

    return locationId ? (
        <div className="location-wrapper">
            <Slideshow pictures={locationId.pictures} />
            <div className="location-header">
                <div className="location-content">
                    <h2 className="location-title">{locationId.title}</h2>
                    <h3 className="location-location">{locationId.location}</h3>
                    <div className="tags">
                        {locationId.tags.map((tag, index) =>
                            <h3 key={index}>{tag}</h3>
                        )}
                    </div>
                </div>
                <div className="location-tags">
                    <div className="location-host">
                        <h3>{locationId.host.name}</h3>
                        <img src={locationId.host.picture} alt="" className="host-img" />
                    </div>
                    <Rating rating={locationId.rating} />
                </div>
            </div>
            <div className="location-btn">
                <Collapse title='Description' description={locationId.description} />
                <Collapse title='Équipements' description={locationId.equipments} />
            </div>
        </div>
    ) : (
        <Error />
    )
}

export default Logement;