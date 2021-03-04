FROM node:latest

WORKDIR /app

COPY . .
RUN npm install


EXPOSE 9996

ENTRYPOINT ["node", "index.js"]
