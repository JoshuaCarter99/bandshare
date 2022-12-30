const Sequelize = require('sequelize');
require('dotenv').config();

// cloudinary.config({
//   cloud_name: 'dlvmcylti',
//   api_key: '449562749791661',
//   api_secret: '10dV9KwAU9TLmizNrE9bv3ekBTk',
// });

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;
