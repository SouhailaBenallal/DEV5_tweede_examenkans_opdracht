# Docker for DEV_5 API

## Builds, (re)creates, starts, and attaches to containers for a service.
```
docker-compose up --build -d
```

## Stops containers and removes containers, networks, volumes, and images created by up
```
docker-compose down
```

## Create a database in postgres in docker
```
docker exec -it <container-id> bash
```

## Runs all migrations that have not yet been run in docker
```
docker exec <image-name of server> npm run migrate:latest
```
