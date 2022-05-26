const router = require("express").Router();
const apiRoutes = require("./api/index");
const dashboardRoutes = require("./dashboard-routes");
const homeRoutes = require("./home-routes");

router.use(apiRoutes);
router.use(homeRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
