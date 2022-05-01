import React from "react";
import "../assets/css/contact.css";

function Contact() {
    return (
        <section className="container-6" id="contact">
            <div className="c-title-divider">
                <h2 className="contact-title">
                    Nos mantenemos en contacto!
                </h2>
                <span className="divider"></span>
            </div>
            <p className="contact-text">
                ¡Llámenos o envíenos un correo electrónico y nos pondremos en contacto con usted lo antes posible!
            </p>
            <div className="calls-container contact-container">
                <i className="fas fa-phone contact-icon"></i>
                <p className="calls-number p-contact">
                    +54 9 221 422-8338
                </p>
            </div>
            <div className="whatsapp-container contact-container">
                <i className="fab fa-whatsapp contact-icon"></i>
                <p className="whatsapp-number p-contact">
                    +54 9 221 4981282
                    <br></br>
                    Atención al cliente:
                    <a href="https://wa.me/message/VLKBMCUMD3DZI1" title="Atención al cliente" className="wpp-link" target="_blank" rel="noreferrer">+54 9 221 4287753</a>
                </p>
            </div>
            <div className="email-container contact-container">
                <i className="fas fa-envelope contact-icon"></i>
                <p className="email p-contact" onClick={() => window.location.href = 'mailto:info@manihyh.com.ar'}>
                    info@manihyh.com.ar
                </p>
            </div>
        </section>
    )
};

export default Contact;