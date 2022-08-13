const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is running");
});

app.use(require("./routes/record"));
app.get("/", (req, res) => {
  res.send("Record is running");
});
// get driver connection
const dbo = require("./db/conn");
app.get("/", (req, res) => {
  res.send("DB is running");
});
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
app.get("/", (req, res) => {
  res.send("Everything is running");
});