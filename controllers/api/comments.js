const Comment = require("../../models/comment");
const router = require("express").Router();

router.post("/comments", (req, res) => {
  Comment.create({
    comment_body: req.body.comment,
    user_id: req.session.user_id,
    post_id: req.body.postId,
  })
    .then((dbCommentData) => {
      res.json(dbCommentData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
