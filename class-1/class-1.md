# Class 1 - Docker Workshop

> Docker run

```bash
docker run hello-world
docker run busybox
docker run busybox echo hello class 1
docker run busybox ls
```

> Listing running containers

```bash
docker run busybox ping google.com
docker ps
docker ps --all
```

## Container Lifecycle

docker create <image name> # Create a container
docker start <container name> # Start a Container

These two commands are equal to do: **docker run <image name>**

```bash
docker create hello-world # ebba6f7f61c9a17207b830fe57c4463bc16a80458a79eb4958423e820b53df4c
docker start -a ebba6f7f61c9a17207b830fe57c4463bc16a80458a79eb4958423e820b53df4c
docker start ebba6f7f61c9a17207b830fe57c4463bc16a80458a79eb4958423e820b53df4c
```

> Removing stopped containers

```bash
docker system prune
```

> Retrieving Log Outputs

```bash
docker create busybox echo hello class 1 # ac2fb10d30fc5a726cd7b33cb348b4d335e253a9efb53f7d9c4d2193047541f5
docker start ac2fb10d30fc5a726cd7b33cb348b4d335e253a9efb53f7d9c4d2193047541f5
docker logs ac2fb10d30fc5a726cd7b33cb348b4d335e253a9efb53f7d9c4d2193047541f5 # hello class 1
```

> Stopping containers

docker stop <container name> # Stop a container
docker kill <container name> # Kill a Container

```bash
docker create busybox ping google.com # 1d90d80782aaddef08f391fbd7c68c7ea90f7f194e1e7b8b284d1763760b99ca
docker start 1d90d80782aaddef08f391fbd7c68c7ea90f7f194e1e7b8b284d1763760b99ca
docker logs 1d90d80782aaddef08f391fbd7c68c7ea90f7f194e1e7b8b284d1763760b99ca # 64 bytes from 127.0.0.1: seq=9 ttl=37 time=34.256 ms
docker ps --all
docker stop 1d90d80782aa
docker ps --all
docker start 1d90d80782aa
docker ps --all
```

> Multi-Command Containers

docker exec -it <container name> <command>

```bash
docker run redis
docker exec -it 67277ae09623 redis-cli # exec: run another command, -it: allow us to provide input to the container
> set myValue 5
> get myValue
docker exec -i -t 67277ae09623 redis-cli
```

> Getting command prompt in a container

bash - zsh - sh - powershell

```bash
docker exec -it 67277ae09623 sh # exec: run another command, -it: allow us to provide input to the container, alt + D or cmd + D to exit
docker run -it busybox sh
```