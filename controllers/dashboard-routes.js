const router = require("express").Router();

router.get("/", (req, res) => {
  console.log(req.session);
  res.render("dashboard", { loggedIn: req.session.loggedIn });
});

// router.post("/", (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
// });
module.exports = router;
