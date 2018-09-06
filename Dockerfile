FROM node:boron-alpine
WORKDIR /app
ADD . /app
RUN npm install
CMD npm start