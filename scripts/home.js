$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
  items: 1,
  loop:true,
  margin:1,
  autoplay:true,
  autoplayTimeout: 3000,
  autoplayHoverPause:true
});

$('.play').on('click',function(){
  owl.trigger('play.owl.autoplay',[1000])
})

$('.stop').on('click',function(){
  owl.trigger('stop.owl.autoplay')
})

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
  if(document.getElementById('sidebar').style.width = "0"){

    document.getElementById('sidebar').style.width = "0";
  }

  // document.getElementById("body").style.marginLeft = "0";
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
  if (document.documentElement.scrollTop > 20000 || document.documentElement.scrollTop > 20) {
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


var items = document.querySelectorAll('.child');

document.addEventListener('scroll', startAnimation)

function startAnimation(){
  var trigger = (window.innerHeight / 4 * 4);

  items.forEach(box => {
    
   var boxTop = box.getBoundingClientRect().top;

   if (boxTop < trigger) {

    box.classList.add('visible');
   }
  })
}

//FOR EMAIL

var invalid = document.getElementById('invalid')

var email = document.getElementById('email')

var subscribe = document.getElementById('subBtn');

var confim = document.getElementById('confirm')

subscribe.addEventListener('click', checkSub)

function checkSub(){
  if(email.value == '' || !email.value.includes('@') || !email.value.includes('.com')){
    invalid.style.display = "block"

    confim.style.display = "none"
  }
  else if(email.value !== '' || invalid.style.display == "block" || email.value.includes('@') ){

    confim.style.display = "flex"

    confim.classList.add('swing')

    invalid.style.display = "none"
  }
  
  document.getElementById('email').value = " "

  email.placeholder = 'Email'

}

// document.getElementById('confirm').style.display = "none"