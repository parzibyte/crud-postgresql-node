const { Pool } = require("pg")
// Coloca aquí tus credenciales
const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "tienda",
  password: "hunter2",
  port: 5432,
});
module.exports = pool;
