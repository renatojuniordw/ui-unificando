# Design System - Unificando

Este documento define padrões visuais e diretrizes de design para garantir consistência em toda a aplicação Unificando.

## 0. Introdução

O design da plataforma **Unificando** é minimalista, profissional e focado em tipografia como elemento central de hierarquia. Utiliza contraste elevado entre seções claras (light/white) e escuras (dark/slate-900), com **Indigo** como cor de destaque.

**Framework Base:** Tailwind CSS 4

---

## 1. Cores (Color Palette)

Utilizamos a paleta padrão do Tailwind, com foco nas escalas de `Slate` (neutros com toque azulado) e `Indigo` (ação/brand).

### Primária (Brand)

Usada para ações principais, links ativos e destaques.

- **Brand Primary:** `indigo-600` (`#4f46e5`) - Botões, links ativos no header.
- **Brand Hover:** `indigo-700` (`#4338ca`) - Hover em botões claros.
- **Brand Light/Dark Mode Hover:** `indigo-400` (`#818cf8`) - Hover em links sobre fundos escuros.

### Neutros (Backgrounds & Borders)

- **Dark Surface:** `slate-900` (`#0f172a`) - Footer, seções escuras.
- **Secondary Dark:** `slate-800` (`#1e293b`) - Botões secundários no footer, bordas em fundo escuro.
- **Surface:** `white` (`#ffffff`) - Fundo padrão das páginas.
- **Surface Alt:** `slate-50` (`#f8fafc`) - Fundos alternativos ou hovers leves.
- **Border Light:** `slate-200` (`#e2e8f0`) - Bordas em fundo claro (header).

### Tipografia (Text Colors)

- **Heading/Primary Text:** `slate-900` (`#0f172a`) - Títulos principais, texto forte.
- **Body Text:** `slate-600` (`#475569`) - Parágrafos, descrições.
- **Muted Text:** `slate-500` (`#64748b`) - Legendas, textos secundários.
- **On Dark Text:** `slate-400` (`#94a3b8`) - Texto sobre fundo slate-900.
- **On Dark Heading:** `white` (`#ffffff`) - Títulos sobre fundo escuro.

---

## 2. Tipografia

**Família:** `Inter`, sans-serif (definido no `index.css`).

### Estilos Recorrentes

A identidade visual marca o uso de textos em caixa alta com espaçamento largo para navegação e rótulos.

| Elemento               | Classes Tailwind                                    | Descrição                                          |
| :--------------------- | :-------------------------------------------------- | :------------------------------------------------- |
| **Nav Links / Labels** | `text-[10px] font-black uppercase tracking-[0.2em]` | Usado no Header, links do Footer e rótulos curtos. |
| **Section Label**      | `text-xs font-black uppercase tracking-tight`       | Variação um pouco maior, usada em submenus.        |
| **Body Small**         | `text-sm leading-relaxed font-medium`               | Parágrafos de apoio (ex: descrição no footer).     |
| **Micro Copy**         | `text-[9px] font-bold uppercase tracking-widest`    | Copyright e avisos legais.                         |

---

## 3. Layout & Espaçamento

- **Container Padrão:** `max-w-7xl mx-auto px-4`
  - Centraliza o conteúdo e mantém margens seguras em telas grandes.
- **Grid de Seções:** Grid de 12 colunas ou flexbox, com gaps variando de `gap-4` a `gap-16`.
- **Z-Index:**
  - `z-50`: Header fixo (sticky/fixed).

---

## 4. Componentes Chave

### Botões

- **Primary (CTA):**
  - Background: `bg-slate-900` (no light) ou `bg-indigo-600` (mobile/dark).
  - Text: `text-white`.
  - Shape: `rounded-full` (arredondado completo) ou `rounded-xl`.
  - Typography: `text-[10px] font-black uppercase tracking-[0.2em]`.
  - Padding: `px-6 py-3`.
  - Hover: `hover:bg-slate-800` ou `transition-all`.

### Ícones

- **Estilo:** SVG Inline (`fill-current` ou `stroke-current`).
- **Tamanho:** `w-4 h-4` a `w-6 h-6`.

### Efeitos

- **Glassmorphism:** `backdrop-blur-md bg-white/90` (usado no Header fixo).
- **Transições:** `transition-colors`, `transition-all`, `duration-200`.
- **Animações:** `animate-in fade-in slide-in-from-top-2` (menus dropdown).

---

## 5. Exemplo de Uso (Snippet)

```tsx
// Exemplo de um Header de Seção seguindo o estilo
<div className="text-center mb-12">
  <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em]">
    Nossos Serviços
  </span>
  <h2 className="text-3xl font-bold text-slate-900 mt-2">Soluções Completas</h2>
  <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
    Descubra como podemos transformar seu negócio.
  </p>
</div>
```
