exports.blog = function (req, res) {
    //If route url not contains code,
    //Rendering blog page
    if (!req.params.code) {
        //Rendering blog view by passing modal objects
        res.render('blog', {
            title: global.settings.pageTitle_blog,
            blog: res.result,//fetched from database
            blogTrendCode_Popular: global.settings.blogTrendCode_Popular,
            blogTrendCode_Latest: global.settings.blogTrendCode_Latest,
            category: global.settings.blogCategory,
            task: global.settings.blogTask,
        });
    }
    //Rendering blog details page
    else {
        res.render('blogDetails', {
            blogDetails: res.result,//fetched from database
        });
    }
};