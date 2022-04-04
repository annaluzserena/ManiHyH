import React from "react";
import "../assets/css/download.css";
import Lista from "../assets/files/LISTA.pdf";

function Download() {
    return (
        <section className="container-5">
            <h2 className="download-title">
                Descargue la lista de nuestros productos.
            </h2>
            <a href={Lista} download="Lista_ManiHyH" target="_blank">
            <button className="download-button">
                HÁGALO AHORA!
            </button>
            </a>
        </section>
    )
};

export default Download;