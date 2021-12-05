# lyrian_web

## Usage

### Launch development environment

```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
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

### Launch production environment

```
docker-compose -f docker-compose.yml up -d
```
