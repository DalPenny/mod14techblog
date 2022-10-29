const router = require('express').Router();
const { Blogpost, Comments, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {

    try {
        const blogData = await Blogpost.findAll({
            attributes: ["id", "blogtitle", "blogtext", "createdAt"],
            include: [
                {
                    model: User,
                    attributes: ["username"],
                }
            ]
        })
        const postData = blogData.map((project) => project.get({ plain: true }));
        console.log(postData);

        res.render('homepage', {
            postData,
        })
    } catch (err) {
        res.status(500).json(err);
    }
},
);




router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});


module.exports = router;