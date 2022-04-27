module.exports = app => {
    const users = require("../controllers/usersController.js");

    let router = require("express").Router();

    router.post("/", users.create);

   // router.put("/:id", users.update);

    router.get("/:id", users.find);
    router.get("/", users.findAll);

    app.use("/api/users", router);

};
