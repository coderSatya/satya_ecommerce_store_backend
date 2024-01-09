const express = require("express");

const router = express.Router();

const { getUserSigin, getUserSignup } = require("../controllers/UsersAuth");

router.route("/sign-in").get(getUserSigin); // kaun sa path h ar kya kya krunga
router.route("/sign-up").get(getUserSignup);

module.exports = router;
