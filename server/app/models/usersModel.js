module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
        "users-calc",
        {
            login: {
                type: Sequelize.STRING,
                notNull: true
            },
            password: {
                type: Sequelize.STRING,
                notNull: true
            },
            accessLevel: {
                type: Sequelize.STRING,
            },
            favouriteOperation: {
                type: Sequelize.STRING,
            }
        },
        {
            timestamps: false
        });
};
