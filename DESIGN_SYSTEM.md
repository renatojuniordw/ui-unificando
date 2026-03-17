# Design System — Unificando

> Documento de referência visual e de desenvolvimento. Descreve padrões,  
> tokens, componentes e regras que garantem consistência em toda a aplicação.

---

## 0. Filosofia de Design — Brutalismo Digital

O design da Unificando segue o estilo **Neo-Brutalista**, caracterizado por:

- **Contraste extremo:** preto sólido (`slate-950`) sobre amarelo neon (`#ccff00`) e vice-versa.
- **Sem arredondamentos:** bordas retas (`border-radius: 0`). Quadrado é a forma.
- **Sombras brutalistas:** `box-shadow` manual com deslocamento visível (ex: `8px 8px 0px #000`).
- **Tipografia pesada:** `font-black` com `uppercase` e `tracking-tighter`.
- **Anti-clichê:** zero gradientes suaves, zero cards flutuantes genéricos, zero paleta indigo/blue.

**Framework base:** React (Vite) + Tailwind CSS v4

---

## 1. Paleta de Cores

### Cores Primárias

| Token | Valor | Uso |
|---|---|---|
| `Neon Yellow` | `#ccff00` | Cor de destaque principal, fundos de hero, badges ativos |
| `Black` | `slate-950` / `#020617` | Bordas, sombras, textos principais, fundos escuros |
| `White` | `#ffffff` | Fundos de seção, texto sobre fundo escuro |

### Variações Usadas

| Token | Valor | Uso |
|---|---|---|
| `slate-900` | `#0f172a` | Superfícies escuras secundárias (interior de cards dark) |
| `slate-800` | `#1e293b` | Bordas internas em contexto dark |
| `slate-400` | `#94a3b8` | Texto muted sobre fundo escuro |
| `slate-300` | `#cbd5e1` | Ícones/texto desabilitado |
| `slate-200` | `#e2e8f0` | Bordas leves em contexto claro |
| `slate-100` | `#f1f5f9` | Hover suave em listas |

> ⚠️ **Purple/Violet é proibido** no projeto. Nenhum shade de `purple`, `violet` ou `indigo` deve ser usado.

---

## 2. Tipografia

**Família Principal:** `Inter`, sans-serif (declarada no `index.css`).

### Escala Tipográfica

| Papel | Classes Tailwind | Uso |
|---|---|---|
| **Display Hero** | `text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter uppercase leading-[0.9]` | Títulos de seção principal (Hero, planos) |
| **Heading Seção** | `text-3xl md:text-5xl font-black uppercase tracking-tighter` | Subtítulos de seções internas |
| **Card Title** | `text-2xl font-black uppercase tracking-tighter leading-none` | Títulos de módulos/cards |
| **Label / Badge** | `text-[10px] font-black uppercase tracking-widest` | Rótulos de seção, badges, tags |
| **Micro Label** | `text-[9px] font-black uppercase tracking-widest` | Copyright, avisos legais, sub-labels |
| **Body Mono** | `text-sm font-mono font-bold uppercase` | Parágrafos de suporte, listas de features |
| **Body Normal** | `text-base text-slate-950 font-medium leading-relaxed` | Texto corrido |
| **Muted** | `text-xs text-slate-500 font-mono uppercase tracking-widest` | Textos de apoio, hints |

---

## 3. Sistema de Espaçamento e Layout

- **Container padrão:** `max-w-7xl mx-auto px-6 lg:px-12`
- **Padding de seção:** `py-24 md:py-32` (seções hero/destaque) | `py-16` (seções intermediárias)
- **Gaps de Grid:** `gap-8` (padrão) | `gap-12` (seções espaçadas)

### Z-Index Reference

| Camada | Valor | Uso |
|---|---|---|
| `z-50` | 50 | Header fixo |
| `z-40` | 40 | Menu mobile (overlay) |
| `z-30` | 30 | Sticky summary (InvestmentSummary na página de Planos) |
| `z-10` | 10 | Conteúdo relativo (above backgrounds) |

---

## 4. Tokens de Sombra (Brutalist Shadows)

Sombras são um elemento central do Brutalismo. Sempre sem `blur`, sempre com cor sólida.

| Token | Valor CSS | Uso |
|---|---|---|
| `shadow-hard-lg` | `8px 8px 0px #000` | Cards, módulos de destaque |
| `shadow-hard-md` | `4px 4px 0px #000` | Badges, sub-cards |
| `shadow-hard-sm` | `2px 2px 0px #000` | Elementos menores (switches, selects) |
| `shadow-hard-neon` | `8px 8px 0px #ccff00` | Dropdown de soluções, destaque especial |
| `shadow-hard-white` | `4px 4px 0px #fff` | Cards sobre fundo escuro |

---

## 5. Componentes Chave

### 5.1 Botões

#### CTA Principal (fundo claro → texto escuro)
```tsx
<button className="bg-[#ccff00] text-slate-950 px-8 py-5 font-black uppercase tracking-[0.2em] hover:bg-[#b3ff00] transition-colors border-2 border-transparent">
  COMEÇAR AGORA
</button>
```

#### CTA Invertido (fundo escuro → texto neon)
```tsx
<button className="bg-slate-950 text-[#ccff00] px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#ccff00] hover:text-slate-950 transition-colors border-4 border-slate-950 shadow-[6px_6px_0px_#000]">
  FECHAR PACOTE AGORA
</button>
```

#### Toggle Switch (Brutalista)
```tsx
<button className="w-14 h-8 border-2 border-slate-950 transition-all relative bg-slate-950">
  <div className="absolute top-1 right-1 w-5 h-5 border-2 border-slate-950 bg-[#ccff00]"></div>
</button>
```

