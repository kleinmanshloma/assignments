const path = require("path");
const Hebcal = require("hebcal");
var express = require("express");

var app = express();

const PORT = 8080;

console.log(__dirname + "./publick");
const publickDIrectory = path.join(__dirname, "./publick");
app.use(express.static(publickDIrectory));

app.use(express.static("publick"));

var year = new Hebcal();

/* const revrse = `.split("").reverse().join("")`; */

// still needs aprovement
app.get("/todaysdateconvert", (req, res) => {
  console.log(req.query.date);
  const dateConvert = req.query.date;
  const hd1 = new Hebcal.HDate(dateConvert).toString("h");
  console.log(hd1);
  res.send(`${hd1}`);
});

app.get("/todaysdate", (req, res) => {
  const today = new Date();
  const todayDate = new Hebcal.HDate(today).toString("h");
  console.log(todayDate);
  /*   console.log(req.query); */
  res.send(`${todayDate}`);
});

app.listen(PORT, () => {
  console.log(`the server is listening on port: ${PORT}`);
});
