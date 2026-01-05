# ==========================================
# STAGE 1: Build
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Instala dependências (cache eficiente)
COPY package*.json ./
# npm ci é mais rápido e confiável para builds (usa lockfile exato)
RUN npm ci

# Copia código fonte
COPY . .

# Gera o build de produção (pasta /dist)
RUN npm run build

# ==========================================
# STAGE 2: Production Server
# ==========================================
FROM nginx:alpine

# Remove configurações padrão do Nginx
RUN rm -rf /etc/nginx/conf.d/*

# Copia config otimizada para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos estáticos gerados no build
COPY --from=builder /app/dist /usr/share/nginx/html

# Healthcheck simples para garantir que o Nginx está respondendo
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
