
function showDealer() {
  var dealer = document.getElementById("dealer");
  var dealerbx = document.getElementById("dealer-box");
  if (dealer.checked == true) {
    dealerbx.style.display = "block";
  } else {
    dealerbx.style.display = "none";
  }
};
function showFactory() {
  var factory = document.getElementById("factory");
  var factorybx = document.getElementById("factory-box");
  if (factory.checked == true) {
    factorybx.style.display = "block";
  } else {
    factorybx.style.display = "none";
  }
};

const oitemselected = document.querySelector(".oitem-selected");
const oitemContainer = document.querySelector(".oitem-container");

const oitemList = document.querySelectorAll(".oitem-option");

oitemselected.addEventListener("click", () => {
  oitemContainer.classList.toggle("active");
});

oitemList.forEach(o => {
  o.addEventListener("click", () => {
    oitemselected.innerHTML = o.querySelector("label").innerHTML;
    oitemContainer.classList.remove("active");
  });
});
const vdealerselected = document.querySelector(".vdealer-selected");
const vdealerContainer = document.querySelector(".vdealer-container");

const vdealerList = document.querySelectorAll(".vdealer-option");

vdealerselected.addEventListener("click", () => {
  vdealerContainer.classList.toggle("active");
});

vdealerList.forEach(o => {
  o.addEventListener("click", () => {
    vdealerselected.innerHTML = o.querySelector("label").innerHTML;
    vdealerContainer.classList.remove("active");
  });
});
const vfactoryselected = document.querySelector(".vfactory-selected");
const vfactoryContainer = document.querySelector(".vfactory-container");

const vfactoryList = document.querySelectorAll(".vfactory-option");

vfactoryselected.addEventListener("click", () => {
  vfactoryContainer.classList.toggle("active");
});

vfactoryList.forEach(o => {
  o.addEventListener("click", () => {
    vfactoryselected.innerHTML = o.querySelector("label").innerHTML;
    vfactoryContainer.classList.remove("active");
  });
});

