const express = require("express");
const auth_controller = require("../controllers/auth_controller");
const signupSchema = require("../validators/auth-validator");
const validate = require('../middleware/validate-middleware');
const authMiddleware = require('../middleware/auth-middleware');


const router = express.Router();

router.route("/register").post(validate(signupSchema),auth_controller.register);

router.route("/login").post(auth_controller.login);

//implementing auth middleware for jwt token

router.route("/user").get(authMiddleware, auth_controller.user); 

module.exports = router;
