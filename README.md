# Docker Demo App

To start the application in development mode run `docker-compose`'s `up` command

``` sh
docker-compose up
```

To stop and remove containers, networks, images, and volumes run `docker-compose`'s `down` command

``` sh
docker-compose down
```

To start the application in production mode specify the corresponding `docker-compose.prod.yml` file

``` sh
docker-compose -f docker-compose.prod.yml up
```

To rebuild your services use `build` option

``` sh
docker-compose build <service_name> --no-cache
```
