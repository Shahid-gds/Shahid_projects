// preloader
	
setTimeout(function () {
  $('.loader_bg').fadeToggle();
}, 500);

// this is for pagination section
var tbody = document.querySelector("tbody");
var pageUl = document.querySelector(".pagination");
var itemShow = document.querySelector("#itemperpage");
var tr = tbody.querySelectorAll("tr");
var emptyBox = [];
var index = 1;
var itemPerPage = 7;

for (let i = 0; i < tr.length; i++) {
  emptyBox.push(tr[i]);
}

itemShow.onchange = giveTrPerPage;
function giveTrPerPage() {
  itemPerPage = Number(this.value);
  // console.log(itemPerPage);
  displayPage(itemPerPage);
  pageGenerator(itemPerPage);
  getpagElement(itemPerPage);
}

function displayPage(limit) {
  tbody.innerHTML = "";
  for (let i = 0; i < limit; i++) {
    tbody.appendChild(emptyBox[i]);
  }
  const pageNum = pageUl.querySelectorAll(".list");
  pageNum.forEach((n) => n.remove());
}
displayPage(itemPerPage);

function pageGenerator(getem) {
  const num_of_tr = emptyBox.length;
  if (num_of_tr <= getem) {
    pageUl.style.display = "none";
  } else {
    pageUl.style.display = "flex";
    const num_Of_Page = Math.ceil(num_of_tr / getem);
    for (i = 1; i <= num_Of_Page; i++) {
      const li = document.createElement("li");
      li.className = "list";
      const a = document.createElement("a");
      a.href = "##";
      a.innerText = i;
      a.setAttribute("data-page", i);
      li.appendChild(a);
      pageUl.insertBefore(li, pageUl.querySelector(".next"));
    }
  }
}
pageGenerator(itemPerPage);
let pageLink = pageUl.querySelectorAll("a");
let lastPage = pageLink.length - 2;

function pageRunner(page, items, lastPage, active) {
  for (button of page) {
    button.onclick = (e) => {
      const page_num = e.target.getAttribute("data-page");
      const page_mover = e.target.getAttribute("id");
      if (page_num != null) {
        index = page_num;
      } else {
        if (page_mover === "next") {
          index++;
          if (index >= lastPage) {
            index = lastPage;
          }
        } else {
          index--;
          if (index <= 1) {
            index = 1;
          }
        }
      }
      pageMaker(index, items, active);
    };
  }
}
var pageLi = pageUl.querySelectorAll(".list");
pageLi[0].classList.add("active");
pageRunner(pageLink, itemPerPage, lastPage, pageLi);

function getpagElement(val) {
  let pagelink = pageUl.querySelectorAll("a");
  let lastpage = pagelink.length - 2;
  let pageli = pageUl.querySelectorAll(".list");
  pageli[0].classList.add("active");
  pageRunner(pagelink, val, lastpage, pageli);
}

function pageMaker(index, item_per_page, activePage) {
  const start = item_per_page * index;
  const end = start + item_per_page;
  const current_page = emptyBox.slice(
    start - item_per_page,
    end - item_per_page
  );
  tbody.innerHTML = "";
  for (let j = 0; j < current_page.length; j++) {
    let item = current_page[j];
    tbody.appendChild(item);
  }
  Array.from(activePage).forEach((e) => {
    e.classList.remove("active");
  });
  activePage[index - 1].classList.add("active");
}

function checkMe() {
  var checkBox = document.getElementById("chck1");
  var text = document.getElementById("check");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function editMe() {
  var checkBox = document.getElementById("chck2");
  var text = document.getElementById("check2");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function searchMe() {
  var searchBox = document.getElementById("searcharrow");
  var searchtext = document.getElementById("search-content");
  if (searchBox.checked == false) {
    searchtext.style.display = "block";
  } else {
    searchtext.style.display = "none";
  }
}

function IA() {
  var ab = document.getElementById("itemA");
  var text = document.getElementById("itema");
  if (ab.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function IA() {
  var ab = document.getElementById("itemA");
  var text = document.getElementById("itema");
  var text1 = document.getElementById("text1");
  if (ab.checked == true) {
    text.style.display = "block";
    text1.style.display = "block";
  } else {
    text.style.display = "none";
    text1.style.display = "none";
  }
}
function IB() {
  var ac = document.getElementById("itemB");
  var text = document.getElementById("itemb");
  var text2 = document.getElementById("text2");
  if (ac.checked == true) {
    text.style.display = "block";
    text2.style.display = "block";
  } else {
    text.style.display = "none";
    text2.style.display = "none";
  }
}



