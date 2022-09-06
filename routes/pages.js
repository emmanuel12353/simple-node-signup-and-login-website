 const express = require("express")
const loggedIn = require('../controller/loggedin');
const logout = require("../controller/logout")
const router = express.Router();

router.get("/", loggedIn, (req, res) => {
    if (req.user){
        res.render("index", {status: "loggedin", user: req.user});
    }
    else {
        res.render("index",  {status: "no", user: "nothing"});
    }
})

router.get("./register", (req, res) => {
    res.sendFile("register.html", {root: "./public"});
})

router.get("./login", (req, res) => {
    res.sendFile("login.html", {root: "./public"});
})
router.get("./logout", logout)
module.exports = router;