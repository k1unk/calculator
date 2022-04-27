module.exports = app => {
    const login = require("../controllers/loginController.js");

    let router = require("express").Router();

    router.post("/login", login.login);
    router.post("/logout", login.logout);

    app.use("/api/login", router);
};
