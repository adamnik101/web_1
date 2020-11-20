"use strict";

var myBtn = document.getElementById("btnTop");

window.onscroll = function () {
  scrollUp();
};

function scrollUp() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    myBtn.style.display = "block";
  } else myBtn.style.display = "none";
}

function scrollTopPage() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var carSectionImg = ["assets/img/muscle_chevy1.jpg", "assets/img/muscle_demon1.jpeg", "assets/img/muscle_mustang1.jpg"];
var carSectionNaslov = ["Chevrolette Camaro SS", "Dodge Demon", "Ford Mustang"];

for (var i = 0; i < carSectionImg.length; i++) {
  document.getElementById("automobili").innerHTML += "<article class=\"carHolder\"><img src=\"".concat(carSectionImg[i], "\" class=\"img-fluid slika\" alt=\"proba\"><h4 class=\"carNaslov\">").concat(carSectionNaslov[i], "</h4><button type\"button\"><i class=\"fas fa-caret-right\"></i></button></article>");
}

document.getElementById("btnDesno").addEventListener("click", function () {
  var newCarSectionImg = ["assets/img/sports_bmw1.jpeg", "assets/img/sports_civic1.jpeg", "assets/img/sports_subaru1.jpeg"];
  var newCarNaslov = ["BMW 320", "Honda Civic TypeR", "Subaru WRX"];

  for (var _i = 0; _i < newCarSectionImg.length; _i++) {
    var slika = document.getElementsByClassName("slika");
    slika[_i].src = "".concat(newCarSectionImg[_i]);
    var naslov = document.getElementsByClassName("carNaslov");
    naslov[_i].textContent = "".concat(newCarNaslov[_i]);
  }
});