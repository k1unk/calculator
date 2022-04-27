FROM node:10-alpine
WORKDIR /client
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8087
CMD ["npm", "run", "serve", "--", "--port", "8087"]
