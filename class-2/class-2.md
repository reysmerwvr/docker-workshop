# Class 2 - Docker Workshop

> Dockerfile > Docker client > Docker Server > Usable Image!

## Creating a Dockerfile

- Specify a base image
- Run some commands to installs additional programs
- Specify a command to run on container startup

## Building a Dockerfile

Create an image that runs redis-server

- Create the Dockerfile and then:

docker build -t <image-name> .

```bash
docker build -t alpine-node-lts . #sha256:4b52b9a578740a5a25e7fdd42a0bdf6ff9c256c3d65477
docker run -it sha256:4b52b9a578740a5a25e7fdd42a0bdf6ff9c256c3d65477 bash
```