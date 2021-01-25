const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello Ubuntu from Node"));

app.get("/about", (req, res) => res.send("About page"));

app.listen(8080, () => console.log("app is running on port 8080"));