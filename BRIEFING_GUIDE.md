# Guia de Briefing Técnico - Pós-Contrato

Este documento serve como guia base para a criação do formulário no Tally.so ou Typeform.
**Objetivo:** Coletar dados técnicos e operacionais para iniciar o setup imediatamente.

---

## 🏗️ 1. Identidade & Acessos (Obrigatório para Todos)

_Esses dados moldam a cara do painel e do site._

- **Upload da Marca:** "Por favor, envie seu logotipo."
  - _Formato ideal:_ Vetor (.AI, .EPS, .SVG) ou PNG com fundo transparente em alta qualidade.
- **Paleta de Cores:** "Quais são as cores principais da sua marca?" (Ex: Azul Marinho e Dourado #HEX).
- **Responsável Técnico:** "Quem da sua equipe será nosso contato ponto focais para dúvidas de TI/Acessos?" (Nome, Email, WhatsApp).

---

## 💬 2. Para Setup de Atendimento (Chatwoot)

_Pergunte apenas se contratou Atendimento ou IA._

- **Equipe (Usuários):** "Liste as pessoas que terão acesso à plataforma."
  - Campos: Nome Completo | E-mail | Função (Admin ou Agente).
- **Departamentos (Filas):** "Como você quer dividir o atendimento?"
  - _Exemplos:_ Comercial, Suporte, Financeiro.
- **Horário de Atendimento:** "Qual o horário de funcionamento da sua equipe humana?"
  - _Importante para configurar mensagens de ausência._
- **Canais para Conectar:** "Quais canais vamos integrar?"
  - [ ] WhatsApp (Necessário QR Code posteriormente)
  - [ ] Instagram Direct
  - [ ] Facebook Messenger
  - [ ] E-mail
  - [ ] Chat no Site

---

## 🤖 3. Para Inteligência Artificial (O Cérebro)

_A parte mais importante. Sem isso, a IA não sabe o que falar._

- **Nome da IA:** "Como sua IA deve se chamar?" (Ex: Bia, Assistente Virtual, Jarvis).
- **Tom de Voz (Persona):** "Como ela deve falar?"
  - [ ] Formal e Corporativa
  - [ ] Amigável e Casual
  - [ ] Entusiasmada e Vendedora
  - [ ] Técnica e Direta
- **Base de Conhecimento (Contexto):** "Anexe aqui materiais sobre sua empresa."
  - _Solicitar Upload:_ PDFs de apresentação, Tabela de Preços, Manual de Produtos, FAQs antigas.
- **O que ELA VENDE?:** "Descreva em 1 parágrafo qual é o seu produto principal e a oferta irresistível."
- **Objetivo Principal:**
  - [ ] Tirar Dúvidas
  - [ ] Agendar Reunião
  - [ ] Qualificar Lead
  - [ ] Vender diretamente
- **Regra de Ouro (Guardrails):** "O que a IA **NUNCA** deve dizer ou fazer?" (Ex: Nunca dar descontos, nunca falar palavrão, nunca prometer prazos curtos).
- **Transbordo:** "Em que momento a IA deve chamar um humano?" (Ex: Quando o cliente pedir falar com atendente, ou quando estiver irritado).

---

## 🌐 4. Para Criação de Site (Web Design)

_Focado em design e conteúdo._

- **Domínio:** "Você já tem domínio registrado (www.suaempresa.com.br)?"
  - Se sim: "Precisaremos do acesso ao registro.br ou GoDaddy."
- **Referências Visuais:** "Cole aqui links de 3 sites que você acha bonitos (podem ser de concorrentes ou não)."
- **Estrutura (Sitemap):** "Quais páginas não podem faltar?"
  - Ex: Home, Sobre, Serviços, Galeria, Contato.
- **Imagens:** "Você tem fotos profissionais da equipe/escritório?" (Solicitar link do Drive/WeTransfer).
- **Copy (Textos):** "Você já tem os textos prontos ou precisamos criar baseados em tópicos?"

---

## 🚀 5. Acessos Externos (Integrações)

- **Meta Business Suite (Facebook/Instagram):** Precisaremos ser adicionados como parceiros ou ter acesso administrativo para conectar as APIs oficiais.
- **Google Business (Ficha):** Necessário para automações de Google Agenda ou Reviews.

---

### 💡 Dica de Ouro para o Tally:

Use a **Lógica Condicional (Conditional Logic)**.
Crie uma primeira pergunta: _"Quais serviços você contratou?"_ (Multi-select)

- Atendimento
- IA
- Site

E configure o formulário para só mostrar as seções acima baseadas nessa resposta. Isso torna o formulário curto e agradável para quem contratou pouco, e completo para quem contratou tudo.
