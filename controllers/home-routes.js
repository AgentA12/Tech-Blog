const router = require("express").Router();
const { Post, User } = require("../models/index");
const { format_date } = require("../utils/helpers");

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["post_body", "post_title"],
    include: {
      model: User,
      attributes: ["username", "created_at"],
    },
    raw: true,
  }).then((dbPostData) => {
    if (!dbPostData.length) {
      res.render("nopost");
    } else {
      dbPostData.forEach((post) => {
        post["user.created_at"] = format_date(post["user.created_at"]);
      });
      res.render("home", { dbPostData, loggedIn: req.session.loggedIn });
    }
  });
});

module.exports = router;
