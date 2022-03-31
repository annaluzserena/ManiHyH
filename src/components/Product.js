import React from "react";
import "../assets/css/product.css";

function Product(props) {
    return (
        <div className="product-container" onClick={props.onclickFunction}>
            <img className="fullsize" src={props.img}></img>
            <img src={props.img2} alt={props.name} className="thumbnails"></img>
            <div className="product-info">
                <p className="product-type">
                    {props.type}
                </p>
                <h5 className="product-name">
                    {props.name + props.quantity}
                </h5>
            </div>
        </div>
    )
};

export default Product;