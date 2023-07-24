FROM node:14-alpine
WORKDIR /myapp-emd
COPY package*.json ./
RUN npm install
COPY  . .
EXPOSE 3000
CMD [ "npm","start" ]
