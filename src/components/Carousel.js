import {useState, useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Product from "./Product";
import data from "../data/products.json";
import "../assets/css/carousel.css";
import React from "react";
import { useLocalStorage } from "@rehooks/local-storage";

function CarouselHolder() {

    //const slideNumber = JSON.parse(window.localStorage.getItem("slide"));

    const [index] = useLocalStorage("slide");

    /*useEffect(() => {
        let pIndex = JSON.parse(window.localStorage.getItem("slide"));
        console.log(index);

        setIndex(pIndex);
    }, [index]);*/

    const closeCarousel = () => {
        let carousel = document.querySelector(".fixed-container");
        let productInfo = document.querySelectorAll(".product-info");

        for(let i = 0; i < productInfo.length; i++) {
            productInfo[i].style.display = "flex";
        }

        carousel.style.display = "none";
        document.body.style.overflow = "visible";

    };

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
        </section>
    )
};

export default CarouselHolder;