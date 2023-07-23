FROM node:17-alpine
WORKDIR /emedlogix
ENV PATH="./node_modules/.bin:$PATH"
RUN npm install
COPY  . .
EXPOSE 3000
CMD [ "npm","start" ]
