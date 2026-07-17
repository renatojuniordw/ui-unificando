# Rebrand: Unificando Estúdio — Laboratório de Projetos Autorais

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition site from sales-focused "WhatsApp automation" to portfolio/lab "Unificando Estúdio — Laboratório de Projetos Autorais & IA", keeping services accessible but de-emphasized.

**Architecture:** Modify ~14 components + ~6 pages. Core changes: constants first (CTA, meta), then new sections (ProjectsSection replaces StatsSection, CapabilitiesSection replaces ProblemSection), then rewrite remaining homepage sections with new tone, then propagate nav/footer/global changes, then update sub-pages.

**Tech Stack:** Vite + React 19, Tailwind CSS v4, framer-motion, react-router-dom v7, react-helmet-async.

---

### Task 1: Update CTA Constants & Site Meta

**Files:**
- Modify: `src/constants/cta.ts`
- Modify: `index.html`

- [ ] **Step 1: Update CTA constants**

```ts
// src/constants/cta.ts
import { ROUTES } from "../routes";

export const CTA = {
  primary: {
    label: "Agendar Consultoria",
    to: ROUTES.CONTACT,
  },
  projects: {
    label: "Ver Projetos",
    to: "#projetos",
  },
  pricing: {
    label: "Estrutura de Serviços",
    to: ROUTES.PLANS,
  },
  solutions: {
    label: "Serviços Sob Consultoria",
    to: ROUTES.SERVICES,
  },
} as const;
```

- [ ] **Step 2: Update index.html meta tags**

Replace title and description in `index.html:64-68`:

Old:
```html
<title>Unificando - Atendimento via WhatsApp, IA e Presença Digital</title>
<meta name="description" content="Ecossistema de organização e automação de atendimento para WhatsApp e Instagram. Sites de alta conversão." />
```

New:
```html
<title>Unificando | Laboratório de Projetos Autorais &amp; IA</title>
<meta name="description" content="Laboratório especializado em produtos digitais, ferramentas utilitárias e soluções com inteligência artificial. Projetos autorais e desenvolvimento sob medida." />
```

Also update OG tags (`index.html:73-78`):

Old:
```html
<meta property="og:title" content="Unificando - Atendimento Centralizado e IA" />
<meta property="og:description" content="O ecossistema definitivo para negócios que buscam maturidade, autoridade e organização no ambiente digital." />
```

New:
```html
<meta property="og:title" content="Unificando | Laboratório de Projetos Autorais &amp; IA" />
<meta property="og:description" content="Ferramentas utilitárias, sistemas com IA e projetos autorais — da ideia ao deploy." />
```

- [ ] **Step 3: Update Twitter meta tags**

Old:
```html
<meta name="twitter:title" content="Unificando - Atendimento Centralizado e IA" />
<meta name="twitter:description" content="O ecossistema definitivo para negócios que buscam maturidade e autoridade digital." />
```

New:
```html
<meta name="twitter:title" content="Unificando | Laboratório de Projetos Autorais &amp; IA" />
<meta name="twitter:description" content="Ferramentas utilitárias, sistemas com IA e projetos autorais — da ideia ao deploy." />
```

- [ ] **Step 4: Update WhatsAppFloating message**

In `src/components/common/WhatsAppFloating.tsx:7`:

Old:
```ts
"Olá! Estava no site da Unificando e gostaria de entender como centralizar meu atendimento."
```

New:
```ts
"Olá! Estava no site da Unificando e gostaria de saber mais sobre os projetos."
```

---

### Task 2: Create ProjectsSection Component

**Files:**
- Create: `src/features/home/components/ProjectsSection.tsx`

- [ ] **Step 1: Create ProjectsSection.tsx**

```tsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PDF Unificando",
    status: "No ar",
    statusColor: "bg-green-500",
    description: "Suíte de 16 ferramentas PDF gratuitas — comprimir, juntar, converter, dividir e mais.",
    link: "https://pdf.unificando.com.br",
    tags: ["Next.js", "PDF-lib", "IA"],
  },
  {
    title: "Sistema de Afiliados",
    status: "Em desenvolvimento",
    statusColor: "bg-yellow-500",
    description: "Plataforma inteligente para gestão e monitoramento de afiliados com IA.",
    tags: ["React", "IA", "Em breve"],
  },
  {
    title: "Cálculo Previdenciário",
    status: "Em desenvolvimento",
    statusColor: "bg-yellow-500",
    description: "Automação de cálculos previdenciários com inteligência artificial.",
    tags: ["IA", "Python", "Em breve"],
  },
  {
    title: "Consultoria em IA & Dev",
    status: "Sob consulta",
    statusColor: "bg-blue-500",
    description: "Soluções personalizadas: sistemas, automações, sites e integrações sob medida.",
    tags: ["Sob medida", "IA", "Web"],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projetos" className="py-24 md:py-32 bg-white border-b-2 border-slate-950 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-block bg-slate-950 text-[#ccff00] font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6">
            PROJETOS EM DESTAQUE
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9] mb-6">
            O QUE <span className="bg-[#ccff00] px-2 inline-block border-2 border-slate-950 shadow-[4px_4px_0px_#000]">CONSTRUÍMOS</span>
          </h2>
          <p className="text-slate-700 font-medium max-w-xl leading-relaxed border-l-4 border-[#ccff00] pl-4">
            Produtos reais, no ar. Cada projeto é uma demonstração do que sabemos fazer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 bg-white border-4 border-slate-950 shadow-[8px_8px_0px_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#000] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full ${project.statusColor} animate-pulse`} />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-slate-950 uppercase tracking-tighter mb-3">
                {project.title}
              </h3>

              <p className="text-sm font-mono font-bold text-slate-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-black uppercase tracking-widest bg-slate-950 text-white px-3 py-1 border border-slate-950"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black uppercase tracking-widest text-slate-950 inline-flex items-center gap-2 group-hover:gap-3 transition-all border-b-2 border-slate-950 pb-1"
                >
                  Acessar Projeto →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

### Task 3: Create CapabilitiesSection Component (replaces ProblemSection)

**Files:**
- Create: `src/features/home/components/CapabilitiesSection.tsx`

- [ ] **Step 1: Create CapabilitiesSection.tsx**

```tsx
import React from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: "⚡",
    title: "Produtos Utilitários",
    description: "Ferramentas que resolvem problemas específicos — PDF, conversão, automação. Rápidas, gratuitas e sem complicação.",
  },
  {
    icon: "🧠",
    title: "IA Aplicada",
    description: "Agentes inteligentes, automações de processo, cálculos automatizados e sistemas que aprendem e evoluem com uso.",
  },
  {
    icon: "🛠",
    title: "Desenvolvimento Sob Medida",
    description: "Sistemas web, APIs, integrações e sites. Da prototipação ao deploy, com tecnologia de ponta.",
  },
];

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-100 border-b-2 border-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="inline-block border border-slate-950 px-3 py-1 text-[10px] font-mono tracking-[0.3em] uppercase mb-6 bg-[#ccff00]">
            NOSSO TRABALHO
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] max-w-3xl">
            Transformamos ideias em <span className="text-[#ccff00] bg-slate-950 px-2 inline-block border-2 border-slate-950 shadow-[4px_4px_0px_#fff]">produtos digitais</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0 border-2 border-slate-950">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 md:p-12 bg-white ${index !== 2 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-slate-950 hover:bg-slate-950 hover:text-white transition-colors duration-300 group`}
            >
              <div className="text-4xl mb-8">{item.icon}</div>
              <h3 className="font-black mb-4 text-sm uppercase tracking-[0.2em] group-hover:text-[#ccff00] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed font-mono opacity-80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

### Task 4: Rewrite HeroSection

**Files:**
- Modify: `src/features/home/components/HeroSection.tsx`

- [ ] **Step 1: Replace component content entirely**

Replace entire HeroSection.tsx content:

```tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CTA } from "../../../constants/cta";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950 text-white selection:bg-[#ccff00] selection:text-slate-950">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl"
        >
          <div className="inline-flex items-center gap-3 border border-slate-800 bg-slate-900/50 px-4 py-2 text-[10px] font-mono tracking-[0.3em] text-slate-400 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse shadow-[0_0_10px_#ccff00]" />
            LABORATÓRIO DE PROJETOS AUTORAIS & IA
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-white uppercase mb-8 break-words">
            Construímos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-600 block sm:inline">
              produtos digitais
            </span>
            <br />
            que resolvem
            <br />
            problemas reais.
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl font-light tracking-wide leading-relaxed mb-12">
            Ferramentas utilitárias, sistemas com inteligência artificial e projetos autorais — 
            da ideia ao deploy.
            <strong className="text-white font-medium block mt-2">
              IA • Utilitários • Sistemas Sob Medida
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row items-start lg:items-center gap-6 mb-12 border-l-2 pl-4 border-slate-800">
            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#ccff00] text-slate-950 px-8 py-5 md:px-10 md:py-6 text-sm md:text-base font-black uppercase tracking-[0.2em] hover:bg-[#b3ff00] transition-colors relative group overflow-hidden"
              style={{ borderRadius: "1px" }}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_0.8s_forwards] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              <span className="relative z-10 flex items-center gap-3">
                VER PROJETOS
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/contato")}
              className="border-2 border-white text-white px-8 py-5 md:px-10 md:py-6 text-sm md:text-base font-black uppercase tracking-[0.2em] hover:bg-white hover:text-slate-950 transition-all"
              style={{ borderRadius: "1px" }}
            >
              CONSULTORIA
            </motion.button>

            <div className="flex flex-col">
              <div className="flex -space-x-3 mb-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] font-bold">★</div>
                ))}
              </div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                1.000+ PDFs processados
              </span>
            </div>
          </div>

          <div className="text-sm border-t border-slate-900 pt-8 max-w-xl">
            <a
              href="#projetos"
              className="text-slate-500 uppercase tracking-widest font-bold text-[10px] hover:text-white transition-colors duration-300 flex items-center gap-2 w-max"
            >
              ↓ Conhecer projetos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
```

---

### Task 5: Update SolutionsSection Tone

**Files:**
- Modify: `src/features/home/components/SolutionsSection.tsx`

- [ ] **Step 1: Update section label and heading**

Change line 31: `O Mecanismo` → `SOB CONSULTORIA`
Change line 34: `A base da automação` → `Serviços Sob Medida`
Change line 37: `Módulos independentes ou estrutura completa...` → `Tudo que construímos também está disponível como serviço. Sob medida, sem pressão.`

- [ ] **Step 2: Update module titles and CTAs**

Replace CTAs from aggressive sales:
- Module 1 CTA: `Iniciar Unificação →` → `Saber mais →`
- Module 2 CTA: `Aplicar Inteligência →` → `Saber mais →`
- Module 3 CTA: `Dominar Território →` → `Saber mais →`
- Module 4 CTA: `Iniciar Deploy →` → `Saber mais →`

---

### Task 6: Rewrite JourneySection → "Como Trabalhamos"

**Files:**
- Modify: `src/features/home/components/JourneySection.tsx`

- [ ] **Step 1: Replace all content**

Replace entire JourneySection.tsx content:

```tsx
import React from "react";
import { useNavigate } from "react-router-dom";

export const JourneySection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 bg-slate-950 text-white text-center relative overflow-hidden border-b-2 border-white/10">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'radial-gradient(#ccff00 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl font-black mb-20 uppercase tracking-tighter leading-[0.9] text-[#ccff00]">
          DO CONCEITO<br/>AO PRODUTO
        </h2>

        <div className="grid md:grid-cols-3 gap-0 mb-16 text-left border-2 border-white/20">
          <div className="p-10 border-b-2 md:border-b-0 md:border-r-2 border-white/20 bg-slate-950 hover:bg-white/5 transition-colors">
            <span className="text-[#ccff00] font-black block mb-6 tracking-widest text-xs border border-[#ccff00] inline-block px-2 py-1">
              01 • PROTOTIPAGEM
            </span>
            <p className="text-base font-medium text-white leading-relaxed font-mono">
              Entendemos o problema, desenhamos a solução e criamos um protótipo funcional em ciclos curtos.
            </p>
          </div>
          <div className="p-10 border-b-2 md:border-b-0 md:border-r-2 border-white/20 bg-slate-950 hover:bg-white/5 transition-colors">
            <span className="text-[#ccff00] font-black block mb-6 tracking-widest text-xs border border-[#ccff00] inline-block px-2 py-1">
              02 • VALIDAÇÃO
            </span>
            <p className="text-base font-medium text-white leading-relaxed font-mono">
              Testamos com usuários reais, iteramos com base em feedback e ajustamos o escopo.
            </p>
          </div>
          <div className="p-10 bg-slate-950 hover:bg-white/5 transition-colors">
            <span className="text-[#ccff00] font-black block mb-6 tracking-widest text-xs border border-[#ccff00] inline-block px-2 py-1">
              03 • DEPLOY
            </span>
            <p className="text-base font-medium text-white leading-relaxed font-mono">
              Colocamos no ar com infraestrutura profissional, monitoramento e suporte contínuo.
            </p>
          </div>
        </div>

        <p className="text-white font-bold mb-12 max-w-lg mx-auto text-[11px] uppercase tracking-[0.2em] leading-loose">
          Projetos autorais, produtos utilitários ou sistemas sob medida — o processo é o mesmo.
        </p>

        <button
          onClick={() => navigate("/contato")}
          className="bg-[#ccff00] text-slate-950 px-10 py-5 text-sm md:text-base font-black hover:bg-white transition-all uppercase tracking-[0.2em] shadow-[6px_6px_0px_#fff]"
          style={{ borderRadius: "0px" }}
        >
          Vamos construir algo?
        </button>
      </div>
    </section>
  );
};
```

