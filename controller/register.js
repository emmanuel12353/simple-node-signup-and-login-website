const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");


const register = async(req, res) => {
const {email, password: Npassword } = req.body
if (!email || !Npassword) return res.json({status:"error", error:"please enter your email and password"});
else {
      console.log("email"); 
    db.query('SELECT email FROM users WHERE email = ?', async(err, result) =>
      {
        if (err) throw err;
        if (result[0]) return res.json({status:"error", error:"email has already been registered"});
        else {
            const password = await bcrypt.hash(Npassword, 8);
            console.log("password"); 
            db.query('insert INTO users SET ?', {email: email, password: password }, (err, result) => {
                if (err) throw error;
                return res.json({status:"success", error:"user has been registered"});
            })

        }
     })
  }
}
module.exports = register;