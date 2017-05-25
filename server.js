//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//Setting Global Variables --Starts

//Getting Application Configuration
global.settings = require('./config/appSettings.json');

//Getting Common Utilty Functions
global.utility = require('./api/common/utils')(global.settings);

//Setting Global Variables --Ends

//Setting up middlewares & constants --Starts

//https://github.com/reactjs/express-react-views
//Setting up react template view engine & services
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jsx');
var options = {
    beautify: true,
    presets: ["es2015", "react"]
};
app.engine('jsx', require('express-react-views').createEngine(options));

//setting up body parser to json
app.use(bodyParser.json());

//setting up CORS Middleware
app.use(function (req, res, next) {
    //http://enable-cors.org/server_expressjs.html
    //Enabling CORS -Starts
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    //Enabling CORS -Ends
    next();
});

//Setting up middlewares & constants --Ends

//Initiallising API Routes
var routes = require('./api/route/indexRoute')(app);

//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 }); 

