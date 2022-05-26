const router = require("express").Router();
const { compare } = require("bcrypt");
const User = require("../../models/user");

//login a signed up user
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      userName: req.body.userName,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "There are no users with that user name" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.passWord);

    if (!validPassword) {
      res.status(400).send({ IsValidPassword: validPassword });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
    });
    res.render("dashboard", { loggedIn: req.session.loggedIn });
  });
});

//create a new user
router.post("/signup", (req, res) => {
  User.create({
    username: req.body.userName,
    password: req.body.passWord,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//logout and destroy session
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
