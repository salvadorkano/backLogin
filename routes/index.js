const router = require("express").Router();
const userRoutes = require("./users");

router.use("/users", userRoutes);
//router.use("/animals", )

module.exports = router;
