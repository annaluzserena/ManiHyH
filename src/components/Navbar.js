import React, { useRef } from "react";
import "../assets/css/navbar.css";
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;
let scroll = Scroll.animateScroll;

function Navbar() {

    const showMenu = () => {
        let burger = document.querySelector(".burger-menu");
        let navlist = document.querySelector(".navlist");

        burger.classList.toggle("toggle-burger");
        navlist.classList.toggle("toggle-navlist");
        navlist.classList.toggle("toggle-growup");
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav className="nav">
            <div className="mobile-container">
                <a className="scroll-top" onClick={scrollToTop}>Arriba</a>
                <button className="burger-menu" onClick={showMenu}><i className="fas fa-bars"></i></button>
            </div>
            <ul className="navlist toggle-growup">
                <li className="item-1 nav-item" style={{ textDecoration: 'none' }} ><Link to="about" spy={true} smooth={true} duration={500}>Acerca</Link></li>
                <li className="item-2 nav-item" style={{ textDecoration: 'none' }} ><Link to="products" spy={true} smooth={true} offset={50} duration={500}>Productos</Link></li>
                <li className="item-3 nav-item" style={{ textDecoration: 'none' }} ><Link to="catalogue" spy={true} smooth={true} offset={50} duration={500}>Catálogo</Link></li>
                <li className="item-4 nav-item" style={{ textDecoration: 'none' }} ><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contáctenos</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;