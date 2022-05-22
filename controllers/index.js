const router = require("express").Router();
const dashboardRoutes = require("./dashboard-routes");
const userRoutes = require("./user-routes");
const homeRoutes = require("./home-routes");

router.use("/", userRoutes);
router.use("/home", homeRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
