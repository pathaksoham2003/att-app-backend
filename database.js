const { Client } = require("pg");
require("dotenv").config();
const client = new Client(process.env.DATABASE_URL);
/*
CREATE TABLE ATT_EMPLOYEE (
    employee_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    department VARCHAR(255),
    picture TEXT,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);
*/
/*
CREATE TABLE ATT_LOCATION (
      location_id SERIAL PRIMARY KEY,
      latitude DOUBLE PRECISION NOT NULL,
      longitude DOUBLE PRECISION NOT NULL,
      place TEXT NOT NULL,
      range INT NOT NULL
  );
*/
(async () => {
    await client.connect();
  try {
    const results = await client.query(`SELECT * FROM ATT_LOCATION
    `);
    console.log(results.rows);
    console.log("Database Connection");
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    // client.end();
    // console.log("DISCONNECTED DATABASE")
  }
})();
module.exports = client;