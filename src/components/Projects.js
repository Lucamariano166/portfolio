import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const projects = [
  {
    type: "Projeto",
    title: "Auto Veículos",
    description:
      "Sistema para cadastro de veículos vinculados ao usuário, com gerenciamento de manutenções e datas previstas.",
    tech: ["Laravel", "PHP", "jQuery", "MySQL"],
    github: "https://github.com/Lucamariano166/AutoVeiculos",
    icon: "fas fa-car",
  },
  {
    type: "Projeto",
    title: "IBGE Select",
    description:
      "Selects dependentes para navegação por estado, município e informações detalhadas, consumindo a API oficial do IBGE.",
    tech: ["React", "IBGE API", "JavaScript"],
    github: "https://github.com/Lucamariano166/IBGE",
    icon: "fas fa-map-pin",
  },
  {
    type: "Experiência",
    title: "E-commerce",
    description:
      "Desenvolvimento e manutenção de plataforma de e-commerce de grande porte, com novas funcionalidades e otimização de sistemas existentes.",
    tech: ["PHP", "JavaScript", "MySQL"],
    icon: "fas fa-shopping-cart",
  },
  {
    // Note: No português, o correto é "Pavimentação"
    type: "Experiência",
    title: "Sistema de Pavimentação",
    description:
      "Sistema interno para a Goinfra de ordens de serviço de pavimentação, com integração ao Excel, mapas via Leaflet e gráficos com ECharts.",
    tech: ["React", "Leaflet", "ECharts", "Laravel"],
    icon: "fas fa-road",
  },
  {
    type: "Experiência",
    title: "Front-end Pantheon",
    description:
      "Atualização e migração de projetos Angular para versões mais recentes, garantindo compatibilidade e performance.",
    tech: ["Angular", "TypeScript"],
    icon: "fab fa-angular",
  },
  {
    type: "Experiência",
    title: "Front-end STE / DNIT",
    description:
      "Desenvolvimento de interfaces do sistema do DNIT com React e TypeScript, priorizando usabilidade e eficiência.",
    tech: ["React", "TypeScript"],
    icon: "fas fa-globe",
  },
];

const typeColor = {
  Projeto: "from-indigo-500/20 to-indigo-500/10 border-indigo-500/30 text-indigo-300",
  Experiencia: "from-cyan-500/20 to-cyan-500/10 border-cyan-500/30 text-cyan-300",
};

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

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Projetos & <span className="gradient-text">Experiencias</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 flex flex-col gap-4 h-full hover:border-indigo-500/20 transition-all group">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-cyan-500/30 transition-all">
                    <i className={`${project.icon} text-indigo-400`} />
                  </div>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border bg-gradient-to-r ${typeColor[project.type]}`}
                  >
                    {project.type}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-white font-semibold text-base mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-indigo-400 transition-colors mt-auto"
                  >
                    <i className="fab fa-github" />
                    Ver no GitHub
                    <i className="fas fa-arrow-right text-[10px]" />
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
