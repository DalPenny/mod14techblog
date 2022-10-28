const router = require('express').Router();
const { Blogpost, Comments, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    // if (!req.session.logged_in) {
    res.render('homepage');
    const blogData = await Blogpost.findAll({
        attributes: ["id", "blogtitle", "blogtext", "createdAt"],
        include: [
            {
                model: User,
                attributes: ["username"],
            }
        ]

    });


    const postData = blogData.map((project) => project.get({ plain: true }))
    console.log(postData);
    // pass to veiws/layouts/homepage handlebar
    res.render('homepage', {
        postData,
    })
    // }
    res.render('/login');
})

// adding from unit 23
// router.get('/', (req, res) => {
//     try {
//         console.log("router to homepage")
//     }
//     catch (err) {
//         res.status(550).json(err);
//     }
// })

// get data from model Blogpost table 


// } else {
//     alert("homepage-render login")
//     res.render('login', {
//     // res.render("homepage", {
//         postData
//     });
// }
// } catch (err) {
//     res.status(550).json(err);
// }

// });



router.get('/login', (req, res) => {
    // alert("router /login  ")
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});


module.exports = router;