const router = require("express").Router();
const Post = require("../models/post");
const User = require("../models/user");
const { format_date } = require("../utils/helpers");

//renders current users posts
router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    User.findAll({
      where: {
        id: req.session.user_id,
      },
      include: {
        model: Post,
        attributes: ["post_title", "post_body", "id"],
      },
      raw: true,
    }).then((dbUserData) => {
      console.log(dbUserData);
      dbUserData.forEach((user) => {
        user.createdAt = "Posted on " + format_date(user.createdAt);
      });
      if (dbUserData[0]["posts.id"] === null) {
        res.render("dashboard", { loggedIn: req.session.loggedIn });
      } else
        res.render("dashboard", { loggedIn: req.session.loggedIn, dbUserData });
    });
  } else res.render("dashboard", { loggedIn: req.session.loggedIn });
});

router.get("/edit/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    raw: true,
  }).then((dbPostData) => {
    console.log(dbPostData);
    res.render("editpost", { dbPostData, loggedIn: req.session.loggedIn });
  });
});

router.delete("/delete", (req, res) => {
  console.log(req.body.postId);
  Post.destroy({
    where: {
      id: req.body.postId,
    },
  })
    .then((dbDeleteData) => {
      res.json(dbDeleteData);
    })
    .catch((err) => res.json(err));
});

router.put("/edit", (req, res) => {
  Post.update(
    {
      post_title: req.body.editedPostTitle,
      post_body: req.body.editedPostBody,
    },
    {
      where: {
        id: req.body.postId,
      },
    }
  )
    .then((updatedPostData) => {
      req.json(updatedPostData);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
