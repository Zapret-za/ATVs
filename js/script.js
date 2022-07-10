$(document).ready(function(){
    $('.header__mobmenu').click(function(){
        $('.header__mobmenu,.header__item-nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__item-nav a').click(function() {
        $('.header__item-nav').removeClass('active');
        $('.header__mobmenu').removeClass('active');
    });
});


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


function openGalereya(evt, galereyaName) {
  var j, tabcontent_2, tablinks_2;
  tabcontent_2 = document.getElementsByClassName("tabcontent_2");
  for (j = 0; j < tabcontent_2.length; j++) {
    tabcontent_2[j].style.display = "none";
  }
  tablinks_2 = document.getElementsByClassName("tablinks_2");
  for (j = 0; j < tablinks_2.length; j++) {
    tablinks_2[j].className = tablinks_2[j].className.replace(" active", "");
  }
  document.getElementById(galereyaName).style.display = "block";
  evt.currentTarget.className += " active";
}


var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var element = document.getElementById('phone');
var maskOptions = {
    mask: '+38O (000) 000 - 000',
    lazy: false
} 
var mask = new IMask(element, maskOptions);

