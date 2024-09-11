//SIDE NAV//

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

function scrollup(){
  document.documentElement.scrollTop = 0
}

var carousel = $('.nonloop').owlCarousel({
  center: false,
  items: 3,
  loop: false,  // No looping
  margin: 10,   // Space between items
  nav: true, 
  navText:['<i class="fa fa-angle-left custom-prev" aria-hidden="true"></i>'  ,  '<i class="fa fa-angle-right custom-next" aria-hidden="true"></i>'], // Disable default navigation
  responsive: {
    0: {
      items: 1
  },
      600: {
          items: 3
      }
  },

  onInitialized: checkNavVisibility,  // Check visibility on initialization
  onTranslated: checkNavVisibility    // Check visibility after each scroll

});

 // Function to check and hide/show navigation arrows
 function checkNavVisibility(event) {
  var items = event.item.count; // Total number of items
  var item = event.item.index;  // Current item index
  var pageSize = event.page.size;  // Number of visible items
  // Hide the 'prev' button if at the start
  if (item === 0) {
    $('.custom-prev').hide();
  } else {
    $('.custom-prev').show();
  }

  // Hide the 'next' button if at the end
  if (item + pageSize >= items) {
    $('.custom-next').hide();
  } else {
    $('.custom-next').show();
  }
  }

    // Initial check to ensure correct visibility on page load
    checkNavVisibility({
      item: { 
          count: carousel.find('.owl-item').length, 
          index: carousel.find('.active').first().index() 
      }, 
      page: { 
          size: 3 
      }
  });




// Remove space at the end
// carousel.on('refreshed.owl.carousel', function() {
//   var totalItems = carousel.find('.owl-item').length;
//   var visibleItems = carousel.find('.owl-item.active').length;

// });


