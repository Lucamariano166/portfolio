import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { icon: "fas fa-server", label: "Backend", value: "PHP, Laravel, CodeIgniter, Node.js" },
  { icon: "fas fa-laptop-code", label: "Frontend", value: "React, Vue.js, Angular, TypeScript" },
  { icon: "fas fa-database", label: "Banco de Dados", value: "MySQL, PostgreSQL, SQL Server" },
  { icon: "fas fa-cube", label: "DevOps & Tools", value: "Docker, Git, GitHub" },
];

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            Quem sou eu
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Sou um Desenvolvedor FullStack apaixonado por tecnologia, com
                sólida experiência em PHP e no ecossistema JavaScript moderno.
                Minha jornada começou com backend em Laravel e CodeIgniter, e
                naturalmente evoluiu para o frontend com Vue.js, Angular e React.
              </p>
              <p>
                Tenho experiência em projetos de grande porte, incluindo
                plataformas de e-commerce, sistemas internos com integração ao
                Microsoft Excel, mapas interativos com Leaflet e visualização de
                dados com ECharts. Também atuei em projetos governamentais para
                Goinfra e DNIT.
              </p>
              <p>
                Sou comprometido com código limpo, boas práticas e entrega de
                valor real. Estou sempre explorando novas ferramentas e metodologias
                para aprimorar a qualidade dos meus projetos.
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/Lucamariano166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <i className="fab fa-github" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-marianos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <i className="fab fa-linkedin" />
                  LinkedIn
                </a>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <FadeIn key={item.label} delay={0.15 + i * 0.1}>
                <div className="glass rounded-xl p-5 hover:border-indigo-500/20 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center mb-3 group-hover:from-indigo-500/30 group-hover:to-cyan-500/30 transition-all">
                    <i className={`${item.icon} text-indigo-400 text-sm`} />
                  </div>
                  <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
