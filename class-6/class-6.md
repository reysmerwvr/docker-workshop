# Class 6 - Docker Workshop

> Building a Multi-Container Application

```bash
docker run -it IMAGE_ID
```

## Multiple Containers Setup

- Push code to github
- Travis automatically pulls repo
- Travis builds a test image, tests code
- Travis builds prod images
- Travis pushes built prod images to Docker Hub
- Travis pushes project to AWS Elasticbeanstalk
- Elasticbeanstalk pull images from Docker Hub, deploys

(Amazon ECS Task Definition)[https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html]
(Amazon ECS Task Definition Parameters)[https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html]

