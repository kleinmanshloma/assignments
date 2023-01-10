const path = require("path");
const Hebcal = require("hebcal");
var express = require("express");

var app = express();

const PORT = 8080;

console.log(__dirname + "../publick");
const publickDIrectory = path.join(__dirname, "./publick");
app.use(express.static(publickDIrectory));

app.use(express.json());
app.use(express.urlencoded());

// Setting EJS as templating engine
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

const today = new Date();
app.get("/todaysdate", (req, res) => {
  const day = `${today
    .getDate()
    .toLocaleString("en-US", { minimumIntegerDigits: 2 })}/${(
    today.getMonth() + 1
  ).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  })}/${today.getFullYear()}`;
  const todayDate = new Hebcal.HDate(today).toString("h");
  console.log(day);

  const search = req.query.date;
  console.log(search);
  let gregDate = new Date(search);
  const searchADay = new Hebcal.HDate(gregDate).toString("h");

  if (req.query.date) {
    res.status(200).render("index.ejs", {
      hebrewDate: todayDate,
      todaysDate: day,
      searchDate: searchADay,
    });

    return;
  } else {
    res.status(200).render("index.ejs", {
      hebrewDate: todayDate,
      todaysDate: day,
      searchDate: false,
    });
  }
});

/* app.use(express.static("public")); */

var year = new Hebcal();

/* const revrse = `.split("").reverse().join("")`; */

// still needs aprovement
//     /:date
app.get("/todaysdateconvert", (req, res) => {
  console.log(req.query.date);
  const query = req.query.date;
  /* const dateConvert = req.query.date;
  const hd1 = new Hebcal.HDate(dateConvert).toString("h"); 
  console.log(hd1);*/
  res.send(`${query}`);
});

/* app.get("/todaysdate", (req, res) => {
  const today = new Date();
  const todayDate = new Hebcal.HDate(today).toString("h");
  console.log(todayDate);
  res.send(
    ` <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
  /> <a class="btn btn-dark" href="index.html">back to home page</a><br/>${todayDate}`
  );
}); */
app.post("/contact", function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`the server is listening on port: ${PORT}`);
});
