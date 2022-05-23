const router = require("express").Router();
const session = require("express-session");
const User = require("../models/user");

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  console.log("recieved");
  User.findOne({
    where: {
      userName: req.body.userName,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status.json({ message: "There are no users with that user name" });
    }
    console.log(dbUserData);
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.json(dbUserData);
    });
    res.render("dashboard", { loggedIn: req.session.loggedIn });
  });
});

router.post("/signup", (req, res) => {
  User.create({
    username: req.body.userName,
    password: req.body.passWord,
  })
    .then((dbUserData) => {
      console.log(dbUserData);
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
        res.json(dbUserData);
      });
      console.log(req.session);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/logout", (req, res) => {
  console.log("sented");
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