---

### Task 7: Rewrite CtaSection

**Files:**
- Modify: `src/features/home/components/CtaSection.tsx`

- [ ] **Step 1: Replace content**

Replace entire CtaSection.tsx content:

```tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const CtaSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 bg-[#ccff00] text-slate-950 overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="inline-block border border-slate-950 px-4 py-2 text-[10px] font-mono tracking-[0.3em] font-bold mb-8 uppercase">
            Vamos conversar
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">
            Vamos construir<br />
            algo juntos?
          </h2>
          <p className="text-lg md:text-2xl text-slate-800 mb-12 max-w-2xl mx-auto font-medium tracking-wide">
            Produto próprio, ferramenta utilitária ou sistema sob medida. 
            Toda ideia começa com uma conversa.
          </p>

          <div className="flex flex-col gap-6 items-center w-full">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contato")}
              className="w-full md:w-auto bg-slate-950 text-[#ccff00] px-10 py-6 md:px-14 md:py-8 text-base md:text-xl font-black shadow-[10px_10px_0px_#000] border-2 border-transparent uppercase tracking-[0.1em] hover:bg-slate-900 transition-all font-outfit"
              style={{ borderRadius: "0px" }}
            >
              <span className="flex items-center justify-center gap-4">
                Agendar Consultoria
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.button>
            <span className="text-xs font-mono font-bold tracking-widest text-slate-700 uppercase mt-4">
              SEM COMPROMISSO • RESPOSTA EM ATÉ 24H
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
```

---

### Task 8: Update Header Navigation

**Files:**
- Modify: `src/components/layout/Header.tsx`

- [ ] **Step 1: Update CTA button text**

Line 150: `FALAR COM ESPECIALISTA` → `CONSULTORIA`
Line 252: `FALAR COM ESPECIALISTA` → `CONSULTORIA`

- [ ] **Step 2: Update nav items (at caller site)**

In `App.tsx` or wherever `navItems` is defined, change labels:
- `"COMO FUNCIONA"` → `"COMO TRABALHAMOS"`
- `"PLANOS"` → `"SERVIÇOS"` (or keep "ESTRUTURA")

---

### Task 9: Update Footer Tagline

**Files:**
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Update tagline text**

Line 20: `O ecossistema definitivo para negócios que buscam maturidade, autoridade e organização. Brutalmente focado em conversão.`
→ `Laboratório de projetos autorais, ferramentas utilitárias e soluções com inteligência artificial.`

---

### Task 10: Update Home.tsx — Reorganize Sections

**Files:**
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Update imports and section order**

Old imports:
```tsx
import { StatsSection } from "../features/home/components/StatsSection";
import { ProblemSection } from "../features/home/components/ProblemSection";
import { SolutionsSection } from "../features/home/components/SolutionsSection";
import { JourneySection } from "../features/home/components/JourneySection";
import { CtaSection } from "../features/home/components/CtaSection";
```

