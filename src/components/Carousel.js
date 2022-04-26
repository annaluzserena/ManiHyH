import {useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Product from "./Product";
import data from "../data/products.json";
import "../assets/css/carousel.css";
import React from "react";
import { useLocalStorage } from "@rehooks/local-storage";

function CarouselHolder() {

    const [index] = useLocalStorage('slide');
    //const [cursor, setCursor] = useState("");

    const closeCarousel = () => {
        let carousel = document.querySelector(".fixed-container");
        let productInfo = document.querySelectorAll(".product-info");

        for(let i = 0; i < productInfo.length; i++) {
            productInfo[i].style.display = "flex";
        }

        carousel.style.display = "none";
        document.body.style.overflow = "visible";

    };

    /*const closeCarouselOnFixedC = () => {
        let carousel = document.querySelector(".fixed-container");
        let productInfo = document.querySelectorAll(".product-info");

        if(cursor !== "pointer") {
            for(let i = 0; i < productInfo.length; i++) {
                productInfo[i].style.display = "flex";
            }
    
            carousel.style.display = "none";
            document.body.style.overflow = "visible";
        }
    };*/

    useEffect(() => {
        let products = document.querySelectorAll(".product-container");
            for(let i = 0; i < products.length; i++) {
                if(i >= 30 & (i === 30 | i === 35 | i === 36 | i === 42 | i === 47 | i === 51 | i === 57)) {
                    products[i].style.top = "30%"
                };
            }
    }, []);

    return (
        <section className="fixed-container">
            <div className="carousel-container">
            <i className="fa-solid fa-circle-xmark cross" onClick={closeCarousel}></i>
                <Carousel className="carousel" showThumbs={false} useKeyboardArrows={true} selectedItem={index} showIndicators={false} dynamicHeight={true}>
                    {data.map((product, i) =>
                        <Product
                            key={product + i}
                            name={product.name}
                            img2={product.img}
                        />
                    )}
                </Carousel>
            </div>
            <span className="close-onclick" onClick={closeCarousel}></span>
        </section>
    )
};

export default CarouselHolder;