let dateToday = document.getElementById("date-today");


let today = new Date();
let day = `${today.getDate() < 10 ? "0" : ""}
${today.getDate()}`;

//Months are counted from 0

let month = `${(today.getMonth() + 1) < 10 ? "0"
: ""}${today.getMonth() + 1}`;
let year = today.getFullYear();

dateToday.textContent = `${day}/${month}/${year}`



function partyClick() {
    var partyarrow = document.getElementById("partyarrow");
    var partycontent = document.getElementById("party-content");
    if (partyarrow.checked == true){
      partycontent.style.display = "block";
    } else {
       partycontent.style.display = "none";
    }
  };
function itemClick() {
    var itemarrow = document.getElementById("itemarrow");
    var itemcontent = document.getElementById("item-content");
    if (itemarrow.checked == true){
      itemcontent.style.display = "block";
    } else {
       itemcontent.style.display = "none";
    }
  };

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