const router = require("express").Router();
const { Post, User } = require("../models/index");

router.get("/", (req, res) => {
  User.findAll({
    include: {
      model: Post,
      attributes: ["post_body", "post_title"],
    },
    raw: true,
  }).then((dbPostData) => {
    console.log(dbPostData);

    res.render("home", { dbPostData, loggedIn: req.session.loggedIn });
  });
});

module.exports = router;
