var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbConf = require('./db');
var path = require('path');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

app.all('/*', function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    //res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});


// connect to mongolab
mongoose.connect(dbConf.url);

// check if connection was successful
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log('connected to mongolab' + dbConf.url);
});

app.use('/', require('./routes'));

app.use(express.static(__dirname + '/../app'));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/../app/index.html'));
});

// If no route is matched by now, it must be a 404
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Start the server
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
