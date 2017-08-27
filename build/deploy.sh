#!/bin/bash
IMAGE=qinling/minishop:latest
CONTAINER=minishop
docker stop $CONTAINER
docker rm $CONTAINER
docker rmi $IMAGE
docker run -d -p 80:80 --restart=always --name $CONTAINER $IMAGE