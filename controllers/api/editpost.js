const router = require("express").Router();
const Post = require("../../models/post");

router.get("/:postID", (req, res) => {
  if (req.params.postID) {
    Post.findOne({
      where: {
        id: req.params.postID,
      },
      raw: true,
    }).then((dbPostData) => {
     
      res.render("editpost", dbPostData);
    });
  }
});

module.exports = router;
