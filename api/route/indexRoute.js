
module.exports = function (app) {
	console.log("---------------------------");
	console.log("Inside Index Route ");
    console.log("---------------------------");

    //Initiallising api
    var api = {};

    api.blog = require('./blogRoute')(app);

    //Index Route; the home page route
    app.get('/', require('../../public/routes/index').index);

    //Default Route
    app.all('*', function (req, res) {
        //global.logger.warn("API route not found :" + req.path);
        res.status(404).send({ "Success": false, "Message": "404", "Status": 404 });
    });

	return api;
};