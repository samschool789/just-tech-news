const Sequelize = require('sequelize');

require('dotenv').config();



//creates connection to our database, pass in your MySQL information for user and pass
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;