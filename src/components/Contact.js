import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";

const contactInfo = [
  {
    icon: "fab fa-whatsapp",
    label: "WhatsApp",
    value: "+55 (61) 98573-6330",
    href: "https://wa.me/5561985736330",
  },
  {
    icon: "fab fa-github",
    label: "GitHub",
    value: "Lucamariano166",
    href: "https://github.com/Lucamariano166",
  },
  {
    icon: "fab fa-linkedin",
    label: "LinkedIn",
    value: "lucas-marianos",
    href: "https://www.linkedin.com/in/lucas-marianos/",
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

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    const text = `Olá Lucas! Me chamo *${data.name}* (${data.email}) e gostaria de falar sobre:\n\n${data.message}`;
    const url = `https://wa.me/5561985736330?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    reset();
  };

  return (
    <section id="contact" className="section-padding bg-[#080b12]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            Vamos conversar
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <p className="text-slate-400 leading-relaxed">
                Estou disponivel para novos projetos e oportunidades.
                Se voce tem uma ideia ou quer conversar sobre uma possivel
                colaboração, entre em contato.
              </p>

              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:border-indigo-500/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-cyan-500/30 transition-all flex-shrink-0">
                      <i className={`${item.icon} text-indigo-400 text-sm`} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                      <p className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                        {item.value}
                      </p>
                    </div>
                    <i className="fas fa-arrow-right text-xs text-slate-600 group-hover:text-indigo-400 transition-colors ml-auto" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome"
                  {...register("name", { required: "Nome e obrigatorio" })}
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  {...register("email", {
                    required: "E-mail e obrigatorio",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "E-mail invalido",
                    },
                  })}
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Sua mensagem"
                  rows={5}
                  {...register("message", { required: "Mensagem e obrigatoria" })}
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Enviar Mensagem
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
