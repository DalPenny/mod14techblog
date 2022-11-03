const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    const blogData = await Comments.findAll({
      attributes: ["id", "comment_text", "user_id", "createdAt"],
      where: {
        blog_id: req.params.id
      } 
    })
    const postData = blogData.map((project) => project.get({ plain: true }));
    console.log(postData);

    res.render('comments', {
      postData,
    })
  } catch (err) {
    res.status(500).json(err);
  }
},
);

router.post('/addcomment', withAuth, async (req, res) => {
  try {
    const newComment = await Comments.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // use the id from the session
      user_id: req.session.user_id
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;