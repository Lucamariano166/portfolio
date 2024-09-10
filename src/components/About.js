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
                    Olá! Meu nome é Lucas Mariano e sou um Desenvolvedor FullStack apaixonado por tecnologia e inovação. Com uma sólida experiência em PHP, JavaScript, Vue.js, Angular, React e TypeScript, tenho me dedicado a criar soluções eficientes e escaláveis.
                    Minha Jornada
                    Iniciei minha carreira focado em PHP, utilizando frameworks robustos como Laravel e CodeIgniter para desenvolver backends eficientes. Com o tempo, expandi minhas habilidades para o frontend, criando interfaces dinâmicas e responsivas com Vue.js, Angular e React.
                    Experiência Profissional
                    Tenho uma vasta experiência em Ecommerce, onde contribui para o desenvolvimento de plataformas escaláveis e personalizadas que atendem às necessidades específicas dos clientes. Minha expertise inclui:

                    Backend: PHP (Laravel, CodeIgniter)
                    Frontend: JavaScript (Vue.js, Angular, React, TypeScript)
                    Bancos de Dados: MySQL, SQL Server, PostgreSQL
                    DevOps: Docker para criação de ambientes consistentes e automação de deployments
                    Versionamento: Git/GitHub para organização e controle de versões

                    Habilidades Adicionais
                    Além das minhas competências técnicas, sou um profissional organizado e comprometido com a qualidade do código. Estou sempre em busca de novas tecnologias e metodologias para aprimorar meus projetos e entregar o melhor resultado possível.
                    Entre em contato
                    Vamos conversar e descobrir como posso contribuir para o seu próximo projeto!
                </p>
            </motion.div>
        </section>
    );
};

export default About;
