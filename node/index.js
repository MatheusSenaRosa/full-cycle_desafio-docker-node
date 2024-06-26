const express = require("express");
const mysql = require("mysql2/promise");

const app = express();

const connectDB = async () => {
  const connection = await mysql.createConnection({
    host: "mysql",
    database: "desafio",
    user: "root",
    password: "root",
  });
  return connection;
};

app.get("/", async (_, res) => {
  const connection = await connectDB();

  const [tables] = await connection.query("SHOW TABLES");

  if (!tables?.length) {
    await connection.query(
      `CREATE TABLE people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))`
    );
  }

  await connection.query(`INSERT INTO people(name) VALUES ('MATHEUS')`);
  const selectSql = `SELECT * FROM people`;
  const [rows] = await connection.query(selectSql);

  await connection.end();

  res.send(`
    <main>
      <h1>Full Cycle Rocks!</h1>
      <ul>
        ${rows
          .map((item, index) => `<li>${item.name} - ${index + 1}</li>`)
          .join("")}
      </ul>
    </main>
  `);
});

app.listen(3000, () => {
  console.log(`Rodando na porta 3000`);
});
