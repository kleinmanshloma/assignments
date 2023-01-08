//  SET DEFUALT VALUE OF DATE
document.getElementById("date").value = new Date()
  .toISOString()
  .substring(0, 10);

const todaysDate = `${new Date().toISOString().substring(0, 10)}`;

document.getElementById("today's-date").textContent = todaysDate;

/* let date = "";
fetch("http://localhost:8080/todaysdate")
  .then((response) => {
    response.json();
    console.log(response);
  })
  .then((data) => {
    const todaysDateHebrew = `data`;
    document.getElementById("today's-date-hebrew").textContent =
      todaysDateHebrew;
  }); */

const todaysDateHebrew = `some converted date`;

document.getElementById("today's-date-hebrew").textContent = todaysDateHebrew;

/**
 *
 *
 *
 *
 */
/* const loadText = (e) => {
  e.preventDefault();
  console.log("btn clicked");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "server.js", true);
  xhr.onload = () => {
    if (this.status == 200) {
      console.log(this.Response);
    }
  };

  xhr.send();
}; */
/* document.getElementById("btn-convert").addEventListener("click", loadText); */
