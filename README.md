# lyrian_web

[![lyrian_web](https://github.com/lyrian-app/lyrian_web/actions/workflows/build_test.yml/badge.svg)](https://github.com/lyrian-app/lyrian_web/actions/workflows/build_test.yml)
[![lyrian_web](https://github.com/lyrian-app/lyrian_web/actions/workflows/deploy.yml/badge.svg)](https://github.com/lyrian-app/lyrian_web/actions/workflows/deploy.yml)

Lyrian Web is an application to generate Japanese lyrics with Markov chain.

The Rust crate of Lyrian is [here](https://github.com/lyrian-app/lyrian)

## Technical wrap-up

- Virtual environment
  - Docker
- Backend
  - Rust
    - actix-web
- Frontend
  - JavaScript/TypeScript
    - React
    - react-router-dom
  - Styling
    - Sass with CSS Modules
  - Testing tools
    - Jest
    - react-testing-library
    - react-hooks-testing
  - Others
    - Mock Service Worker
    - Prettier
- CI/CD
  - GitHub Actions
- Deployment
  - heroku

## Usage

### Launch service

```sh
# frontend
docker-compose up -d frontend

# backend
docker-compose up -d backend
```

### Use shell

```
docker exec -it backend_dev bash
docker exec -it frontend_dev ash
```

### Display logs

```
docker logs -f backend_dev
docker logs -f frontend_dev
```

### Launch production container

```
docker build ./-t lyrian_web_app
docker run -d -p 8088:8088 lyrian_web_app
```
