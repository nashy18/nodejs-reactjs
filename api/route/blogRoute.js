module.exports = function (app) {
	console.log("---------------------------");
	console.log("Inside Blog Route ");
	console.log("---------------------------");

    //Inheriting blogController
	var blogController = require('../controller/blogController')();
    //Inheriting blogService
	var blogService = require('../service/blogService')();

    //Webpage route for reterving blog page
	app.get("/blog", [blogController.search, blogService.search, require('../../public/routes/blog').blog]);

    //Webpage route for reterving blog details page
	app.get("/blog/:code", [blogController.getByCode, blogService.search, require('../../public/routes/blog').blog]);

    //API route for creating any blog entry
	app.post("/api/blog", [blogController.create, blogService.create, blogService.response]);

    //API route for seraching blog entry based on attributes
	app.post("/api/blog/search", [blogController.search, blogService.search, blogService.response]);

};