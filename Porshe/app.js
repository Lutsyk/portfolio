let scroll = 0;
let lap = 0;

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

function hoverThumbs1() {
    document.getElementById("thumbs1").classList.toggle("hoverimg");
  }

function hoverThumbs2() {
    document.getElementById("thumbs2").classList.toggle("hoverimg");
  }

function hoverThumbs3() {
    document.getElementById("thumbs3").classList.toggle("hoverimg");
  }

function scrollRev() {
    if (scroll==0){
      if(lap!==0){
      hoverThumbs3();
      }
      scroll = 1;
      hoverThumbs1();
    } else if (scroll===1){
      scroll = 2;
      hoverThumbs1();
      hoverThumbs2();
    } else{
      hoverThumbs2();
      hoverThumbs3();
      scroll = 0;
      lap = 1;
    }
  }

function scrollFunc() {
  if (scroll===0){
    if(lap!=0){
    hoverThumbs1();
    }
    scroll = 2;
    hoverThumbs3();
  } else if (scroll===2){
    scroll = 1;
    hoverThumbs2();
    hoverThumbs3();
    lap = 1;
  } else{
    hoverThumbs1();
    hoverThumbs2();
    scroll = 0;
    lap = 1;
  }
}

function detailsFunc() {
  document.getElementById("detailsInfo").classList.toggle("visibleDetails");
}

function hideFunc() {
  document.getElementById("section1grow").style.display = "none";
  document.getElementById("section1").style.width = "100%";
  document.getElementById("cardG").style.minWidth = "500px";
  document.getElementById("buttonShow").style.display = "unset";
}

function hideFuncBack() {
  document.getElementById("section1grow").style.display = "unset";
  document.getElementById("section1").style.width = "50%";
  document.getElementById("cardG").style.minWidth = "50%";
  document.getElementById("buttonShow").style.display = "none";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function arrowMobileFunction() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section1grow").style.visibility = "unset";
}


if (document.documentElement.clientWidth < 800) {
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 6){
    counter = 1;
  }
  }, 5000);
}