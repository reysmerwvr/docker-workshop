# Class 2 - Docker Workshop

> Dockerfile > Docker client > Docker Server > Usable Image!

## Creating a Dockerfile

- Specify a base image
- Run some commands to installs additional programs
- Specify a command to run on container startup

## Building a Dockerfile

Create an image that runs redis-server

- Create the Dockerfile and then:

docker build -t <docker_id>/<image-name>:<version> .

```bash
docker build -t reysmerwvr/alpine-node-lts:latest . #sha256:4b52b9a578740a5a25e7fdd42a0bdf6ff9c256c3d65477
docker run -it sha256:4b52b9a578740a5a25e7fdd42a0bdf6ff9c256c3d65477 bash
```

## Manual Image Generation with Docker Commit

docker commit -c 'CMD ["<image_name>"]' <CONTAINER_ID>

```bash
docker run -it alpine sh
# apk add --update redis
docker ps
docker commit -c 'CMD ["redis-server"]' 39075447a383
docker run 39075447a383
```