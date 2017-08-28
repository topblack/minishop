![](https://www.travis-ci.org/topblack/minishop.svg?branch=master)

# How to Build and Run Locally
## Prerequisites
Please install the following environments.
- nodejs 6+
- typescript

## Windows
Execute build\run.bat

# Automated Build
Travis is configured to build the master branch automatically.
A successful build is pushed to docker hub and then deploy to http://shop.qinling.io .

## Travis
https://travis-ci.org/topblack/minishop

travis-ci.org reads the file .travis.yml.

### Docker
https://hub.docker.com/r/qinling/minishop/

```
docker pull qinling/minishop
```

### Test Site
http://shop.qinling.io