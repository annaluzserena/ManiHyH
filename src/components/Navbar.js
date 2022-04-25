import React, { useState, useEffect } from "react";
import "../assets/css/navbar.css";
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;

function Navbar() {

    const showMenu = () => {
        let burger = document.querySelector(".burger-menu");
        let navlist = document.querySelector(".navlist");

        if (window.innerWidth <= "1000") {
            burger.classList.toggle("toggle-burger");
            if (!(navlist.classList.contains("toggle-growup")) & !(navlist.classList.contains("toggle-navlist"))) {
                navlist.classList.add("toggle-navlist");
            } else {
                navlist.classList.toggle("toggle-navlist");
                navlist.classList.toggle("toggle-growup");
            };
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [navbar, setNavbar] = useState(["white", "rgba(0, 0, 0, 0.70)", "#f4623a", "0 0.5rem 1rem rgb(0 0 0 / 15%)"]);

    const listenScrollEvent = e => {
        if (window.scrollY < 20) {
            setNavbar(["transparent", "rgba(255, 255, 255, 0.7", "white", "none"]);
            return document.querySelector(".nav").style.boxShadow = navbar[3];
        } else if (window.scrollY > 20) {
            setNavbar(["white", "rgba(0, 0, 0, 0.70)", "#f4623a", "0 0.5rem 1rem rgb(0 0 0 / 15%)"]);
            return document.querySelector(".nav").style.boxShadow = navbar[3];
        };
    };

    useEffect(() => {
        if (window.innerWidth >= "1000") {
            setNavbar(["transparent", "rgba(255, 255, 255, 0.7", "white", "none"]);
            window.addEventListener("scroll", listenScrollEvent);

            return () =>
                window.removeEventListener('scroll', listenScrollEvent);
        }
    }, []);

    return (
        <nav className="nav">
            <div className="mobile-container" style={{ backgroundColor: navbar[0] }}>
                <a className="scroll-top" onClick={scrollToTop} style={{ color: navbar[2] }}>Arriba</a>
                <button className="burger-menu" onClick={showMenu}><i className="fas fa-bars"></i></button>
            </div>
            <ul className="navlist" style={{ backgroundColor: navbar[0] }}>
                <li className="item-1 nav-item" style={{ textDecoration: 'none' }} ><Link to="about" spy={true} smooth={true} duration={1000} offset={-70} isDynamic={true} onClick={showMenu} className="nav-link" style={{ color: navbar[1] }} onMouseOver={() => document.querySelectorAll(".nav-link")[0].style.color = navbar[2]} onMouseLeave={() => document.querySelectorAll(".nav-link")[0].style.color = navbar[1]}>Acerca</Link></li>
                <li className="item-2 nav-item" style={{ textDecoration: 'none' }} ><Link to="products" spy={true} smooth={true} duration={1000} offset={-70} isDynamic={true} onClick={showMenu} className="nav-link" style={{ color: navbar[1] }} onMouseOver={() => document.querySelectorAll(".nav-link")[1].style.color = navbar[2]} onMouseLeave={() => document.querySelectorAll(".nav-link")[1].style.color = navbar[1]}>Productos</Link></li>
                <li className="item-3 nav-item" style={{ textDecoration: 'none' }} ><Link to="catalogue" spy={true} smooth={true} duration={1000} offset={-70} isDynamic={true} onClick={showMenu} className="nav-link" style={{ color: navbar[1] }} onMouseOver={() => document.querySelectorAll(".nav-link")[2].style.color = navbar[2]} onMouseLeave={() => document.querySelectorAll(".nav-link")[2].style.color = navbar[1]}>Catálogo</Link></li>
                <li className="item-4 nav-item" style={{ textDecoration: 'none' }} ><Link to="contact" spy={true} smooth={true} duration={1000} offset={-70} isDynamic={true} onClick={showMenu} className="nav-link" style={{ color: navbar[1] }} onMouseOver={() => document.querySelectorAll(".nav-link")[3].style.color = navbar[2]} onMouseLeave={() => document.querySelectorAll(".nav-link")[3].style.color = navbar[1]}>Contáctenos</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;