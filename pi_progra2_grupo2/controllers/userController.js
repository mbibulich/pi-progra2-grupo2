
const controller = {
    index: function (req, res) {
        res.send(usuarios.lista);
    },
    register: function (req, res) {
        res.render("register");
    },
    login: function (req, res) {
        res.render("login");
    },
    profile(req, res) {
        res.render("profile");
    }
}

module.exports = controller;
