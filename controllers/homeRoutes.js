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
        console.log(postData, " -- ", req.session.loggedIn);

        res.render('homepage', {
            postData,
            logged_in: req.session.loggedIn,
        })
    } catch (err) {
        res.status(500).json(err);
    }
},
);



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
        console.log(postData);

        res.render('comments', {
            postData,
            logged_in: req.session.loggedIn,
        })
    } catch (err) {
        res.status(500).json(err);
    }
},
);




router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });
  

  router.get('/logout', (req, res) => {
    if (req.session.logged_out) {
        res.redirect('/');
        return;
    }

    res.render('logout');
});

module.exports = router;