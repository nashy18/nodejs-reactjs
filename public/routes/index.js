exports.index = function (req, res) {
    res.render('index', {
        title : "Invester Page",
        name: 'John'
    });
};