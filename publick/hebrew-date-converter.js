//  SET DEFUALT VALUE OF DATE
document.getElementById("date").value = new Date()
  .toISOString()
  .substring(0, 10);

const todaysDate = `${new Date().toISOString().substring(0, 10)}`;

document.getElementById("today's-date").textContent = todaysDate;

const todaysDateHebrew = `some converted date`;

document.getElementById("today's-date-hebrew").textContent = todaysDateHebrew;
