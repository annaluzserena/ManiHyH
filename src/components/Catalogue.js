import React from "react";
import Product from "./Product";
import data from "../data/products.json";

console.log(data);

/*const readJSON = preval`
const fs = require('fs')
module.exports = fs.readFileSync(require.resolve("../data/products.json"), {encoding: "utf-8})
`*/

//const dataParsed = JSON.parse(data);

function Catalogue() {
    return (
        <section className="container-4" id="catalogue">
            {data.map((product, i) => 
                <Product 
                    key={product + i}
                    name={product.name}
                    type={product.type}
                    quantity={product.quantity === null ? "" : " x " + product.quantity}
                />
            )}
        </section>
    )
};

export default Catalogue;