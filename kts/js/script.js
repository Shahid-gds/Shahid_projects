// preloader
	
setTimeout(function () {
  $('.loader_bg').fadeToggle();
}, 500);

let circularProgress = document.querySelector(".cricular-progress");
let progressStartValue = 0,
  progressEndValue = 100,
  speed = 50;

let progress = setInterval(() => {
  progressStartValue++;

  progressEndValue.textcontent = `${progressStartValue}%`
  circularProgress.style.background = `conic-gradient(#003566 ${progressStartValue * 3.6}deg, #F5F5F5 0deg)`

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawCharts);
function drawCharts() {

  // BEGIN BAR CHART
  /*
  // create zero data so the bars will 'grow'
  var barZeroData = google.visualization.arrayToDataTable([
    ['Day', 'Page Views', 'Unique Views'],
    ['Sun',  0,      0],
    ['Mon',  0,      0],
    ['Tue',  0,      0],
    ['Wed',  0,      0],
    ['Thu',  0,      0],
    ['Fri',  0,      0],
    ['Sat',  0,      0]
  ]);
  */
  // actual bar chart data
  var barData = google.visualization.arrayToDataTable([
    ['Day', 'Sale', 'Purchase'],
    ['11/11/2022', 1050, 600],
    ['11/11/2022', 1370, 910],
    ['11/11/2022', 660, 400],
    ['11/11/2022', 1030, 540],
    ['11/11/2022', 1000, 480],
    ['11/11/2022', 1170, 960],
    ['11/11/2022', 660, 320]
  ]);
  // set bar chart options
  var barOptions = {
    focusTarget: 'category',
    backgroundColor: 'transparent',
    colors: ['#4791FF', '#003566'],
    fontName: 'Open Sans',
    chartArea: {
      left: 50,
      top: 10,
      width: '100%',
      height: '70%'
    },
    bar: {
      groupWidth: '80%'
    },
    hAxis: {
      textStyle: {
        fontSize: 11
      }
    },
    vAxis: {
      minValue: 0,
      maxValue: 1500,
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
        count: 4
      },
      textStyle: {
        fontSize: 11
      }
    },
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 12
      }
    },
    animation: {
      duration: 1200,
      easing: 'out',
      startup: true
    }
  };
  // draw bar chart twice so it animates
  var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
  //barChart.draw(barZeroData, barOptions);
  barChart.draw(barData, barOptions);

  // BEGIN LINE GRAPH

  function randomNumber(base, step) {
    return Math.floor((Math.random() * step) + base);
  }
  function createData(year, start1, start2, step, offset) {
    var ar = [];
    for (var i = 0; i < 12; i++) {
      ar.push([new Date(year, i), randomNumber(start1, step) + offset, randomNumber(start2, step) + offset]);
    }
    return ar;
  }
  var randomLineData = [
    ['Year', 'Sale', 'Purchase']
  ];
  for (var x = 0; x < 7; x++) {
    var newYear = createData(2007 + x, 10000, 5000, 4000, 800 * Math.pow(x, 2));
    for (var n = 0; n < 12; n++) {
      randomLineData.push(newYear.shift());
    }
  }
  var lineData = google.visualization.arrayToDataTable(randomLineData);

  /*
  var animLineData = [
    ['Year', 'Page Views', 'Unique Views']
  ];
  for (var x = 0; x < 7; x++) {
    var zeroYear = createData(2007+x, 0, 0, 0, 0);
    for (var n = 0; n < 12; n++) {
      animLineData.push(zeroYear.shift());
    }
  }
  var zeroLineData = google.visualization.arrayToDataTable(animLineData);
  */

  var lineOptions = {
    backgroundColor: 'transparent',
    colors: ['cornflowerblue', 'tomato'],
    fontName: 'Open Sans',
    focusTarget: 'category',
    chartArea: {
      left: 50,
      top: 10,
      width: '100%',
      height: '70%'
    },
    hAxis: {
      //showTextEvery: 12,
      textStyle: {
        fontSize: 11
      },
      baselineColor: 'transparent',
      gridlines: {
        color: 'transparent'
      }
    },
    vAxis: {
      minValue: 0,
      maxValue: 50000,
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
        count: 4
      },
      textStyle: {
        fontSize: 11
      }
    },
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 12
      }
    },
    animation: {
      duration: 1200,
      easing: 'out',
      startup: true
    }
  };

  var lineChart = new google.visualization.LineChart(document.getElementById('line-chart'));
  //lineChart.draw(zeroLineData, lineOptions);
  lineChart.draw(lineData, lineOptions);

}
// this is for pagination section
var tbody = document.querySelector("tbody");
var pageUl = document.querySelector(".pagination");
var itemShow = document.querySelector("#itemperpage");
var tr = tbody.querySelectorAll("tr");
var emptyBox = [];
var index = 1;
var itemPerPage = 3;

