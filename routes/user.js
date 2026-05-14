const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", wrapAsync(async(req, res) => {
    try{
        let {username, email, password} = req.body;
    const newUser = new User({email, username});
    const registerdUser = await User.register(newUser, password);
    console.log(registerdUser);
    req.login(registeredUser, (err) =>{
        if(err) {
            return next(err);
        }
        req.flash("success", "Welcome to Staynest!")
        res.redirect("/listings");
    });
    }catch(e){
        res.flash("error", e.message);
        res.redirect("/signup");
    }
    })
);

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
})
router.post(
    "/login", 
    savedRedirectUrl, 
    passport.authenticate("local", { 
        failureRedirect: "/login", 
        failureFlash: true 
    }), 
    async(req, res)=>{
        req.flash("success", "Welcome back to Staynest!");
        // req.flash("success ", "Welcome bach to Staynest!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    }
);

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/listings");
    })
})

module.exports = router;