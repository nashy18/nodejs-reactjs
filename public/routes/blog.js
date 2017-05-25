exports.blog = function (req, res) {
    res.render('blog', {
        title: "Blog Page",
        header: 'Avinash Kumar Blog',
        blogEntry: [
            {
                id : 1,
                title: "Customer Can refuse to pay service charge",
                description: "The aspect ratio of an image describes the proportional relationship between its width and its height. Two common video aspect ratios are 4:3 (the universal video format of the 20th century), and 16:9 (universal for HD television and European digital television).",
                createdBy: "Avinash",
                dateCreated: "Dec 12, 2016",
                commentCount: 2,
                imageURL: "https://cdn.rawgit.com/nashy18/cdn/47cfcedd/images/Blog_img1.jpg"
            },
            {
                id: 2,
                title: "Customer dsd charge",
                description: "The aspect ratio of an image describes the proportional relationship between its width and its height. Two common video aspect ratios are 4:3 (the universal video format of the 20th century), and 16:9 (universal for HD television and European digital television).",
                createdBy: "Avinash",
                dateCreated: "Dec 12, 2016",
                commentCount: 2,
                imageURL: "https://cdn.rawgit.com/nashy18/cdn/47cfcedd/images/Blog_img2.jpg"
            },
            {
                id: 3,
                title: "service charge",
                description: "The aspect ratio of an image describes the proportional relationship between its width and its height. Two common video aspect ratios are 4:3 (the universal video format of the 20th century), and 16:9 (universal for HD television and European digital television).",
                createdBy: "Avinash",
                dateCreated: "Dec 12, 2016",
                commentCount: 2,
                imageURL: "https://cdn.rawgit.com/nashy18/cdn/47cfcedd/images/Blog_img3.jpg"
            },
            {
                id: 4,
                title: "Customer service charge",
                description: "The aspect ratio of an image describes the proportional relationship between its width and its height. Two common video aspect ratios are 4:3 (the universal video format of the 20th century), and 16:9 (universal for HD television and European digital television).",
                createdBy: "Avinash",
                dateCreated: "Dec 12, 2016",
                commentCount: 2,
                imageURL: "https://cdn.rawgit.com/nashy18/cdn/47cfcedd/images/Blog_img2.jpg"
            }
        ],

        popularPosts: [
            {
                id: 1,
                title: "What people consider themselves?",
                subTitle: "70% inverstors are 'Asset Poor' - What about you?",
                createdBy: "Avinash",
                dateCreated: "Dec 12, 2016",
                commentCount: 2,
                imageURL: "https://cdn.rawgit.com/nashy18/cdn/47cfcedd/images/Blog_img1.jpg"
            },
            {
                id: 2,
                title: "What people consider themselves?",
                subTitle: "70% inverstors are 'Asset Poor' - What about you?",
                createdBy: "Avinash",
                dateCreated: "Dec 12, 2016",
                commentCount: 2,
                imageURL: "https://cdn.rawgit.com/nashy18/cdn/47cfcedd/images/Blog_img2.jpg"
            },
            {
                id: 3,
                title: "What people consider themselves?",
                subTitle: "70% inverstors are 'Asset Poor' - What about you?",
                createdBy: "Avinash",
                dateCreated: "Dec 12, 2016",
                commentCount: 2,
                imageURL: "https://cdn.rawgit.com/nashy18/cdn/47cfcedd/images/Blog_img3.jpg"
            },
            {
                id: 4,
                title: "What people consider themselves?",
                subTitle: "70% inverstors are 'Asset Poor' - What about you?",
                createdBy: "Avinash",
                dateCreated: "Dec 12, 2016",
                commentCount: 2,
                imageURL: "https://cdn.rawgit.com/nashy18/cdn/47cfcedd/images/Blog_img1.jpg"
            }
        ],
        task: [
            {
                id: 1,
                title:"Investment"
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
    //res.send("blog page");
};