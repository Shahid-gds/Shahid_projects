function factoryClick() {
  var partyarrow = document.getElementById("factoryarrow");
  var partycontent = document.getElementById("factory-content");
  if (partyarrow.checked == true) {
    partycontent.style.display = "block";
  } else {
    partycontent.style.display = "none";
  }
};