import { Sequelize } from 'sequelize';

const database = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    database:'data-kafka-service',
    password: 'admin123',
    port: 3306
});

 
export default database;