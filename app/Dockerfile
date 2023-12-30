FROM node

ENV MONGO_DB_USERNAME=admin
ENV MONGO_DB_PWD=password

WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000

CMD [ "node", "server.js" ]