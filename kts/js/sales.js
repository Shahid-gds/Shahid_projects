//This is for current date formate

var date = new Date();
var currentDate = date.toISOString().slice(0, 10);
var currentTime = date.getHours() + ':' + date.getMinutes();

document.getElementById('date-today').value = currentDate;

// This is for Checkboxes
function partyClick() {
  var partyarrow = document.getElementById("partyarrow");
  var partycontent = document.getElementById("party-content");
  if (partyarrow.checked == true) {
    partycontent.style.display = "block";
  } else {
    partycontent.style.display = "none";
  }
};
function itemClick() {
  var itemarrow = document.getElementById("itemarrow");
  var itemcontent = document.getElementById("item-content");
  if (itemarrow.checked == true) {
    itemcontent.style.display = "block";
  } else {
    itemcontent.style.display = "none";
  }
};


// the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox").on('click', function () {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
const itemselected = document.querySelector(".item-selected");
const itemContainer = document.querySelector(".item-container");

const itemList = document.querySelectorAll(".item-option");

itemselected.addEventListener("click", () => {
  itemContainer.classList.toggle("active");
});

itemList.forEach(o => {
  o.addEventListener("click", () => {
    itemselected.innerHTML = o.querySelector("label").innerHTML;
    itemContainer.classList.remove("active");
  });
});

