import React from "react";
import "../assets/css/main.css";
import * as Scroll from 'react-scroll';

import logo from "../assets/img/logo.png";
import qr from "../assets/img/qr.jpg";

let Link = Scroll.Link;

function Main() {
    return (
        <section className="container-1">
            <img className="logo" src={logo} alt="Logo Mani H&H"></img>
            <h2 className="main-title">
                LA EXCELENTE CALIDAD SIEMPRE HACE LA DIFERENCIA
            </h2>
            <img src={qr} alt="Código QR de Whatsapp"></img>
            <p className="qr-text">
                ¡Escanea el código para iniciar un chat con Atención al Cliente!
            </p>
            <p className="descriptive-text">
            Un control exhaustivo y absoluto de la materia prima garantiza la calidad del producto final.
            </p>
            <button className="link-to-section2"><Link to="about" spy={true} smooth={true} duration={1000} offset={-70} isDynamic={true} className="btn-main">Descubra más</Link></button>
        </section>
    )
};

export default Main;