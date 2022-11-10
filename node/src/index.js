const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();

const { port } = require("./config");
const { members } = require("./routes/v1");

app.use(express.json());
app.use(cors());

app.use("/v1/members", members);

app.all("*", (req, res) => {
  res.status(404).send("Page not found:(");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
