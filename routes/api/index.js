const router = require("express").Router();
const userRoutes = require("./user.routes");
const topicRoutes = require("./topic.routes");

// User routes
router.use("/users", userRoutes);
router.use("/topics", topicRoutes);

module.exports = router;
