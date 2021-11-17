# lyrian_web

## Usage

### Launch development environment

```
docker-compose up -d
```

### Use shell

```
docker exec -it lyrian_web_backend_1 ash
docker exec -it lyrian_web_frontend_1 ash
```

### Display logs

```
docker logs -f lyrian_web_backend_1
docker logs -f lyrian_web_frontend_1
```

### Build

```
docker build -t backend_production ./backend
```
