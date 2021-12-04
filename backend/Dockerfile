# dev
FROM rust:1.56.1-buster as dev-stage
WORKDIR /backend
RUN cargo install cargo-watch
COPY . .

# build
FROM dev-stage as build-stage
RUN cargo build --release

# production
FROM debian:buster-slim
COPY --from=build-stage /backend/target/release/lyrian_web /usr/local/bin/
EXPOSE 8088
CMD ["lyrian_web"]
