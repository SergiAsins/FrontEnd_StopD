# Usa una imagen base con Node.js 20 en Alpine (ligera)
FROM node:20-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias primero para aprovechar el caché de Docker
COPY package.json package-lock.json* ./

# Instala las dependencias (incluyendo devDependencies para el build)
RUN npm install --frozen-lockfile

# Copia el resto de los archivos
COPY . .

# Construye la aplicación
RUN npm run build

# Etapa final - solo los archivos necesarios para producción
FROM node:20-alpine AS runner
WORKDIR /app

# Copia solo lo necesario desde la etapa builder
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Instala serve para servir la aplicación estática
RUN npm install -g serve

# Expone el puerto
EXPOSE 5173

# Comando para servir la aplicación
CMD ["serve", "-s", "dist", "-l", "5173"]