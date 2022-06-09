FROM node:14.18.3
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN yarn install