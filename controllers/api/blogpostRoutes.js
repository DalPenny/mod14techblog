const router = require('express').Router();
const {Blogpost, User} = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/blogpost/:id', withAuth, async (req, res) => {

    try {
        const blogData = await Blogpost.findByPk(req.params.id, {
            attributes: ["id", "blogtitle", "blogtext", "createdAt"],
            include: [
                {
                    model: User,
                    attributes: ["username"],
                }
            ]
        })
        const postData = blogData.map((project) => project.get({ plain: true }));
        console.log(postData, "going to comments");

        res.render('comments', {
            postData,
            logged_in: req.session.loggedIn,
        })
    } catch (err) {
        res.status(500).json(err);
    }
},
);

module.exports = router;

