import React from "react";
import { Link } from "react-router-dom";

import './cards.css'

function Cards(props) {
    return (
        <Link to={`/logement/${props.location.id}`} className="card-link" style={{ backgroundImage: `url(${props.location.cover})` }}>
            <h2 key={props.location.id} className="card-name">
                {props.location.title}
            </h2>
        </Link>
    )
}

export default Cards;