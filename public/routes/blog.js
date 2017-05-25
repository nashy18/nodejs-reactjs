exports.blog = function (req, res) {
    //If route url not contains code,
    //Rendering blog page
    if (!req.params.code) {
        //Rendering blog view by passing modal objects
        res.render('blog', {
            title: "Investor Blog",
            blog: res.result,
            category :[
                {
                    id: 1,
                    code : "CATEG01",
                    name: "All"
                },
                {
                    id: 2,
                    code: "CATEG02",
                    name: "Investment"
                },
                {
                    id: 3,
                    code: "CATEG03",
                    name: "Finance"
                },
                {
                    id: 4,
                    code: "CATEG04",
                    name: "Credit"
                },
                {
                    id: 5,
                    code: "CATEG05",
                    name: "Other"
                },
                {
                    id: 6,
                    code: "CATEG06",
                    name: "More"
                },
                {
                    id: 7,
                    code: "CATEG07",
                    name: "Family"
                },
                {
                    id: 8,
                    code: "CATEG08",
                    name: "Rupee"
                }
            ],
            task: [
                {
                    id: 1,
                    title: "Investment"
                },
                {
                    id: 2,
                    title: "Finance"
                },
                {
                    id: 3,
                    title: "TradingsInsurance"
                },
                {
                    id: 4,
                    title: "Webinars"
                },
                {
                    id: 5,
                    title: "Finacial Planning"
                },
                {
                    id: 6,
                    title: "Mutual Funds"
                },
                {
                    id: 7,
                    title: "eBooks"
                },
                {
                    id: 8,
                    title: "Membership"
                }
            ]
        });
    }
    //Rendering blog details page
    else {
        res.render('blogDetails', {
            title: "Blog Details Page",
            blogDetails: res.result,
        });
    }
};