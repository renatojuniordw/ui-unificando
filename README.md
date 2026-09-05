# Unificando UI

Interface front-end moderna e escalável para o ecossistema **Unificando**. Desenvolvida com foco em performance, acessibilidade e melhores práticas de arquitetura.

## 🚀 Tech Stack

- **Core**: React 19.2+, TypeScript 5.8+
- **Build Tool**: Vite 6.2+
- **Styling**: TailwindCSS (via CDN), CSS Modules
- **Animation**: Framer Motion 12+
- **Architecture**: Component-based with Strict Type Safety

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura limpa e organizada dentro de `src/`:

```
src/
├── components/     # Componentes de UI reutilizáveis (Header, Footer, Layout)
├── pages/         # Componentes de Página (Home, Solutions, etc.)
├── hooks/         # Custom Hooks (Lógica encapsulada)
├── styles/        # Estilos globais e mixins
├── types/         # Definições de Tipos TypeScript (Interfaces, Enums)
├── App.tsx        # Componente Raiz e Roteamento
├── index.tsx      # Ponto de entrada da aplicação
└── index.css      # Estilos globais e reset
```

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js (v20+ recomendado)
- npm ou yarn

### Passo a Passo

1. **Instalar dependências**
   ```bash
   npm install
   ```

2. **Rodar servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   Acesse em: `http://localhost:3000` (ou porta configurada)

3. **Gerar build de produção**
   ```bash
   npm run build
   ```

4. **Visualizar build**
   ```bash
   npm run preview
   ```

## 📐 Padrões de Código

- **Strict TypeScript**: Type checking rigoroso ativado (`strict: true`).
- **Separation of Concerns**: Componentes de apresentação separados de lógica.
- **Composition**: Preferência por composição de componentes sobre herança.
- **Imports**: Uso de alias `@/` apontando para `src/` para imports limpos.

## 🎨 Design & UI

Este projeto utiliza **Framer Motion** para transições suaves entre páginas e micro-interações, focando em uma experiência de usuário (UX) premium e fluida.

---

© 2026 Unificando. Crafted for results.
