FROM node:18.2.0-alpine
WORKDIR /app
COPY shanari-shanari-fe/package*.json ./
RUN npm install
COPY shanari-shanari-fe/ .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
