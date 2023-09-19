require("../bootstrap");

module.exports = {
  dialect: process.env.DB_DIALECT || "mariadb",
  dialectOptions: {
    // Your mariadb options here
    // connectTimeout: 1000
  },
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT || 5432,
  logging: false
};
