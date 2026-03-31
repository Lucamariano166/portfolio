import React from "react";

const links = [
  { href: "https://github.com/Lucamariano166", icon: "fab fa-github" },
  { href: "https://www.linkedin.com/in/lucas-marianos/", icon: "fab fa-linkedin-in" },
  { href: "https://wa.me/5561985736330", icon: "fab fa-whatsapp" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="gradient-text font-bold text-sm">Lucas Mariano</span>

        <p className="text-slate-500 text-xs">
          {new Date().getFullYear()} &mdash; Desenvolvedor FullStack
        </p>

        <div className="flex items-center gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/8 flex items-center justify-center text-slate-500 hover:text-white hover:border-indigo-500/40 transition-all text-xs"
            >
              <i className={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
