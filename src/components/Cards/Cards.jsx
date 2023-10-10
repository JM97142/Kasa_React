import React from "react";

function Cards(props) {
    return <h2 key={props.location.id} className="card-name">{props.location.title}</h2>
}

export default Cards;