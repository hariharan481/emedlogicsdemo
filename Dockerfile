FROM node:18-alpine
WORKDIR /emedlogixdemo
ENV PATH="./node_modules/.bin:$PATH"
COPY  . .
RUN npm install
EXPOSE 3000
CMD [ "npm","start" ]
