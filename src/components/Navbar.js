import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="menu-icon" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="hero" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Início</Link></li>
                    <li><Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Sobre Mim</Link></li>
                    <li><Link to="skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Habilidades</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Projetos</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contato</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
