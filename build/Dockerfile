FROM qinling/nodejs
EXPOSE 8080

ADD ui/dist /app/ui
ADD service/dist /app/service
ADD service/node_modules /app/service/node_modules/
WORKDIR /app

ENTRYPOINT node service/index.js