function ownerClick() {
    var ownerarrow = document.getElementById("ownerarrow");
    var ownercontent = document.getElementById("owner-content");
    if (ownerarrow.checked == true){
      ownercontent.style.display = "block";
    } else {
       ownercontent.style.display = "none";
    }
  };
function dealerboxClick() {
    var dealerboxarrow = document.getElementById("dealerboxarrow");
    var dealerboxcontent = document.getElementById("dealerbox-content");
    if (dealerboxarrow.checked == true){
      dealerboxcontent.style.display = "block";
    } else {
      dealerboxcontent.style.display = "none";
    }
  };
function factoryboxClick() {
    var factoryboxarrow = document.getElementById("factoryboxarrow");
    var factoryboxcontent = document.getElementById("factorybox-content");
    if (factoryboxarrow.checked == true){
      factoryboxcontent.style.display = "block";
    } else {
      factoryboxcontent.style.display = "none";
    }
  };
function showDealer() {
    var dealer = document.getElementById("dealer");
    var dealerbx = document.getElementById("dealer-box");
    if (dealer.checked == true){
      dealerbx.style.display = "block";
    } else {
      dealerbx.style.display = "none";
    }
  };
function showFactory() {
    var factory = document.getElementById("factory");
    var factorybx = document.getElementById("factory-box");
    if (factory.checked == true){
      factorybx.style.display = "block";
    } else {
      factorybx.style.display = "none";
    }
  };