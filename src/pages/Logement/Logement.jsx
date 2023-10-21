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
    const locations = listLocations.find(location =>
        location.id === id)

    return locations ? (
        <div className="location-wrapper">
            <Slideshow pictures={locations.pictures} />
            <div className="location-header">
                <div className="location-content">
                    <h2 className="location-title">{locations.title}</h2>
                    <h3 className="location-location">{locations.location}</h3>
                    <div className="tags">
                        {locations.tags.map((tag, index) =>
                            <h3 key={index}>{tag}</h3>
                        )}
                    </div>
                </div>
                <div className="location-tags">
                    <div className="location-host">
                        <h3>{locations.host.name}</h3>
                        <img src={locations.host.picture} alt="" className="host-img" />
                    </div>
                    <Rating rating={locations.rating} />
                </div>
            </div>
            <div className="location-btn">
                <Collapse title='Description' description={locations.description} />
                <Collapse title='Équipements' description={locations.equipments} />
            </div>
        </div>
    ) : (
        <Error />
    )
}

export default Logement;