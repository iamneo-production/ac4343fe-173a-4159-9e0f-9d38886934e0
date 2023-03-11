const express = require("express");
const router = express.Router();
const signUpSignInRoutes = require("./signUpSignIn");
const BAD_GATEWAY = require("../controllers/bad_gatway");
const routeInfo = require("../helper/routeInfo");

router.use(routeInfo);
router.use("/api/v1", signUpSignInRoutes);
router.use("*", BAD_GATEWAY);

module.exports = router;

