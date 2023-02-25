const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const {login, register, processRegister } = require("../middlewares/userController");
const uploadAvatar = require("../middlewares/uploadAvatar")
const registerValidator = require("../validations/registerValidator")
/* GET -Login Form  */
router.get("/login", controller.login); 

/*  -register form */
router.get("/register", controller.register); 

/* POST - Register user data */
router.post("/register", single.single("avatar"),registerValidator ,processRegister)

module.exports = router;