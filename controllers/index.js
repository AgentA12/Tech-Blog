const router = require("express").Router();
const dashboardRoutes = require("./dashboard-routes");
const signupRoutes = require("./user-routes");
const homeRoutes = require("./home-routes");
const loginRoutes = require("./login-routes");

router.use("/home", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/signup", signupRoutes);
router.use("/login", loginRoutes);

module.exports = router;
