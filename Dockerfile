FROM node:18-alpine
WORKDIR /claritproject1
ENV PATH="./node_modules/.bin:$PATH"
COPY  . . 
RUN npm install
EXPOSE 3000
CMD [ "npm","start" ]
