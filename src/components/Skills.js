import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "React", icon: "fab fa-react" },
        { name: "Vue.js", icon: "fab fa-vuejs" },
        { name: "Angular", icon: "fab fa-angular" },
        { name: "TypeScript", icon: "fab fa-js" }, // Não há ícone direto do TypeScript no FontAwesome
        { name: "PHP", icon: "fab fa-php" },
        { name: "Laravel", icon: "fab fa-laravel" },
        { name: "CodeIgniter", icon: "fas fa-code" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "Leaflet", icon: "fas fa-map-marked-alt" }, // Ícone substituto para Leaflet
        { name: "eCharts", icon: "fas fa-chart-bar" }, // Ícone substituto para eCharts
        { name: "MySQL", icon: "fas fa-database" },
        { name: "SQL Server", icon: "fas fa-server" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Git/GitHub", icon: "fab fa-github" },
    ];

    return (
        <section id="skills" className="skills-section">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Habilidades
            </motion.h2>
            <motion.div
                className="skills-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <i className={skill.icon}></i>
                        <h4>{skill.name}</h4>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
