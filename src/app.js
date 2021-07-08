const express = require("express");
const app = express();

const index = require("./routes/index");
const tasks = require("./routes/toDoRoutes");

app.use(express.json());
app.use("/", index);
app.use("/contatos", tasks);

module.exports = app;