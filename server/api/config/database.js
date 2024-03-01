const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load environment variables from .env file
const pool = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);
async function initializeSequelize() {
  try {
    await pool.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );

    return pool;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
}

async function connectToDB() {
  try {
    const sequelize = await initializeSequelize();
    return sequelize; // Return the Sequelize instance
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

module.exports = {
  connectToDB,
  pool,
};
