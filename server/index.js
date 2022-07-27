const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyparser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// DB connection
const db = mysql.createConnection({
  host: "database-1.ci4qghad4q40.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database: "testing",
  port: 3306,
});

db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("database connection success");
});

// displaying the data from DB
// app.get("/products", function (req, res) {
//   const sqlInsert = "SELECT * FROM testing_table";
//   db.query(sqlInsert, (err, result) => {
//     if (err) {
//       throw error;
//     } else {
//       res.send(result);
//     }
//   });
// });

app.get('/products', (req, res) => {
  db.query('SELECT * FROM testing_table', (err, result) => {
    if (err) {
      throw error;
    } else {
      res.send(result);
    }
  })
})

// port
app.listen(3001, () => {
  console.log("listening on 3001");
});
