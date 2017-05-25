module.exports = function (app) {
	console.log("---------------------------");
	console.log("Inside Blog Route ");
	console.log("---------------------------");

    //Blog page route
    app.get("/blog", require('./public/routes').blog);
};