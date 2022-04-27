const db = require("../util/database");
const Users = db.users;
const bcrypt = require("bcryptjs")

exports.create = async (req, res) => {
    const {login, password, favouriteOperation} = req.body;
    if (login == null || password == null) {
        return res.status(400).json({"error": `missing login or password`})
    }
    const candidate = await Users.findOne({where: {login}});
    if (candidate) {
        return res.status(400).json({message: `User with login ${login} already exist`})
    }
    const hashPassword = await bcrypt.hash(password, 8)

    const user = {
        login: login,
        password: hashPassword,
        accessLevel: "user",
        favouriteOperation: favouriteOperation
    };

    Users.create(user)
        .then(data => {
            res.json({
                id: data.id,
                login: data.login,
                accessLevel: data.accessLevel,
                favouriteOperation: data.favouriteOperation,
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while creating"
            });
        });
};

exports.findAll = async (req, res) => {
    try {
        await Users.findAll({
            attributes: {
                exclude: ['password']
            }
        })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message || `Some error occurred while finding ${model.name}`
                });
            });

    } catch (err) {
        res.status(500).send({message: err.message})
    }
};

exports.find = (req, res) => {
    const id = req.params.id;

    Users.findByPk(id)
        .then(data => {
            if (data) {
                res.json({
                    id: data.id,
                    login: data.login,
                    accessLevel: data.accessLevel,
                    favouriteOperation: data.favouriteOperation,
                });
            } else {
                res.status(400).json({message: `no Users with id=${id}`});
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || `Error finding Users with id=${id}`
            });
        });
};

