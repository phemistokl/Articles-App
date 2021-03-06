var path = require('path');
var express = require('express');
var api = require('./api');
var bodyParser = require('body-parser');
var port = 3001;

var app = express();

app.use(bodyParser.json());
app.use('/api', api);

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('API listening at http://localhost:' + port);
});