for (let i = 0; i < tr.length; i++) { emptyBox.push(tr[i]); }

itemShow.onchange = giveTrPerPage;
function giveTrPerPage() {
  itemPerPage = Number(this.value);
  // console.log(itemPerPage);
  displayPage(itemPerPage);
  pageGenerator(itemPerPage);
  getpagElement(itemPerPage);
}

function displayPage(limit) {
  tbody.innerHTML = '';
  for (let i = 0; i < limit; i++) {
    tbody.appendChild(emptyBox[i]);
  }
  const pageNum = pageUl.querySelectorAll('.list');
  pageNum.forEach(n => n.remove());
}
displayPage(itemPerPage);

function pageGenerator(getem) {
  const num_of_tr = emptyBox.length;
  if (num_of_tr <= getem) {
    pageUl.style.display = 'none';
  } else {
    pageUl.style.display = 'flex';
    const num_Of_Page = Math.ceil(num_of_tr / getem);
    for (i = 1; i <= num_Of_Page; i++) {
      const li = document.createElement('li'); li.className = 'list';
      const a = document.createElement('a'); a.href = '##'; a.innerText = i;
      a.setAttribute('data-page', i);
      li.appendChild(a);
      pageUl.insertBefore(li, pageUl.querySelector('.next'));
    }
  }
}
pageGenerator(itemPerPage);
let pageLink = pageUl.querySelectorAll("a");
let lastPage = pageLink.length - 2;

function pageRunner(page, items, lastPage, active) {
  for (button of page) {
    button.onclick = e => {
      const page_num = e.target.getAttribute('data-page');
      const page_mover = e.target.getAttribute('id');
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
    }
  }

}
var pageLi = pageUl.querySelectorAll('.list'); pageLi[0].classList.add("active");
pageRunner(pageLink, itemPerPage, lastPage, pageLi);

function getpagElement(val) {
  let pagelink = pageUl.querySelectorAll("a");
  let lastpage = pagelink.length - 2;
  let pageli = pageUl.querySelectorAll('.list');
  pageli[0].classList.add("active");
  pageRunner(pagelink, val, lastpage, pageli);

}



function pageMaker(index, item_per_page, activePage) {
  const start = item_per_page * index;
  const end = start + item_per_page;
  const current_page = emptyBox.slice((start - item_per_page), (end - item_per_page));
  tbody.innerHTML = "";
  for (let j = 0; j < current_page.length; j++) {
    let item = current_page[j];
    tbody.appendChild(item);
  }
  Array.from(activePage).forEach((e) => { e.classList.remove("active"); });
  activePage[index - 1].classList.add("active");
}


// search content 
var search = document.getElementById("search");
search.onkeyup = e => {
  const text = e.target.value;
  for (let i = 0; i < tr.length; i++) {
    const matchText = tr[i].querySelectorAll("td")[2].innerText;
    if (matchText.toLowerCase().indexOf(text.toLowerCase()) > -1) {
      tr[i].style.visibility = "visible";
    } else {
      tr[i].style.visibility = "collapse";
    }
  }
}


