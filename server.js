//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//Setting Global Variables --Starts

//Getting Application Configuration
global.settings = require('./config/appSettings.json');
//Getting Common Utilty Functions
global.utility = require('./api/common/utils')(global.settings);
//Getting logger module
//global.logger = require('./common/logger')(global.settings, global.utility);
//Getting database config
global.dbProvider = require('./config/database')(global.settings);

//Setting Global Variables --Ends


//Proxy Issue fix while connecting with vmoksha's internal network - Starts

//Comment below code, when working with different network
//http://stackoverflow.com/questions/18586902/node-js-global-proxy-setting
//Unfortunately, it seems that proxy information must be set on each call to http.request.
//Node does not include a mechanism for global proxy settings.
//The global-tunnel module on NPM appears to handle this, however:
//var globalTunnel = require('global-tunnel');

//globalTunnel.initialize({
//    host: 'http://proxy.vmoksha.com',
//    port: 8080
//});

//process.env.http_proxy = 'http://proxy.vmoksha.com:8080';
//globalTunnel.initialize();

//Proxy Issue fix while connecting with vmoksha's internal network - Ends

//Setting up middlewares & constants --Starts

app.set('views', __dirname + '/public/views');
//https://github.com/reactjs/express-react-views
app.set('view engine', 'jsx');
var options = {
    beautify: true,
    presets: ["es2015", "react"]
};
app.engine('jsx', require('express-react-views').createEngine(options));
app.use(bodyParser.json());

//Setting up JWT Secret Key
app.set('superSecret', global.settings.authToken); // secret variable

//CORS Middleware
app.use(function (req, res, next) {
    //http://enable-cors.org/server_expressjs.html
    //Enabling CORS -Starts
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    //Enabling CORS -Ends
    next();
});

//JWT Authentication -Starts

//Getting utility functions
//var jwtAuthorization = require('./security/jwtAuthorizationFilter')(_appExtensions);

//Middleware: To be executed in between request and response
//app.use(function(req, res, next) { 
//    //Calling function for JWT Authentication
//	jwtAuthorization.OnAuthorization(req, res, next);
//});

//JWT Authentication -Ends

//Setting up middlewares --Ends

//Initiallising API Routes
var routes = require('./api/route/indexRoute')(app);

//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 }); 

