# This is a practice about docker
I built these projects by extrating different sources of information like blogs, videos or documentation from official websites. My main purpose is to document my learning. if you have any idea, interesting project or suggestion please write me.

## Instructions
For running a Dockerfile:
```
$ docker build -t <name image> <dockerfile directory>
$ docker run <name image>
```

For running a docker-compose in the current directory:
```
$ docker-compose build
$ docker-compose up
```

## Content
| folder | description |
|--------|-------------|
| [`hello-world`](https://github.com/vargas88hugo/docker/tree/master/hello-world) | Simple example of hello world creating an image with Dockerfile, I used CMD to execute echo |
| [`nginx-html`](https://github.com/vargas88hugo/docker/tree/master/nginx-html) | Create a base nginx image and configure the Dockerfile to copy an Html file to the new image |
| [`node-area`](https://github.com/vargas88hugo/docker/tree/master/node-area) | Other example of copying a file to an image, in this case a javascript file |
| [`node-express-mongo`](https://github.com/vargas88hugo/docker/tree/master/node-express-mongo) | In this project I used docker-compose to create three images, on from a Dockerfile for a NodeJS app, and the other two are a Mongo data base and a Mongo administrator | 
