import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="hero" smooth={true} duration={500}>Início</Link></li>
                <li><Link to="about" smooth={true} duration={500}>Sobre Mim</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Habilidades</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projetos</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contato</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
