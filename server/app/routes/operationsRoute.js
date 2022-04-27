module.exports = app => {
    const operations = require("../controllers/operationsController.js");

    let router = require("express").Router();

    router.get("/add", (req, res) => {
        operations.fastOperation(req, res, "+")
    });
    router.get("/sub", (req, res) => {
        operations.fastOperation(req, res, "-")
    });
    router.get("/mult", (req, res) => {
        operations.fastOperation(req, res, "*")
    });
    router.get("/div", (req, res) => {
        operations.fastOperation(req, res, "/")
    });
    router.get("/fact", (req, res) => {
        operations.slowOperation(req, res, "fact")
    });
    router.get("/sqrt", (req, res) => {
        operations.slowOperation(req, res, "sqrt")
    });

    app.use("/api/operations", router);

};
