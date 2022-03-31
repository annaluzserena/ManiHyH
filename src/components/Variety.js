import React from "react";
import "../assets/css/variety.css";

function Variety(props) {
    return (
        <div className="container-variety">
            <img src={props.img} alt={props.name}></img>
            <h3 className="variety-title">{props.name}</h3>
            <p className="variety-detail">
                Presentación: <br></br>
                {props.detail}
            </p>
        </div>
    )
};

export default Variety;