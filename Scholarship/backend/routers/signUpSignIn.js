const express = require("express");
const router = express.Router();
const { registerUser, loignUser } = require("../controllers/user");

// user
router.post("/register", registerUser);
router.post("/login", loignUser);

module.exports = router;