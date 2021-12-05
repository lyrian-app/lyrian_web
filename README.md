# lyrian_web

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
