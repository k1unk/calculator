module.exports = app => {
    const auth = require("../controllers/authController.js");

    let router = require("express").Router();

    router.get("/userInfo", auth.userInfo);

    app.use("/api/auth", router);
};
