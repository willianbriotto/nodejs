var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.json({'message': 'Hello World'});
});

app.listen(8000);
