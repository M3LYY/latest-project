//SIDE NAV//

var ham = document.getElementById('ham')

ham.addEventListener('click', openSide)

function openSide(){
  if(document.getElementById('sidebar').style.width = "0"){

    document.getElementById('sidebar').style.width = "220px"
    
    // document.getElementById("body").style.paddingLeft= "220px";
  }
  else if(document.getElementById('sidebar').style.width = "220px"){

    document.getElementById('sidebar').style.width = "0"
    
    document.getElementById("body").style.marginLeft= "0";
  }

}

var sideClose = document.getElementById('close-btn')

sideClose.addEventListener('click', closeSide)

function closeSide(){
  document.getElementById("sidebar").style.width = "0";

  document.getElementById("body").style.marginLeft = "0";
}

//HEADER DISSAPPEAR//
var scroll_ = window.scrollY

function scrollhead(){

  var scrollPos = window.scrollY
  
  if(scroll_ > scrollPos){
    document.getElementById('header').style.top = "0"
  }
  
  else{
    document.getElementById('header').style.top = "-130px"
  }
  
  scroll_ = scrollPos
}

//TOP BUTTON//

var scrollbuttn = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction(), scrollhead()};


function scrollFunction() {
  if (document.documentElement.scrollTop > 100 || document.documentElement.scrollTop > 20) {
    scrollbuttn.style.display = "block";
  } 
  else {
    scrollbuttn.style.display = "none";
  }
}

scrollbuttn.addEventListener('click', scrollup)

function scrollup(){
  document.documentElement.scrollTop = 0
}