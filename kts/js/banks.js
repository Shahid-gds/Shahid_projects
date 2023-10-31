const banksselected = document.querySelector(".banks-selected");
const banksoptionsContainer = document.querySelector(".banks-container");

const banksoptionsList = document.querySelectorAll(".banks-option");

banksselected.addEventListener("click", () => {
  banksoptionsContainer.classList.toggle("active");
});

banksoptionsList.forEach((o) => {
  o.addEventListener("click", () => {
    banksselected.innerHTML = o.querySelector("ul li").innerHTML;
    banksoptionsContainer.classList.remove("active");
  });
});
//This is for Adjust Balance
const adjustselected = document.querySelector(".adjust-selected");
const adjustoptionsContainer = document.querySelector(".adjust-container");

const adjustoptionsList = document.querySelectorAll(".adjust-option");

adjustselected.addEventListener("click", () => {
  adjustoptionsContainer.classList.toggle("active");
});

adjustoptionsList.forEach((o) => {
  o.addEventListener("click", () => {
    adjustselected.innerHTML = o.querySelector("ul li").innerHTML;
    adjustoptionsContainer.classList.remove("active");
  });
});

const fromselected = document.querySelector(".from-selected");
const fromoptionsContainer = document.querySelector(".from-container");

const fromoptionsList = document.querySelectorAll(".from-option");

fromselected.addEventListener("click", () => {
  fromoptionsContainer.classList.toggle("active");
});

fromoptionsList.forEach((o) => {
  o.addEventListener("click", () => {
    fromselected.innerHTML = o.querySelector("label").innerHTML;
    fromoptionsContainer.classList.remove("active");
  });
});
const toselected = document.querySelector(".to-selected");
const tooptionsContainer = document.querySelector(".to-container");

const tooptionsList = document.querySelectorAll(".to-option");

toselected.addEventListener("click", () => {
  tooptionsContainer.classList.toggle("active");
});

tooptionsList.forEach((o) => {
  o.addEventListener("click", () => {
    toselected.innerHTML = o.querySelector("label").innerHTML;
    tooptionsContainer.classList.remove("active");
  });
});

//this is for cheque deposit
const chequeselected = document.querySelector(".cheque-selected");
const chequeoptionsContainer = document.querySelector(".cheque-container");

const chequeoptionsList = document.querySelectorAll(".cheque-option");

chequeselected.addEventListener("click", () => {
  chequeoptionsContainer.classList.toggle("active");
});

chequeoptionsList.forEach((o) => {
  o.addEventListener("click", () => {
    chequeselected.innerHTML = o.querySelector("label").innerHTML;
    chequeoptionsContainer.classList.remove("active");
  });
});
const chequetoselected = document.querySelector(".chequeto-selected");
const chequetooptionsContainer = document.querySelector(".chequeto-container");

const chequetooptionsList = document.querySelectorAll(".chequeto-option");

chequetoselected.addEventListener("click", () => {
  chequetooptionsContainer.classList.toggle("active");
});

chequetooptionsList.forEach((o) => {
  o.addEventListener("click", () => {
    chequetoselected.innerHTML = o.querySelector("label").innerHTML;
    chequetooptionsContainer.classList.remove("active");
  });
});
//this is for cash Withdraw
const cashWithdrawselected = document.querySelector(".cashWithdraw-selected");
const cashWithdrawoptionsContainer = document.querySelector(
  ".cashWithdraw-container"
);

const cashWithdrawoptionsList = document.querySelectorAll(
  ".cashWithdraw-option"
);

cashWithdrawselected.addEventListener("click", () => {
  cashWithdrawoptionsContainer.classList.toggle("active");
});

cashWithdrawoptionsList.forEach((o) => {
  o.addEventListener("click", () => {
    cashWithdrawselected.innerHTML = o.querySelector("label").innerHTML;
    cashWithdrawoptionsContainer.classList.remove("active");
  });
});
const cashWithdrawtoselected = document.querySelector(
  ".cashWithdrawto-selected"
);
const cashWithdrawtooptionsContainer = document.querySelector(
  ".cashWithdrawto-container"
);

const cashWithdrawtooptionsList = document.querySelectorAll(
  ".cashWithdrawto-option"
);

cashWithdrawtoselected.addEventListener("click", () => {
  cashWithdrawtooptionsContainer.classList.toggle("active");
});

cashWithdrawtooptionsList.forEach((o) => {
  o.addEventListener("click", () => {
    cashWithdrawtoselected.innerHTML = o.querySelector("label").innerHTML;
    cashWithdrawtooptionsContainer.classList.remove("active");
  });
});

//This is for current date formate

var date = new Date();
var currentDate = date.toISOString().slice(0, 10);
var currentTime = date.getHours() + ":" + date.getMinutes();

document.getElementById("deposit-today").value = currentDate;

// this is for cheque deposit current date formate
var date = new Date();
var currentDate = date.toISOString().slice(0, 10);
var currentTime = date.getHours() + ":" + date.getMinutes();

document.getElementById("cdeposit-today").value = currentDate;

// this is for cash withdraw current date formate
var date = new Date();
var currentDate = date.toISOString().slice(0, 10);
var currentTime = date.getHours() + ":" + date.getMinutes();

document.getElementById("cwdeposit-today").value = currentDate;
