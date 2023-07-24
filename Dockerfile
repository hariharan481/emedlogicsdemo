FROM node:18.12.1-alpine
WORKDIR /emedlogicsdemo
ENV PATH="./node_modules/.bin:$PATH"
COPY  . . 
RUN npm install
EXPOSE 3000
CMD [ "npm","start" ]
