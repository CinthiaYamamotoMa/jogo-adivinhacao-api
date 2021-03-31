module.exports = (sequelize, DataTypes) => {
    const Ranking = sequelize.define('ranking', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        total_time: {
            allowNull: false,
            type: DataTypes.TIME,
        },
        attempts: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        round: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
    }, {
        freezeTableName: true,
    });

    return Ranking;
}