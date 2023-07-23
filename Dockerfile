FROM node:14
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
ENV PATH="./node_modules/.bin:$PATH"
COPY  . .
RUN npm run build
EXPOSE 3000
CMD [ "npm","start" ]
