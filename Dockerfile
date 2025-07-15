# Etapa de construcción
FROM node:20.11.1-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copia la build de React al Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Reemplaza la configuración por defecto de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
