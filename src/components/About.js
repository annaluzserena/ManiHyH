import React from "react";
import linea from "../assets/img/linea.png";
import "../assets/css/about.css";
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;

function About() {
    return ( 
        <section className="container-2" id="about">
            <img src={linea} alt="Alimentos Hedes"></img>
            <h2>Tenemos el producto que necesita!</h2>
            <span className="about-divider"></span>
            <p className="about-text">
            Alimentos Hedes es una empresa familiar argentina dedicada desde 1996 a la elaboración de maní en sus distintas variedades y subproductos listos para el consumo humano, a los cuales Usted conoce con el nombre comercial de Maní H&H!
            </p>
            <button className="link-to-section3"><Link to="products" spy={true} smooth={true} duration={1000} offset={-70} isDynamic={true} className="btn">Comience!</Link></button>
        </section>
    )
};

export default About;