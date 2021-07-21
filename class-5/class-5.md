# Class 5 - Docker Workshop

> Creating a Production-Grade Workflow

- Development -> Testing -> Deployment

```bash
docker build -f Dockerfile.dev .
docker run -it -p 3000:3000 IMAGE_ID
```

## Docker Volumes

Allow to create references of our local code into the container

```bash
docker run -it -p 3000:3000 -v /app/node_modules -v $(pwd):/app IMAGE_ID
docker run -it IMAGE_ID yarn test
```

**-v /app/node_modules** Put a bookmark on the node_modules folder
**-v $(pwd):/app** Map the pwd into the '/app' folder

With Docker Compose

```bash
docker-compose up -d
docker ps
# Run test
docker exec -it IMAGE_ID yarn test
```

Docker attach

Allow to attach our terminal to specific container stdin, stdout, stderr processes

```bash
docker attach CONTAINER_ID
```

Using nginx

## Build Phase

- Use node:alpine
- Copy the package.json file
- Install dependencies
- Run 'yarn build'

## Run Phase

- Use nginx
- Copy over the result of 'yarn build'
- Start nginx

## Single Container Setup

- Setup code to github
- Travis automatically pulls repo
- Travis builds and image, tests code
- Travis pushes code to AWS Elasticbeanstalk
- Elasticbeanstalk builds image, deploys it