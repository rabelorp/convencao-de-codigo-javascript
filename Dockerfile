FROM node:18.19.1
WORKDIR /usr/src/app
ADD . .

ENV TZ=America/Sao_Paulo

RUN npm install --production