New imports:
```tsx
import { ProjectsSection } from "../features/home/components/ProjectsSection";
import { CapabilitiesSection } from "../features/home/components/CapabilitiesSection";
import { SolutionsSection } from "../features/home/components/SolutionsSection";
import { JourneySection } from "../features/home/components/JourneySection";
import { CtaSection } from "../features/home/components/CtaSection";
```

- [ ] **Step 2: Replace section rendering**

Old body:
```tsx
<HeroSection />
<StatsSection />
<ProblemSection
  selectedSegment={selectedSegment}
  onSelectSegment={handleSelectSegment}
/>
<SolutionsSection selectedSegment={selectedSegment} />
<JourneySection />
<CtaSection />
```

New body:
```tsx
<HeroSection />
<ProjectsSection />
<CapabilitiesSection />
<SolutionsSection selectedSegment={null} />
<JourneySection />
<CtaSection />
```

- [ ] **Step 3: Remove segment state and handlers**

Remove:
```tsx
const [selectedSegment, setSelectedSegment] = React.useState<string | null>(null);
const handleSelectSegment = (segment: string) => { ... };
```

---

### Task 11: Update About Page

**Files:**
- Modify: `src/pages/About.tsx`

- [ ] **Step 1: Update meta description and JSON-LD**

Line 11: `"Sobre o Unificado | Manifesto Digital"` → `"Sobre a Unificando | Laboratório de Projetos Autorais"`
Line 12: `"Nossa postura: clareza, responsabilidade e tecnologia como estrutura, não espetáculo."` → `"Conheça o laboratório: produtos digitais, ferramentas com IA e projetos autorais."`
Line 23-24: Update description
Line 33-38: Update `knowsAbout`:
```ts
"knowsAbout": [
  "Desenvolvimento de Produtos Digitais",
  "Inteligência Artificial Aplicada",
  "Ferramentas Utilitárias Web",
  "Desenvolvimento Web Full-stack",
  "Sistemas de Automação Inteligente"
]
```

- [ ] **Step 2: Update hero section text**

Line 54: `SUBSTITUÍMOS O CAOS DO "ZAP" POR UMA MÁQUINA DE ESCALA PREVISÍVEL.` → `CONSTRUÍMOS PRODUTOS DIGITAIS QUE RESOLVEM PROBLEMAS REAIS.`

Line 57-59: 
Old: `NÃO VENDEMOS FERRAMENTAS. VENDEMOS ESTRUTURA.`
New: `PROJETOS AUTORAIS, FERRAMENTAS UTILITÁRIAS E SISTEMAS COM IA.`

- [ ] **Step 3: Update "O Que Somos" section**

Line 76-77: `ESPECIALISTAS EM <br /> OPERAÇÃO.` → `LABORATÓRIO DE <br /> PRODUTOS.`

Line 80-85: Update description:
Old: `Usamos tecnologia para organizar, escalar e dar previsibilidade ao seu negócio...`
New: `Criamos produtos digitais que resolvem problemas reais. Ferramentas utilitárias, sistemas inteligentes e projetos autorais — tudo que construímos nasce de uma necessidade concreta.`

- [ ] **Step 4: Update "O Que Não Somos" list**

Line 105: `NÃO SOMOS GURUS.` → Keep
Line 109: `NÃO PROMETEMOS MILAGRES.` → Keep  
Line 113: `NÃO VENDEMOS ROBÔS QUE "VENDEM SOZINHOS".` → `NÃO VENDEMOS O QUE NÃO CONSTRUÍMOS.`

Line 117-119: Update bottom card:
Old: `FUGIMOS DO HYPE VAZIO. NOSSO FOCO É RESOLVER PROBLEMAS REAIS...`
New: `CADA PROJETO É UMA DEMONSTRAÇÃO DO QUE SABEMOS FAZER. SEM HYPE, SEM PROMESSAS VAZIAS.`

---

### Task 12: Update HowItWorks Page

**Files:**
- Modify: `src/pages/HowItWorks.tsx`

- [ ] **Step 1: Update SEO**

Line 19: `"Como Funciona o Método Unificando | Crescimento sem Bagunça"` → `"Como Trabalhamos | Laboratório Unificando"`
Line 20: `"Nosso método dividido em fases..."` → `"Metodologia de desenvolvimento: prototipação, validação e deploy de projetos digitais."`
Line 24: `name: "Método Unificando de Crescimento Digital"` → `name: "Método de Trabalho Unificando"`
Update steps to match new phases.

