
require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {

    res.send(process.env.HELLO);
});

app.get("/user", (req, res) => {

    res.send({name: process.env.NAME, age: process.env.AGE});
});

app.listen(3000);0);"# 4course_labs"  app.test.js package.json package-lock.json server.js start.js sum.js sum.test.js node_modules re.env
