const express = require("express");
const mysql = require("mysql2/promise");

const { dbconfig } = require("../../config");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const response = await con.execute("SELECT * FROM member;");
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

router.get("/members/:id?", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (Number.isInteger(id) || !req.params.id) {
      const con = await mysql.createConnection(dbconfig);
      const selectAll = "SELECT * FROM member";
      const selectOne = `${selectAll} WHERE id=${id}`;
      const response = await con.execute(id ? selectOne : selectAll);
      res.send(response[0]);
      await con.end();
    } else {
      res.status(400).send([]);
    }
  } catch (e) {
    if (e.code === "ER_ACCESS_DENIED_ERROR") {
      res.status(401).send("Unauthorized");
    }

    console.log(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const member = req.body;
    if (member.name && member.email && member.age) {
      const con = await mysql.createConnection(dbconfig);
      const response = await con.execute(
        `INSERT INTO member (name, email, age) values (${con.escape(
          member.name
        )}, ${con.escape(member.email)}, ${con.escape(member.age)}

          )`
      );
      console.log(response);
      res.send(response[0]);
      await con.end();
    } else {
      res.status(400).send("Bad syntax");
    }
  } catch (e) {
    console.log(e);
  }
});

router.delete("/members/:id", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const response = await con.execute(
      `DELETE FROM member WHERE id=${req.params.id};`
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
