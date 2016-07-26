var express = require('express');
var index = require('./routes/index');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/', index);

app.use('/groceries', groceries);
app.use('/amount', amount);



var server=app.listen(3000, function(){
  var port=server.address().port;
  console.log('listening on Port', port);
});
