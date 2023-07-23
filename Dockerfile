FROM node:17-alpine
WORKDIR /emedlogix
COPY package.json .
ENV PATH="./node_modules/.bin:$PATH"
RUN npm run build
COPY  . .
EXPOSE 3000
CMD [ "npm","start" ]
