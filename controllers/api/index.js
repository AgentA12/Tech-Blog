const router = require("express").Router();

const editPostRoutes = require("./editpost");

router.use("/editpost", editPostRoutes);

module.exports = router;