- [ ] **Step 2: Update hero heading**

Line 52: `CRESCIMENTO SEM BAGUNÇA.` → `PROJETOS QUE <br/>RESOLVEM.`

Line 60: Update description to match new positioning.

- [ ] **Step 3: Update remaining page content**

Rewrite phase sections from sales methodology to development methodology (prototyping → validation → deploy).

---

### Task 13: Update Plans Page

**Files:**
- Modify: `src/pages/Plans.tsx`

- [ ] **Step 1: Update SEO**

Line 74: `"Planos e Preços | Unificando"` → `"Estrutura de Serviços | Unificando"`
Line 75: `"Monte a solução ideal para o seu negócio..."` → `"Conheça nossa estrutura de serviços sob consultoria."`

- [ ] **Step 2: Update page heading** (in PlansHeader component or inline)

Change any "Planos e Preços" → "Estrutura de Serviços"

- [ ] **Step 3: Update CTA button**

Change "Gerar Contrato" or equivalent → "Solicitar Proposta"

---

### Task 14: Update Services Overview Page

**Files:**
- Modify: `src/pages/services/Services.tsx`

- [ ] **Step 1: Update SEO**

Line 139: `"Soluções de Atendimento, IA e Sites | Unificando"` → `"Serviços Sob Consultoria | Unificando"`
Line 140: Update description to be less aggressive.

- [ ] **Step 2: Update hero heading**

Line 180: `NOSSAS SOLUÇÕES.` → `SERVIÇOS SOB CONSULTORIA`
Line 183: `Ferramentas brutais para transformar sua operação digital...` → `Tudo que construímos também pode ser aplicado ao seu negócio. Sob medida, sem pressão.`
Line 197: `CONSULTAR PREÇOS` → `SOLICITAR PROPOSTA`
Line 196: Update CTA handler to navigate to /contato instead of opening pricing page

---

### Task 15: Update Contact Page

**Files:**
- Modify: `src/pages/Contact.tsx`

- [ ] **Step 1: Update SEO**

Line 25: `"Fale Conosco | Diagnóstico Gratuito Unificando"` → `"Fale Conosco | Unificando"`
Line 26: `"Agende uma conversa com nossos especialistas..."` → `"Entre em contato para conversarmos sobre seu projeto."`
Line 35: `contactType: "sales"` → `contactType: "customer support"`

- [ ] **Step 2: Update hero content**

Line 49: `VAMOS CONVERSAR` → Keep
Line 52-55: `ENTENDA O PRÓXIMO <br/> PASSO CERTO.` → `CONTE SOBRE <br/> SEU PROJETO.`
Line 58-59: `DIAGNÓSTICO GRATUITO` → `SEM COMPROMISSO`

---

### Task 16: Update individual Service Pages

**Files:**
- Modify: `src/pages/services/CustomerService.tsx`
- Modify: `src/pages/services/Productivity.tsx`
- Modify: `src/pages/services/DigitalPresence.tsx`
- Modify: `src/pages/services/DeployService.tsx`

- [ ] **Step 1: Add "Sob Consultoria" banner to each page**

Add at top of each service page's main section:
```tsx
<div className="bg-[#ccff00] border-b-4 border-slate-950 py-4 text-center">
  <span className="text-xs font-black uppercase tracking-widest text-slate-950">
    Serviço Sob Consultoria — Entre em contato para entender como funciona
  </span>
</div>
```

- [ ] **Step 2: Replace WhatsApp CTAs with "Agendar Consultoria"**

Replace all `window.open(CTA.primary.to as string, "_blank")` with `navigate("/contato")` in service pages.

- [ ] **Step 3: Remove pricing mentions from service pages**

Replace pricing displays with "Sob consulta" or remove.

---

## Self-Review Checklist

- [ ] Every spec requirement has a corresponding task
- [ ] No placeholders (TBD, TODO, etc.)
- [ ] Types consistent across tasks
- [ ] All file paths exact
- [ ] All code complete (no "similar to")
- [ ] DRY: no duplicated code patterns
