import React from "react";
import Product from "./Product";
import data from "../data/products.json";
import "../assets/css/catalogue.css";


console.log(data);

/*const readJSON = preval`
const fs = require('fs')
module.exports = fs.readFileSync(require.resolve("../data/products.json"), {encoding: "utf-8})
`*/

//const dataParsed = JSON.parse(data);

function Catalogue() {

    function showCarousel(n){
        let carousel = document.querySelector(".fixed-container");
        let productInfo = document.querySelectorAll(".product-info");

        for(let i = 0; i < productInfo.length; i++) {
            productInfo[i].style.display = "none";
        }
        console.log(n);
        carousel.style.display = "block";
        document.body.style.overflow = "hidden";

        window.localStorage.setItem("slide", n);

    };

    return (
        <section className="container-4" id="catalogue">
            {data.map((product, i) =>
                <Product
                    key={product + i}
                    name={product.name}
                    type={product.type}
                    quantity={product.quantity === null ? "" : " x " + product.quantity}
                    img={product.img}
                    img2={product.img2}
                    onclickFunction={() => showCarousel(i)}
                />
            )}
        </section>
    )
};

export default Catalogue;