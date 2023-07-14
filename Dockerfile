FROM node:18-alpine
WORKDIR /emedlogixdemo
COPY ./package*.json ./
ENV PATH="./node_modules/.bin:$PATH"
COPY  . .
RUN npm install
EXPOSE 3000
CMD [ "npm","run,"start" ]
