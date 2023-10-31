const pitemselected = document.querySelector(".pitem-selected");
const pitemContainer = document.querySelector(".pitem-container");

const pitemList = document.querySelectorAll(".pitem-option");

pitemselected.addEventListener("click", () => {
  pitemContainer.classList.toggle("active");
});

pitemList.forEach(o => {
  o.addEventListener("click", () => {
    pitemselected.innerHTML = o.querySelector("label").innerHTML;
    pitemContainer.classList.remove("active");
  });
});