import React from "react";

function Contact() {
    return (
        <section className="container-6" id="contact">
            <h4 className="contact-title">
                Nos mantenemos en contacto!
            </h4>
            <span className="hr"></span>
            <p className="contact-text">
                ¡Llámenos o envíenos un correo electrónico y nos pondremos en contacto con usted lo antes posible!
            </p>
            <div className="calls-container">
                <i className="fas fa-phone"></i>
                <p className="calls-number">
                    +54 9 221 422-8338
            </p>
            </div>
            <div className="whatsapp-container">
                <i className="fab fa-whatsapp"></i>
                <p className="whatsapp-number">
                    +54 9 221 4981282
                    Atención al cliente:+54 9 221 4287753
            </p>
            </div>
            <div className="email-container">
                <i className="fas fa-envelope"></i>
                <p className="email">
                    info@manihyh.com.ar
                </p>
            </div>
        </section>
    )
};

export default Contact;