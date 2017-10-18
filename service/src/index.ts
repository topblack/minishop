const express = require('express')
const app = express()
const path = require('path');
const routes = require('express').Router();

const handleWeChatGet = (req: any, res: any) => {
  res.send(req.query.echostr);
}

const handleGetDetail = (req: any, res: any) => {
  res.sendFile(path.join(__dirname, '../ui/index.html'));
}

const handleGetPayment = (req: any, res: any) => {
  res.sendFile(path.join(__dirname, '../ui/index.html'));
}

app.get('/wx', handleWeChatGet)
  .use('/', express.static('ui'))
  .get('/detail/:actId', handleGetDetail)
  .get('/payment/:actId', handleGetPayment);

app.listen(8080, function () {
  console.info('Listening the port 8080...');
});

