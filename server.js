/* 
Node.js will operate with FOUR dependencies: express for routing, mongoose for database structuring, body-parser for handling request post data, and SESSION for handling user data
*/

var express = require("express");
var path = require('path');

var app = express();

const server = app.listen(8000, function () {
    console.log("listening on port 8000");
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());

/* ************* session setup *************** */
const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'schiavona',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

//=========> Connect to ANGULAR <=========
app.use(express.static(__dirname + '/public/dist/public'));

//mongoose connection
require('./server/config/mongoose.js');

//ROUTES
require('./server/config/routes.js')(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});