# frontend dev stage
FROM node:16.13-alpine as front-dev
WORKDIR /frontend
COPY ./frontend/ .
RUN yarn
RUN yarn build

# backend build stage
FROM rust:1.56.1-buster as back-build
WORKDIR /backend
COPY /backend/ .
RUN cargo build --release

# production
FROM debian:buster-slim as production
COPY --from=front-dev /frontend/build/ /frontend/build/
COPY --from=back-build /backend/target/release/lyrian_web /usr/local/bin/
EXPOSE 8088
CMD ["lyrian_web"]

# backend dev stage
FROM rust:1.56.1-buster as back-dev
WORKDIR /backend
RUN cargo install cargo-watch
COPY /backend/ .
