FROM node:17-alpine
WORKDIR /myapp-emd
COPY package*.json ./
RUN npm ci
COPY  . .
RUN npm run build
EXPOSE 3000
CMD [ "npm","start" ]
