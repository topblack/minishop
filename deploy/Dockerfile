FROM qinling/nodejs
EXPOSE 80

ADD dist /app/
ADD node_modules /app/node_modules/
WORKDIR /app

ENTRYPOINT node main.js
