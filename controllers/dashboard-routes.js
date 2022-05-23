const router = require("express").Router();
const Post = require("../models/post");
router.get("/", (req, res) => {
  console.log(req.session);
  res.render("dashboard", { loggedIn: req.session.loggedIn });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Post.create({
    post_title: req.body.postTitle,
    post_body: req.body.postTitle,
    user_id: req.session.user_id,
  }).then((dbUserData) => {
    console.log(dbUserData);
    res.json(dbUserData);
  });
});
module.exports = router;
