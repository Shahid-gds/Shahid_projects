//This is for current date formate

var date = new Date();
var currentDate = date.toISOString().slice(0, 10);
var currentTime = date.getHours() + ':' + date.getMinutes();

document.getElementById('exp-today').value = currentDate;