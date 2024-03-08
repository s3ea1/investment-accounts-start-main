// Investment Accounts Start Code

// HTML Variables
let outputEl = document.getElementById("output");

// Global Variables
let data = [];

let maxVal = 5000; // max data value
for (let n = 0; n <= 50; n++) {
  data.push(randomInt(0, maxVal + 1));
} // account data

// Draw Array every 20ms
setInterval(drawDataArray, 20);

// Main Menu & Go Button
document.getElementById("go-btn").addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = document.getElementById("menu-select").value;

  // Take action based on menu selection
  if (selection === "deposit") {
    deposit();
  } else if (selection === "withdrawal") {
    withdrawal();
  } else if (selection === "count") {
    countUnder2000();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "attack") {
    hackerAttack();
  }
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function deposit() {
  let account = +prompt("Which account number are you choosing?");
  let deposit = +prompt("How much do you want to deposit?");

  console.log(account, deposit);

  data.splice(account, 1, data[account] + deposit);

  if (maxVal < deposit + data[account]) {
    maxVal += deposit;
    console.log(maxVal);
  }

  outputEl.innerHTML = `Hello account #<strong>${account}</strong>. <p>As suggested, I have deposited <strong>$${deposit}</strong> into your account.</p>`;
}

function withdrawal() {
  let account = +prompt("Which account number are you choosing?");
  let withdrawal = +prompt("How much do you want to withdrawal?");

  console.log(account, withdrawal);

  if (withdrawal > data[account]) {
    outputEl.innerHTML = `Sorry account #<strong>${account}</strong>, but you can't withdrawal that much`;
  } else {
    data.splice(account, 1, data[account] - withdrawal);
    outputEl.innerHTML = `Hello account #<strong>${account}</strong>. <p>As suggested, I have withdrawed <strong>$${withdrawal}</strong> out of your account.</p>`;
  }
}

function countUnder2000() {
  let n = 0;
  for (let account of data) {
    if (account < 2000) {
      n++;
    }
  }

  outputEl.innerHTML = `<strong>${n}</strong> accounts have balance under $2000.`;
}

function generousDonor() {
  for (let account of data) {
    if (account < 2000) {
      account.splice(account, 1, (account += 500));
    }
  }

  outputEl.innerHTML = `Those who have a balance under 2000 will have a lucky day. A generous doner has come to give <strong>$500</strong> to those who are unfortunate enough to be so broke`;
}

function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the data array to apply this theft.
  // Use the outputEl to display the total amount that was stolen.

  outputEl.innerHTML = "Hacker Attack";
}

// ******************************************************
// END OF MENU SELECTION FUNCTIONS
// ******************************************************

// Function to draw current state of data array
function drawDataArray() {
  let outputStr = "";
  for (let val of data) {
    let divHeight = (val / maxVal) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  document.getElementById("container").innerHTML = outputStr;
}
