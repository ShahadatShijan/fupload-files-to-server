const express = require("express");
const {createUser,homePage} = require("../controllers/user.controller");
const upload = require("../middleware") //file upload middleware
const router = express.Router();


//home route
router.get("/",homePage)
// create user
router.post("/register", upload.single("image"), createUser);


module.exports = router;