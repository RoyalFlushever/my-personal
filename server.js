var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/welcome', function(req, res) {
    res.sendFile(path.join(__dirname, 'welcome.html'));
});

app.listen(8080, function() {
    console.log('Listen on 8080');
});