const jwt = require("jsonwebtoken")
const auth = require("./auth")
const config = require("../config/config")

exports.login = async (req, res) => {
    try {
        const {login, password} = req.body;

        const user = await auth.checkLoginAndPassword(req, res, login, password)
        if (!user) return
        const token = jwt.sign({login: login}, config.secretKey, {expiresIn: "1h"})
        res.json({
            token,
            user: {
                id: user.id,
                login: user.login,
                accessLevel: user.accessLevel,
                favouriteOperation: user.favouriteOperation
            }
        })
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error"
        });
    }
};

exports.logout = async (req, res) => {
    try {
        auth.checkAuth(req, res).then(r => {
            const {token, user} = r
            if (token && user) {
                res.json({
                    token,
                    user: {
                        id: user.id,
                        login: user.login,
                        accessLevel: user.accessLevel,
                        favouriteOperation: user.favouriteOperation
                    },
                    message: "logout successful"
                })
            }
        })
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error"
        });
    }
};
