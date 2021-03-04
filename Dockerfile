FROM node:latest

WORKDIR /app

COPY . .
RUN npm install


EXPOSE 64456

ENTRYPOINT ["node", "index.js"]
