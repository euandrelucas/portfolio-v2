# Etapa de construção
FROM node:20 as builder

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia apenas os arquivos necessários para instalar as dependências
COPY package*.json ./
COPY yarn.lock ./

# Instala dependências
RUN yarn install

# Copia o restante dos arquivos
COPY . .

# Executa verificações e build
RUN yarn lint && yarn build

# Etapa final: imagem leve para produção
FROM node:20-slim

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia apenas os arquivos necessários do estágio anterior
COPY --from=builder /usr/src/app/.next .next
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/yarn.lock ./
COPY --from=builder /usr/src/app/next.config.ts ./
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.env ./

# Instala apenas dependências de produção
RUN yarn install --production --frozen-lockfile

# Exponha a porta usada pelo aplicativo
EXPOSE 1411

# Comando para iniciar o servidor em produção
CMD ["yarn", "start"]