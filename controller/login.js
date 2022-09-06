const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
    const {email, password: Npassword } = req.body
if (!email || !Npassword) return res.json({status:"error", error:"please enter your email and password"});
else {
    db.query('SELECT * FROM users WHERE email = ?', {email}, async(err, result) => {
        if (err) throw err;
        if (!result[0] || !await bcrypt.compare(password, result[0].password))return res.json({status:"error", 
        error:"incorrect email or password"})
        else {
            const token = jwt.sign({id: result[0].id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES,
            })
            cookiesOptions = {
                expiresIn: new Date(date.now() + process.env.COOKIES_EXPIRES * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            res.cookie("userRegistered", token, cookiesOptions);
            return res.json({status: "success", success: "user has been logged in"});
        }
    })
}


}