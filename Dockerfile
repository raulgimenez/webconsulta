# Usa la imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package.json package-lock.json ./
RUN yarn install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación Next.js
RUN yarn build

# Expone el puerto en el que corre la app (por defecto 3000)
EXPOSE 3000

# Comando para ejecutar la aplicación en producción
CMD ["yarn", "start"]