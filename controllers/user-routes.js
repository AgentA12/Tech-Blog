const router = require("express").Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  res.render("signup");
});

router.post("/", (req, res) => {
  User.create({
    username: req.body.userName,
    password: req.body.passWord,
  }).then((dbUserData) => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
    });
    res.json("you're now logged in.");
  });
});

module.exports = router;
