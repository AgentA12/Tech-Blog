const router = require("express").Router();
const apiRoutes = require("./api");
const dashboardRoutes = require("./dashboard-routes");
const userRoutes = require("./user-routes");
const homeRoutes = require("./home-routes");

router.use(apiRoutes);
router.use(userRoutes);
router.use(homeRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
