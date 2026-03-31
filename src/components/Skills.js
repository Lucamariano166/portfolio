import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    icon: "fas fa-laptop-code",
    skills: [
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "TypeScript", icon: "fab fa-js" },
      { name: "React", icon: "fab fa-react" },
      { name: "Vue.js", icon: "fab fa-vuejs" },
      { name: "Angular", icon: "fab fa-angular" },
      { name: "Bootstrap", icon: "fab fa-bootstrap" },
    ],
  },
  {
    label: "Backend",
    icon: "fas fa-server",
    skills: [
      { name: "PHP", icon: "fab fa-php" },
      { name: "Laravel", icon: "fab fa-laravel" },
      { name: "CodeIgniter", icon: "fas fa-code" },
      { name: "Node.js", icon: "fab fa-node-js" },
    ],
  },
  {
    label: "Banco de Dados",
    icon: "fas fa-database",
    skills: [
      { name: "MySQL", icon: "fas fa-database" },
      { name: "PostgreSQL", icon: "fas fa-database" },
      { name: "SQL Server", icon: "fas fa-server" },
    ],
  },
  {
    label: "DevOps & Ferramentas",
    icon: "fas fa-tools",
    skills: [
      { name: "Docker", icon: "fab fa-docker" },
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "GitHub", icon: "fab fa-github" },
      { name: "Leaflet", icon: "fas fa-map-marked-alt" },
      { name: "eCharts", icon: "fas fa-chart-bar" },
    ],
  },
];

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#080b12]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            Tecnologias
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <FadeIn key={cat.label} delay={ci * 0.1}>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center">
                    <i className={`${cat.icon} text-indigo-400 text-sm`} />
                  </div>
                  <h3 className="font-semibold text-white text-sm">{cat.label}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + si * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-slate-300 text-xs font-medium hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-300 transition-all cursor-default"
                    >
                      <i className={`${skill.icon} text-xs`} />
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
