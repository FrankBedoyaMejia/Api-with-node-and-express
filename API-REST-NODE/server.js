const express = require("express");
const mysql = require("mysql2");
const myconn = require("express-myconnection");

const app = express();

app.set("port", process.env.PORT || 9000);
const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "2373995f",
  database: "library",
};

// middlewares -----------------------------
app.use(myconn(mysql, dbOptions, "single"));

// routes ---------------------------------

app.get("/", (req, res) => {
  res.send("welcome to my api");
});

app.get("/api", (req, res) => {
  res.send("testting api");
});

// server ruuning ------------------------
app.listen(app.get("port"), () => {
  console.log("server runnign on port", app.get("port"));
});
