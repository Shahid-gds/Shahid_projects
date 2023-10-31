const dateselected = document.querySelector(".date-selected");
const dateContainer = document.querySelector(".date-container");

const dateList = document.querySelectorAll(".date-option");

dateselected.addEventListener("click", () => {
  dateContainer.classList.toggle("active");
});

dateList.forEach(o => {
  o.addEventListener("click", () => {
    dateselected.innerHTML = o.querySelector("label").innerHTML;
    dateContainer.classList.remove("active");
  });
});
// this is for month
const monthselected = document.querySelector(".month-selected");
const monthContainer = document.querySelector(".month-container");

const monthList = document.querySelectorAll(".month-option");

monthselected.addEventListener("click", () => {
monthContainer.classList.toggle("active");
});

monthList.forEach(o => {
  o.addEventListener("click", () => {
    monthselected.innerHTML = o.querySelector("label").innerHTML;
    monthContainer.classList.remove("active");
  });
});
// this is for year
const yearselected = document.querySelector(".year-selected");
const yearContainer = document.querySelector(".year-container");

const yearList = document.querySelectorAll(".year-option");

yearselected.addEventListener("click", () => {
yearContainer.classList.toggle("active");
});

yearList.forEach(o => {
  o.addEventListener("click", () => {
    yearselected.innerHTML = o.querySelector("label").innerHTML;
    yearContainer.classList.remove("active");
  });
});

  // the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox").on('click', function() {
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