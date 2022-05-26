const router = require("express").Router();
const Post = require("../../models/post");

//create post
router.post("/", (req, res) => {
  Post.create({
    post_title: req.body.postTitle,
    post_body: req.body.postContent,
    user_id: req.session.user_id,
  })
    .then((dbUserData) => {
      console.log(dbUserData);
      res.json(dbUserData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//edit posts
router.put("/", (req, res) => {
  if (req.body.postId) {
    Post.findOne({
      where: {
        id: req.body.postId,
      },
      raw: true,
    }).then((dbPostData) => {
      res.render("editpost", dbPostData);
    });
  }
});
module.exports = router;
