const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','postgres','Takeo1975',{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;