---

### 5.2 Cards / Módulos

#### Card Ativo (Neon)
```tsx
<div className="p-8 border-4 border-slate-950 bg-[#ccff00] shadow-[8px_8px_0px_#000]">
  {/* conteúdo */}
</div>
```

#### Card Inativo (Contorno)
```tsx
<div className="p-8 border-4 border-dashed border-slate-950 bg-white opacity-90 shadow-none">
  {/* conteúdo */}
</div>
```

---

### 5.3 Badges / Labels

```tsx
// Badge Primário
<span className="bg-slate-950 text-[#ccff00] font-black uppercase tracking-widest text-[10px] px-2 py-1 border-2 border-slate-950 shadow-[4px_4px_0px_#ccff00]">
  PLANO IA BASE
</span>

// Badge Secundário (invertido)
<span className="bg-[#ccff00] text-slate-950 font-black uppercase tracking-widest text-[10px] px-2 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#000]">
  PLANO DE ENTRADA
</span>
```

---

### 5.4 Seções

#### Hero / Header de Página
- Fundo: `bg-[#ccff00]` (neon) ou `bg-slate-950` (dark)
- Padding: `py-12 md:py-32`
- Borda inferior: `border-b-4 border-slate-950`

#### Seção Branca Intermediária
- Fundo: `bg-white`
- Separação de seções com `border-t-8 border-slate-950`

---

### 5.5 Header / Navbar

- Background: `bg-slate-950` + borda inferior `border-b-4 border-[#ccff00]`
- Links nav: `text-xs font-black uppercase tracking-widest text-white hover:bg-[#ccff00] hover:text-slate-950`
- Logo: encapsulada em bloco neon `bg-[#ccff00] p-2 border-2 border-slate-950 shadow-[4px_4px_0px_#fff]`
- Dropdown "Soluções": abre por hover **e** clique. Fecha após `150ms` de inatividade (via `scheduleClose`) ou ao clicar em um link.

---

### 5.6 Checkboxes (Brutalistas)
```tsx
<div className="w-5 h-5 border-2 border-slate-950 flex items-center justify-center bg-slate-950 text-[#ccff00]">
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
    <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
  </svg>
</div>
```

---

### 5.7 Inputs / Range Sliders
```tsx
<input
  type="range"
  className="w-full h-4 bg-white border-2 border-slate-950 appearance-none cursor-pointer accent-slate-950"
/>
```

---

## 6. Animações e Transições

| Animação | Implementação | Uso |
|---|---|---|
| **Fade In** | `animate-in fade-in slide-in-from-top-2 duration-200` | Dropdown de soluções |
| **Slide Bottom** | `animate-in fade-in slide-in-from-bottom-4` | Expansão de módulos (Planos) |
| **Hover Lift** | `hover:-translate-y-1 transition-transform` | Cards interativos |
| **Hover Lift (logo)** | `hover:-translate-y-1 hover:shadow-[6px_6px_0px_#fff] transition-all` | Logo/Header |
| **Grain Texture** | SVG `feTurbulence` inline via `style` | Hero, CTA (opacidade 10-20%) |
| **Shimmer (hover)** | `group-hover:animate-[shimmer_0.8s_forwards]` | Botão CTA Hero |

---

## 7. Mobile First

| Breakpoint | Prefixo Tailwind | Comportamento |
|---|---|---|
| Default (< 640px) | — | Layout compact, tipografia reduzida |
| Small | `sm:` | 640px+ |
| Medium | `md:` | 768px+ — layout em 2 colunas quando necessário |
| Large | `lg:` | 1024px+ — grid de 3 colunas, nav desktop |

### Padrões Mobile Específicos

- **Planos (Configurador):** Tabs (abas) em mobile substituem o grid de 3 colunas do desktop.
- **Estimativa de Preço:** Sticky `top-20` (abaixo do header fixo). Layout compacto em linha com cards SETUP/MENSAL lado a lado.
- **Header:** Hamburger menu abre slide-in lateral sobre `bg-slate-950`.

---

## 8. Regras Anti-Clichê (Purple Ban + Boas Práticas)

| ❌ Proibido | ✅ Correto |
|---|---|
| `rounded-xl`, `rounded-full` | `rounded-none` (sem bordas arredondadas) |
| `indigo`, `purple`, `violet` | `[#ccff00]`, `slate-950`, `white` |
| Sombras com blur (`shadow-lg`) | Sombras brutalistas (`shadow-[8px_8px_0px_#000]`) |
| Gradientes suaves | Cor sólida ou neon |
| Cards "flutuando" sem contexto | Cards com borda grossa e sombra hard |
| Tipografia leve (`font-light`) | `font-black`, `font-bold`, `uppercase` |

---

## 9. Snippet de Referência — Seção Padrão

```tsx
// Exemplo de seção com o padrão Brutalista Unificando
<section className="py-24 bg-white border-t-8 border-slate-950">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    {/* Header da Seção */}
    <div className="text-center mb-16">
      <span className="inline-block bg-slate-950 text-[#ccff00] font-black uppercase tracking-widest text-[10px] px-3 py-1 border-2 border-slate-950 shadow-[4px_4px_0px_#ccff00] mb-6">
        RÓTULO DA SEÇÃO
      </span>
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-slate-950">
        TÍTULO DA SEÇÃO
      </h2>
    </div>

    {/* Grid de Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      <div className="p-8 border-4 border-slate-950 bg-[#ccff00] shadow-[8px_8px_0px_#000] hover:-translate-y-2 transition-transform">
        <p className="text-slate-950 font-black uppercase tracking-tighter text-xl">
          CARD ATIVO
        </p>
      </div>
    </div>

  </div>
</section>
```
