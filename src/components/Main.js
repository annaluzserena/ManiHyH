import React from "react";
import "../assets/css/main.css";

function Main() {
    return (
        <section className="container-1">
            <img alt="Logo Mani H&H"></img>
            <p className="main-title">
                LA EXCELENTE CALIDAD SIEMPRE HACE LA DIFERENCIA
            </p>
            <img alt="Código QR de Whatsapp"></img>
            <p className="qr-text">
                ¡Escanea el código para iniciar un chat con Atención al Cliente!
            </p>
            <p className="descriptive-text">
            Un control exhaustivo y absoluto de la materia prima garantiza la calidad del producto final.
            </p>
            <button className="link-to-section2">Descubra más</button>
        </section>
    )
};

export default Main;