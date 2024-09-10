import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Desenvolvedor FullStack
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    React, Vue.js, Angular, PHP, Laravel, Node.js...
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="hero-description"
                >
                    Especializado em criar soluções completas e eficientes para suas necessidades de desenvolvimento web. <br />
                    Explore meus projetos e descubra como posso ajudar a transformar suas ideias em realidade.
                </motion.p>
                <br /><br /><br />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="hero-buttons-box" // Adicione esta classe
                >
                    <a href="#projects" className="btn btn-primary">Veja Meus Projetos</a>
                    <a href="#contact" className="btn btn-secondary">Entre em Contato</a>

                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
