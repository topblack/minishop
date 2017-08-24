FROM qinling/nodejs
EXPOSE 80

ADD dist/* /jenkins-assistant/
ADD lib/* /jenkins-assistant/
ADD node_modules /jenkins-assistant/node_modules/
WORKDIR /jenkins-assistant

ENTRYPOINT node index.js