import React from "react";

function Variety(props) {
    return (
        <div className="container-variety">
            <img src={props.img} alt={props.name}></img>
            <h3 className="variety-title">{props.name}</h3>
            <p className="variety-detail">
                Presentación:
                {props.detail}
            </p>
        </div>
    )
};

export default Variety;