const logout = (req, res) => {
    res.clearCookie("useRegister");
    res.redirect("/");
}
module.exports = logout;