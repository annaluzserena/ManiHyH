import {useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Product from "./Product";
import data from "../data/products.json";
import "../assets/css/carousel.css";
import React from "react";
import { useLocalStorage } from "@rehooks/local-storage";

function CarouselHolder() {

    //const slideNumber = JSON.parse(window.localStorage.getItem("slide"));

    const [index] = useLocalStorage('slide');

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

    useEffect(() => {
        let products = document.querySelectorAll(".product-container");
        if(window.innerWidth >= "600" & window.innerWidth < "1000") {
            for(let i = 0; i < products.length; i++) {
                if(i >= 30) {
                    products[i].style.left = "30%";
                    products[i].style.width = "40%";
                };

                if(i >= 30 & (i === 30 | i === 35 | i === 36 | i === 42 | i === 47 | i === 51 | i === 58)) {
                    products[i].style.top = "30%"
                };
            }
        } else if(window.innerWidth >= "1000") {
            for(let i = 0; i < products.length; i++) {
                if(i >= 30) {
                    products[i].style.left = "33%";
                    products[i].style.width = "35%";
                };

                if(i >= 30 & (i === 30 | i === 35 | i === 36 | i === 42 | i === 47 | i === 51 | i === 58)) {
                    products[i].style.top = "10%"
                } else {
                    products[i].style.bottom ="5%";
                }
            }
        };
    }, []);

    /*useEffect(() => {
        let carousel = document.querySelector(".fixed-container");
        if(window.innerWidth >= "600" & window.innerWidth < "1000") {
            carousel.style.width = "70%"
        } else if (window.innerWidth >= "1000") {
            carousel.style.width = "50%"
        }
    }, []);*/

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