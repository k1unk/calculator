const db = require("../util/database");
const Users = db.users
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config/config")

const checkLoginAndPassword = async (req, res, login, password) => {
    try {
        if (login == null || password == null) {
            res.status(400).json({"message": `missing authorization`})
            return false
        }
        const user = await Users.findOne({where: {login}});
        if (!user) {
            res.status(400).json({message: `User with login ${login} doesn't exist`})
            return false
        }

        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid) {
            res.status(400).json({message: "Invalid password"})
            return false
        }

        return user

    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error"
        });
        return false
    }

}

const checkAuth = async (req, res) => {
    try {
        if (!req.headers.authorization) {
            res.status(400).json({"message": `missing authorization`})
            return false
        }
        const token = req.headers.authorization.substring(7)
        let decoded = null;
        try {
            decoded = jwt.verify(token, config.secretKey);
        } catch (e) {}
        if (!decoded) {
            res.status(400).json({"message": `jwt expired`})
            return
        }
        const login = decoded.login;
        const user = await Users.findOne({where: {login}});

        return {token, user}

    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error"
        });
        return false
    }

}

module.exports = {checkAuth, checkLoginAndPassword}
