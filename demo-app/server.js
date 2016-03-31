var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(__dirname));

app.post('/gabe', function (req, res, next) {
  console.log('EVERYBODY SHOULD KNOW THAT GABE IS', req.body);
  res.status(204).end();
});

var port = 3000
app.listen(port, function () {
  console.log('Servin it up to', port);
});