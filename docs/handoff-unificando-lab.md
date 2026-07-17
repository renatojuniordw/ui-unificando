# Handoff: Rebrand Unificando → Laboratório de Projetos Autorais

## Contexto

**Unificando** é a empresa/laboratório de **Renato Bezerra** (renatobezerra.com.br). Enquanto o site pessoal vende o engenheiro, a Unificando vende **os produtos que ele constrói** — é a vitrine comercial dos projetos.

## O que já foi feito

### Homepage (refeita)
- Hero: "Construímos produtos digitais que resolvem problemas reais"
- Seção Projetos: 4 cards (PDF Unificando, Afiliados, Previdenciário, Consultoria)
- Seção Capacidades: Produtos Utilitários, IA Aplicada, Dev Sob Medida
- Serviços Sob Consultoria: grid 2x2 com tom suave
- CTA: "Vamos construir algo juntos?" — sem urgência

### Remoções completas
- **Deploy Inteligente** — página, rota, menu, footer, pricing, contact form, legal pages
- **Atendimento Unificado** — página, rota, menu, footer, plans configurator, contact form, legal pages, market data

### "Quem constrói"
- Footer: link "Construído por Renato Bezerra → Engenheiro de Software & IA"
- About: seção completa com bio, tags técnicas, CTA pro site pessoal

### Meta
- Title: "Unificando | Laboratório de Projetos Autorais & IA"
- OG/Twitter tags atualizados
- CNPJ removido de todos os arquivos

---

## Próximas etapas (decididas)

### 1. Página `/projetos` — dedicada no Unificando

**Problema:** Conteúdo duplicado com renatobezerra.com.br/projetos
**Solução proposta:** Criar um JSON compartilhado entre os dois projetos.

Estrutura sugerida do JSON (`/data/projects.json` ou endpoint):

```json
[
  {
    "id": "unificando-pdf",
    "title": "Unificando PDF",
    "slug": "unificando/pdf",
    "shortDescription": "Suíte de 16 ferramentas PDF gratuitas",
    "longDescription": "...",
    "status": "live",
    "url": "https://pdf.unificando.com.br",
    "tags": ["Next.js", "PDF-lib", "Docker", "Ghostscript"],
    "highlights": ["16 ferramentas", "100% gratuito", "Privacidade total"],
    "featured": true,
    "visibleOn": ["unificando", "portfolio"] // controle de onde aparece
  },
  {
    "id": "ia-automacao",
    "title": "Unificando: IA & Automação",
    "slug": "unificando/automacao",
    "shortDescription": "Engine de atendimento com IA, LLMs e n8n",
    "status": "live",
    "tags": ["n8n", "OpenAI", "Node.js", "AWS Lambda"],
    "visibleOn": ["portfolio"]
  },
  {
    "id": "sistema-afiliados",
    "title": "Sistema de Afiliados",
    "status": "development",
    "tags": ["React", "IA", "Em breve"],
    "visibleOn": ["unificando", "portfolio"]
  },
  {
    "id": "calculo-previdenciario",
    "title": "Cálculo Previdenciário",
    "status": "development",
    "tags": ["IA", "Python", "Em breve"],
    "visibleOn": ["unificando", "portfolio"]
  }
]
```

**Cada projeto puxa desse JSON**. O campo `visibleOn` controla onde cada projeto aparece:
- `["unificando"]` — só no Unificando
- `["portfolio"]` — só no site pessoal
- `["unificando", "portfolio"]` — nos dois

### 2. Blog / Lab Notes

**Problema:** Renato já escreve artigos técnicos no site pessoal. Unificando não deveria ter outro blog separado.

**Solução proposta:** A página de blog da Unificando (se existir) puxa **do mesmo RSS/JSON** do site pessoal. Opções:

- **RSS feed**: renatobezerra.com.br/blog/feed.json ou feed.xml — Unificando consome e filtra por tags relevantes
- **JSON compartilhado**: mesmo esquema dos projetos, com campo `visibleOn`
- **iFrame/embed**: mais simples, menos flexível

Tags que fazem sentido no Unificando (vs site pessoal):
- Artigos sobre **produtos que ele construiu** → mostram capacidade técnica
- Tutoriais das **ferramentas utilitárias** (ex: "Como usar o PDF Unificando")
- Casos de uso de **IA aplicada** nos projetos

Artigos do site pessoal que encaixariam no Unificando:
- "De comentário a DM: automatizando o Instagram com n8n" → IA & Automação
- "Prompt injection" → mostra profundidade técnica em IA

### 3. Próximos passos

1. Decidir formato do JSON compartilhado (repo separado? dentro de um dos projetos?)
2. Criar a página `/projetos` no Unificando consumindo o JSON
3. Decidir se o blog do Unificando existe como página própria ou só link pros artigos do site pessoal
4. Alinhar tom: site pessoal = "I built this" / Unificando = "We build this"
