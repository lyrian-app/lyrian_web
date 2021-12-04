# dev
FROM node:16.13-alpine as dev-stage
WORKDIR /frontend
COPY package.json ./
RUN yarn install
COPY . .

# build
FROM dev-stage as build-stage
RUN yarn build
