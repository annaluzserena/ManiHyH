import React from "react";

function Product(props) {
    return (
        <div className="product-container">
            <div className="product-info">
                <p className="product-type">
                    {props.type}
                </p>
                <h5>
                    {props.name + props.quantity}
                </h5>
            </div>
        </div>
    )
};

export default Product;