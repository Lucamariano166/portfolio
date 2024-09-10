import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

// Importar os estilos do slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const items = [
        {
            type: "Projeto",
            title: "Auto Veículos",
            description: "Sistema para cadastro de veículos, vinculado ao usuário, com cadastro de manutenção e datas previstas. Desenvolvido com APIs construídas no Laravel e jQuery no front-end."
        },
        {
            type: "Projeto",
            title: "IBGE",
            description: "Sistema com dois selects dependentes para mostrar cidade, município e informações sobre o município. Feito em ReactJS, consumindo API do IBGE."
        },
        {
            type: "Experiência",
            title: "E-commerce",
            description: "Desenvolvimento e manutenção de soluções para um e-commerce de grande porte. Envolvem novas funcionalidades e otimização de sistemas existentes."
        },
        {
            type: "Experiência",
            title: "Sistema de Pavimentação",
            description: "Criação de um sistema interno para a Goinfra, focado na criação de ordens de serviço de pavimentação. Integração com Microsoft Excel e gráficos interativos com Leaflet e ECharts."
        },
        {
            type: "Experiência",
            title: "Desenvolvedor Front-end Pantheon",
            description: "Atualizei e melhorei projetos existentes usando Angular. Migrei arquivos antigos para versões mais recentes para garantir compatibilidade e melhor desempenho."
        },
        {
            type: "Experiência",
            title: "Desenvolvedor Front-end STE",
            description: "Desenvolvimento do sistema do DNIT usando React e TypeScript, criando interfaces de usuário eficientes e fáceis de usar."
        }
    ];

    return (
        <section id="projects" className="projects-experiences-section">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Projetos e Experiências
            </motion.h2>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="item-card"
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: index * 0.1 }}
                    >
                        <h4>{item.type}: {item.title}</h4>
                        <p>{item.description}</p>
                    </motion.div>
                ))}
            </Slider>
        </section>
    );
};

export default Projects;
