FROM node:17-alpine
WORKDIR /usr/src/app
ENV PATH="./node_modules/.bin:$PATH"
COPY  . .
RUN npm install
EXPOSE 3000
CMD [ "npm","start" ]
