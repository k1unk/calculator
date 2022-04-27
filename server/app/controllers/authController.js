const auth = require("./auth")

exports.userInfo = async (req, res) => {
    auth.checkAuth(req, res).then(r => {
        res.json({
            token: r.token,
            user: {
                id: r.user.id,
                login: r.user.login,
                accessLevel: r.user.accessLevel,
                favouriteOperation: r.user.favouriteOperation,
            }

        })
    })
};
