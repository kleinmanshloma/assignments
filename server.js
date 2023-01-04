const path = require("path");
const Hebcal = require("hebcal");
var express = require("express");
const { dirname } = require("path");

var app = express();

const PORT = 8080;

console.log(__dirname + "./publick");
const publickDIrectory = path.join(__dirname, "./publick");
app.use(express.static(publickDIrectory));

/* app.use(express.static("publick")); */
const today = new Date();
var year = new Hebcal();
/* const revrse = `.split("").reverse().join("")`; */
const hd1 = new Hebcal.HDate(today).toString("h");
console.log(hd1);

app.get("/index.ht", (req, res) => {
  console.log(req.query);
  res.send("");
});

app.get("/query", (req, res) => {
  console.log(req.query);
  res.send(`${hd1}`);
});

app.listen(PORT, () => {
  console.log(`the server is listening on port: ${PORT}`);
});
