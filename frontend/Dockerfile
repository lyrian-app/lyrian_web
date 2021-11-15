# dev
FROM node:16.13-alpine as dev-stage
WORKDIR /lyrian_web
COPY package.json ./
RUN yarn install
COPY . .

# build
FROM dev-stage as build-stage
RUN yarn build

# production
FROM debian:buster-slim
COPY --from=build-stage lyrian_web/build/ ./
EXPOSE 3000
VOLUME ./build
