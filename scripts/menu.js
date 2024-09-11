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

    document.getElementById('sub').style.paddingTop = "115px"
  }
  
  else{
    document.getElementById('header').style.top = "-130px"

    document.getElementById('sub').style.paddingTop = "0px"
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

//to make overlay appear//

var breakfast = document.getElementById('break')

breakfast.addEventListener('click', over)

function over(){
  subMenu.style.display = "flex"
}

//to remove menu overlay

var cancel = document.getElementById('cancel')

var subMenu = document.getElementById('sub')

cancel.addEventListener('click', overlay)

function overlay(){

  subMenu.style.display = "none"

}

//hot cofee menu
var head = document.getElementById('head')

var hot = document.getElementById('hot')

var fstimage = document.getElementById('img1')

var foodName1 = document.getElementById('name1')

var price1 = document.getElementById('price1')



hot.addEventListener('click', hotMenu)

function hotMenu(){
  subMenu.style.display = "flex"

  head.innerHTML = "HOT" + " " + " COFFEE"

  fstimage.src = "/Project images/menu images/hot sub 1.webp"

  foodName1.innerHTML = "ESPRESSO"

  price1.innerHTML = "$3.50"



  document.getElementById('img2').src = "/Project images/menu images/hot sub 2.webp"

  document.getElementById('name2').innerHTML = "ESPRESSO" + " " + " MACCHIATO"

  document.getElementById('price2').innerHTML = "$3.75"



  document.getElementById('img3').src = "/Project images/menu images/hot sub 3.webp"

  document.getElementById('name3').innerHTML = "LATTE"

  document.getElementById('price3').innerHTML = "$4.75"



  document.getElementById('img4').src = "/Project images/menu images/hot sub 4.webp"

  document.getElementById('name4').innerHTML = "AMERICANO"

  document.getElementById('price4').innerHTML = "$4.50"



  document.getElementById('img5').src = "/Project images/menu images/hot sub 5.webp"

  document.getElementById('name5').innerHTML = "CAPPUCCINO"

  document.getElementById('price5').innerHTML = "$4.75"



  document.getElementById('img6').src = "/Project images/menu images/hot sub 6.webp"

  document.getElementById('name6').innerHTML = "HOT MILK"

  document.getElementById('price6').innerHTML = "$2.75"

}

//FOR ICED COFFE MENU

var ice = document.getElementById('iced')

ice.addEventListener('click', iceMenu)

function iceMenu(){
  subMenu.style.display = "flex"

  head.innerHTML = "ICED" + " " + " COFFEE"

  fstimage.src = "/Project images/menu images/iced sub 1.webp"

  foodName1.innerHTML = "ICED" + " " + " COFFEE"

  price1.innerHTML = "$4.50"



  document.getElementById('img2').src = "/Project images/menu images/ice sub 2.webp"

  document.getElementById('name2').innerHTML = "ICED" + " " + "ESPRESSO"

  document.getElementById('price2').innerHTML = "$4.50"



  document.getElementById('img3').src = "/Project images/menu images/ice sub 3.webp"

  document.getElementById('name3').innerHTML = "ICED" + " " + "LATTE"

  document.getElementById('price3').innerHTML = "$5.75"



  document.getElementById('img4').src = "/Project images/menu images/iced sub 4.webp"

  document.getElementById('name4').innerHTML = "ICED" + " " + "CHOCOLATE"

  document.getElementById('price4').innerHTML = "$5.75"



  document.getElementById('img5').src = "/Project images/menu images/iced sub 1.webp"

  document.getElementById('name5').innerHTML = "ICED CAPPUCCINO"

  document.getElementById('price5').innerHTML = "$5.00"



  document.getElementById('img6').src = "/Project images/menu images/iced sub 6.webp"

  document.getElementById('name6').innerHTML = "ICED TEA"

  document.getElementById('price6').innerHTML = "$3.50"

}

//FOR SMOOTHIES

var smooth = document.getElementById('smooth')

smooth.addEventListener('click', smoothMenu)

function smoothMenu(){
  subMenu.style.display = "flex"

  head.innerHTML = "SMOOTHIES"

  fstimage.src = "/Project images/menu images/smooth sub 1.webp"

  foodName1.innerHTML = "RED, WHITE," + " & BLUE"

  price1.innerHTML = "$8.99"



  document.getElementById('img2').src = "/Project images/menu images/smooth sub 2.webp"

  document.getElementById('name2').innerHTML = "VACATION"

  document.getElementById('price2').innerHTML = "$8.99"



  document.getElementById('img3').src = "/Project images/menu images/smooth sub 3.webp"

  document.getElementById('name3').innerHTML = "GREEK STALLION"

  document.getElementById('price3').innerHTML = "8.99"



  document.getElementById('img4').src = "/Project images/menu images/smooth sub 4.webp"

  document.getElementById('name4').innerHTML = "BERRY ACAI"

  document.getElementById('price4').innerHTML = "$10.99"


  document.getElementById('dis').style.display = "none"

  document.getElementById('dis1').style.display = "none"
}

//FOR POWER DRINKS

var power = document.getElementById('power')

power.addEventListener('click', powerMenu)

function powerMenu(){
  subMenu.style.display = "flex"

  head.innerHTML = "POWER DRINKS"

  fstimage.src = "/Project images/menu images/power sub 1.webp"

  foodName1.innerHTML = "POPEYE SHAKE"

  price1.innerHTML = "$9.99"



  document.getElementById('img2').src = "/Project images/menu images/power sub 2.webp"

  document.getElementById('name2').innerHTML = "PINA COLANDA"

  document.getElementById('price2').innerHTML = "$9.99"



  document.getElementById('img3').src = "/Project images/menu images/power sub 3.webp"

  document.getElementById('name3').innerHTML = "PEANUT BUTTER POWER"

  document.getElementById('price3').innerHTML = "$9.99"


  document.getElementById('dis').style.display = "none"

  document.getElementById('dis1').style.display = "none"

  document.getElementById('dis2').style.display = "none"
}

//FOR JUICE MENU

var juice = document.getElementById('juice')

juice.addEventListener('click', juiceMenu)

function juiceMenu(){
  subMenu.style.display = "flex"

  head.innerHTML = "JUICES"

  fstimage.src = "/Project images/menu images/juice sub 1.webp"

  foodName1.innerHTML = "ORANGE JUICE"

  price1.innerHTML = "$7.49"



  document.getElementById('img2').src = "/Project images/menu images/juice sub 2.webp"

  document.getElementById('name2').innerHTML = "V8"

  document.getElementById('price2').innerHTML = "$8.49"



  document.getElementById('img3').src = "/Project images/menu images/juice sub 3.webp"

  document.getElementById('name3').innerHTML = "GREEN TEAM"

  document.getElementById('price3').innerHTML = "$8.49"



  document.getElementById('img4').src = "/Project images/menu images/juice sub 4.jpg"

  document.getElementById('name4').innerHTML = "DETOX POWER"

  document.getElementById('price4').innerHTML = "$8.49"



  document.getElementById('img5').src = "/Project images/menu images/juice sub 5.webp"

  document.getElementById('name5').innerHTML = "GINGER JACK"

  document.getElementById('price5').innerHTML = "$8.49"



  document.getElementById('img6').src = "/Project images/menu images/juice sub 6.webp"

  document.getElementById('name6').innerHTML = "GINGER SHOT"

  document.getElementById('price6').innerHTML = "$4.00"
}

//FOR SANDWICH MENU

var sand  = document.getElementById('sand')

sand.addEventListener('click', sandMenu)

function sandMenu(){
  subMenu.style.display = "flex"

  head.innerHTML = "SANDWICHES"

  fstimage.src = "/Project images/menu images/sand sub 1.webp"

  foodName1.innerHTML = " HAM SANDWICH"

  price1.innerHTML = "$11.99"



  document.getElementById('img2').src = "/Project images/menu images/sand sub 2.jpg"

  document.getElementById('name2').innerHTML = "TURKEY SANDWICH"

  document.getElementById('price2').innerHTML = "$11.99"



  document.getElementById('img3').src = "/Project images/menu images/sand sub 3.webp"

  document.getElementById('name3').innerHTML = "CAPRESE SANDWICH"

  document.getElementById('price3').innerHTML = "$11.99"



  document.getElementById('img4').src = "/Project images/menu images/sand sub 4.webp"

  document.getElementById('name4').innerHTML = "PROSCIUTTO SANDWICH"

  document.getElementById('price4').innerHTML = "$12.99"



  document.getElementById('img5').src = "/Project images/menu images/sand sub 5.webp"

  document.getElementById('name5').innerHTML = "CHICKEN SANDWICH"

  document.getElementById('price5').innerHTML = "$11.99"



  document.getElementById('img6').src = "/Project images/menu images/sand sub 6.webp"

  document.getElementById('name6').innerHTML = "TUNA SALAD"

  document.getElementById('price6').innerHTML = "$11.99"
}

//FOR BOWLS MENU

var bowl = document.getElementById('bowl')

bowl.addEventListener('click', bowlMenu)

function bowlMenu(){
  subMenu.style.display = "flex"

  head.innerHTML = "BOWLS"

  fstimage.src = "/Project images/menu images/bowl sub 1.jpg"

  foodName1.innerHTML = "QUINOA BOWL"

  price1.innerHTML = "$13.49"



  document.getElementById('img2').src = "/Project images/menu images/bowl sub 2.jpg"

  document.getElementById('name2').innerHTML = "CHICKEN BOWL"

  document.getElementById('price2').innerHTML = "$15.99"



  document.getElementById('img3').src = "/Project images/menu images/bowl sub 3.jpg"

  document.getElementById('name3').innerHTML = "SALMON FILLET BOWL"

  document.getElementById('price3').innerHTML = "$19.99"



  document.getElementById('img4').src = "/Project images/menu images/bowl sub 4.jpg"

  document.getElementById('name4').innerHTML = "TUNA POKE"

  document.getElementById('price4').innerHTML = "$18.49"


  document.getElementById('dis').style.display = "none"

  document.getElementById('dis1').style.display = "none"

  document.getElementById('dis2').style.display = "none"
}

//FOR SALAD MENU 

var salad = document.getElementById('salad')

salad.addEventListener('click', saladMenu)

function saladMenu(){
  subMenu.style.display = "flex"

  head.innerHTML = "SALADS"

  fstimage.src = "/Project images/menu images/salad sub 1.webp"

  foodName1.innerHTML = "GREEK SALAD"

  price1.innerHTML = "$12.99"



  document.getElementById('img2').src = "/Project images/menu images/salad sub 2.jpg"

  document.getElementById('name2').innerHTML = "TUNA SALAD"

  document.getElementById('price2').innerHTML = "$12.99"



  document.getElementById('img3').src = "/Project images/menu images/salad sub 3.webp"

  document.getElementById('name3').innerHTML = "CAESAR CHICKEN SALAD"

  document.getElementById('price3').innerHTML = "$14.49"



  document.getElementById('img4').src = "/Project images/menu images/salad sub 4.webp"

  document.getElementById('name4').innerHTML = "GREENS & CHICKEN SALAD"

  document.getElementById('price4').innerHTML = "$14.49"



  document.getElementById('img5').src = "/Project images/menu images/salad sub 5.jpg"

  document.getElementById('name5').innerHTML = "ARUGULA SALAD"

  document.getElementById('price5').innerHTML = "$14.49"



  document.getElementById('img6').src = "/Project images/menu images/salad sub 6.webp"

  document.getElementById('name6').innerHTML = "BEET SALAD"

  document.getElementById('price6').innerHTML = "$13.49"
}

//FOR PASTA MENU

var pasta = document.getElementById('pasta')

pasta.addEventListener('click', pastaMenu)

function pastaMenu(){
  subMenu.style.display = "flex"

  head.innerHTML = "PASTA"

  fstimage.src = "/Project images/menu images/pasta sub 1.webp"

  foodName1.innerHTML = "TOMATO AND BASIL"

  price1.innerHTML = "$14.00"



  document.getElementById('img2').src = "/Project images/menu images/pasta sub 2.webp"

  document.getElementById('name2').innerHTML = "CHICKEN AND MUSHROOM"

  document.getElementById('price2').innerHTML = "$16.00"



  document.getElementById('dis').style.display = "none"

  document.getElementById('dis1').style.display = "none"

  document.getElementById('dis2').style.display = "none"

  document.getElementById('dis3').style.display = "none"
}



//SIDES MENU

var side = document.getElementById('sides')

side.addEventListener('click', sideMenu)

function sideMenu(){
  subMenu.style.display = "flex"

  head.innerHTML = "SIDES"

  fstimage.src = "/Project images/menu images/side sub 1.webp"

  foodName1.innerHTML = "HOUSE SALAD"

  price1.innerHTML = "$2.99"



  document.getElementById('img2').src = "/Project images/menu images/side sub 2.webp"

  document.getElementById('name2').innerHTML = "BACON"

  document.getElementById('price2').innerHTML = "$2.50"


  document.getElementById('img3').src = "/Project images/menu images/side sub 3.webp"

  document.getElementById('name3').innerHTML = "ROASTED POTATOES"

  document.getElementById('price3').innerHTML = "$2.50"



  document.getElementById('img4').src = "/Project images/menu images/side sub 4.webp"

  document.getElementById('name4').innerHTML = "FRUIT SALAD (SIDE)"

  document.getElementById('price4').innerHTML = "$3.00"

  

  document.getElementById('dis').style.display = "none"

  document.getElementById('dis1').style.display = "none"
}



//FOR DESSERT MENU

var dessert = document.getElementById('dessert')

dessert.addEventListener('click', dessertMenu)

function dessertMenu(){
  subMenu.style.display = "flex"

  head.innerHTML = "DESSERTS"

  fstimage.src = "/Project images/menu images/dessert 1.jpg"

  foodName1.innerHTML = "BLUEBERRY SCONE"

  price1.innerHTML = "$3.99"



  document.getElementById('img2').src = "/Project images/menu images/dessert 2.webp"

  document.getElementById('name2').innerHTML = "BLUEBERRY MUFFIN"

  document.getElementById('price2').innerHTML = "$3.99"


  document.getElementById('img3').src = "/Project images/menu images/dessert 3.webp"

  document.getElementById('name3').innerHTML = "DULCE DE LECHE CHEESECAKE"

  document.getElementById('price3').innerHTML = "$2.50"



  document.getElementById('img4').src = "/Project images/menu images/dessert 4.webp"

  document.getElementById('name4').innerHTML = "OREO COOKIE BASH"

  document.getElementById('price4').innerHTML = "$8.00"

  

  document.getElementById('dis').style.display = "none"

  document.getElementById('dis1').style.display = "none"
}

var empty = document.getElementById('empty')

empty.addEventListener('click', overlay )