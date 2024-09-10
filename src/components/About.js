import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="about-section">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2>Sobre Mim</h2>
                <p>
                    Me chamo Lucas Mariano, Sou Desenvolvedor FullStack com sólida experiência em PHP, JavaScript, Vue.js, Angular, React e TypeScript. Iniciei minha carreira com foco em PHP, trabalhando com frameworks como Laravel e CodeIgniter no backend. Posteriormente, ampliei minha atuação para o frontend, desenvolvendo interfaces dinâmicas com Vue.js, Angular e React.

                    Tenho experiência em Ecommerce, contribuindo para plataformas escaláveis e personalizadas. No que se refere a bancos de dados, domino MySQL, SQL Server e PostgreSQL, aplicando boas práticas de modelagem e otimização de queries.

                    Sou também familiarizado com Docker, utilizando-o para criar ambientes consistentes e automatizar deployments. Com forte foco em organização e versionamento com Git/GitHub, estou sempre em busca de novas tecnologias para melhorar meus projetos.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
