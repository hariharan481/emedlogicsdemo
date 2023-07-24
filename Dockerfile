FROM node:14-alpine
WORKDIR /myapp-emd
COPY package*.json ./
RUN npm insall
COPY  . .
EXPOSE 3000
CMD [ "npm","start" ]
