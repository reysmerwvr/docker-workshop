# simpleweb

Simple Web NodeJs Application. Example to demonstrate Docker concepts

## Requirements

  - Node.js >= 16.3.0
  - npm >= 7.15.1

## Version

1.0.0

## Installation

Download zip file and extract it [latest pre-built release](https://github.com/reysmerwvr/simpleweb). Or clone the repository and cd into it.

This project uses a number of open source projects to work properly:

* [Express] - Fast, unopinionated, minimalist web framework for Node.js

## Setup & Run

Run docker containers with docker commands.

```bash
cd simpleweb
docker build -t yourdockerid/simpleweb .
docker run -p 8080:8080 yourdockerid/simpleweb
docker run -it yourdockerid/simpleweb
```

# Port Mapping

```bash
docker run -p 8080:8080 <image_id>
```

### TODO
  [ ] Write tests
  [ ] Add code comments
  [ ] Add server validations

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does 
its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Express]: <https://expressjs.com/>