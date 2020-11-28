"use strict";

var myBtn = document.getElementById("btnTop"); //pozivanje pri ucitavanju stranice za odredjene delove sajta

window.onload = function () {
  navigacija();
  cars();
};

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

var element = document.getElementsByClassName("dugme");
console.log(element);

for (var i = 0; i < element.length; i++) {
  element[i].addEventListener("click", function () {
    var trenutni = document.getElementsByClassName("activeButton");
    trenutni[0].className = trenutni[0].className.replace("activeButton", "");
    this.className += " activeButton";
  });
}

; // Dinamicko ispisivanje navigacije

function navigacija() {
  var navigacija = new Array("Home", "Search cars", "About us", "Contact", "Documentation");
  var navigacijaLinkovi = new Array("index.html", "search.html", "about.html", "contact.html", "#");
  var navSet = document.createElement("NAV");
  navSet.className = "d-flex align-items-center";
  var navGet = document.getElementById("navigacija");
  navGet.appendChild(navSet);
  var uList = document.createElement("ul");
  uList.className = "d-flex justify-content-around";
  navSet.appendChild(uList);

  for (indeks in navigacija) {
    var liList = document.createElement("li");
    uList.appendChild(liList);
    var aList = document.createElement("a");
    liList.appendChild(aList);
    aList.setAttribute("href", "".concat(navigacijaLinkovi[indeks]));
    aList.textContent = "".concat(navigacija[indeks]);
  }
} //dinamicko ispisivanje sekcije sa automobilima


var carName = new Array("Chevrolet", "Dodge", "BMW", "Honda", "Subaru", "Subaru");
var carModel = new Array("Camarro ZL1", "Demon", "420d Coupe", "Civic Type R", "Impreza WRX STi", "WRX STi");
var carImage = new Array("assets/img/muscle_chevy1.jpg", "assets/img/muscle_demon1.jpeg", "assets/img/sports_bmw1.jpeg", "assets/img/sports_civic1.jpeg", "assets/img/sports_evo.jpeg", "assets/img/sports_subaru1.jpeg");
var carValue = new Array("chevrolet", "dodge", "bmw", "honda", "subaru");

function cars() {
  var carSection = document.getElementById("automobili");

  for (var _i = 0; _i < 3; _i++) {
    var carArticle = document.createElement("div");
    carArticle.className = "carHolder slide1";
    carSection.appendChild(carArticle);
    var carImg = document.createElement("img");
    carImg.setAttribute("src", "".concat(carImage[_i]));
    carImg.className = "first";
    carArticle.appendChild(carImg);
    var carH4 = document.createElement("h4");
    carArticle.appendChild(carH4);
    carH4.className = "name";
    var h4Content = document.createTextNode(carName[_i] + " " + carModel[_i]);
    carH4.appendChild(h4Content);
    var carBtn = document.createElement("button");
    carArticle.appendChild(carBtn);
    var btnLink = document.createElement("a");
    btnLink.setAttribute("href", "#");
    carBtn.appendChild(btnLink);
    var carBtnFA = document.createElement("i");
    carBtnFA.className = "fa fa-chevron-right";
    btnLink.appendChild(carBtnFA);
  }

  var nextSection = document.getElementById("automobili1");

  for (var _i2 = 3; _i2 < carName.length; _i2++) {
    var _carArticle = document.createElement("div");

    _carArticle.className = "carHolder1 slide1";
    nextSection.appendChild(_carArticle);

    var _carImg = document.createElement("img");

    _carImg.setAttribute("src", "".concat(carImage[_i2]));

    _carImg.className = "first";

    _carArticle.appendChild(_carImg);

    var _carH = document.createElement("h4");

    _carArticle.appendChild(_carH);

    _carH.className = "name";

    var _h4Content = document.createTextNode(carName[_i2] + " " + carModel[_i2]);

    _carH.appendChild(_h4Content);

    var _carBtn = document.createElement("button");

    _carArticle.appendChild(_carBtn);

    var _btnLink = document.createElement("a");

    _btnLink.setAttribute("href", "#");

    _btnLink.textContent = "";

    _carBtn.appendChild(_btnLink);

    var _carBtnFA = document.createElement("i");

    _carBtnFA.className = "fa fa-chevron-right";

    _btnLink.appendChild(_carBtnFA);
  }
} // dinamicko ispisivanje ddl na osnovu prethodno izabranog polja u select-u


var model = document.getElementById("carModel");
model.disabled = true;
var firstOpt = document.createElement("option");
firstOpt.value = "0";
firstOpt.textContent = "Choose a model";
model.appendChild(firstOpt);
var carsAndModels = {};
carsAndModels["chevy"] = ["ZL1", "Stingray"];
carsAndModels["dodge"] = ["Challenger", "Charger"];
carsAndModels["bmw"] = ["420d Coupe"];
carsAndModels["subaru"] = ["Impreza WRX STi"];
carsAndModels["mitsubishi"] = ["EVO X"];
carsAndModels["honda"] = ["Civic Type R"];
carsAndModels["toyota"] = ["Supra"];
carsAndModels["audi"] = ["A4", "A7"];

document.getElementById("carType").onchange = function () {
  model.disabled = this.value == '0';
  var selCar = this.options[this.selectedIndex].value;
  model.appendChild(firstOpt);

  while (model.options.length) {
    model.remove(0);
  }

  if (selCar == "0") {
    model.appendChild(firstOpt);
  }

  var cars = carsAndModels[selCar];

  if (cars) {
    var i;

    for (i = 0; i < cars.length; i++) {
      var car = new Option(cars[i], i);
      model.options.add(car);
    }
  }
};
/* function handleSelect(){
    if(this.value != "0"){
        document.getElementById("carModel").disabled = false;
    }
    else {
        document.getElementById("carModel").disabled = true;
    }
} */


function provera() {
  var objNewUsed, objBy, objType, objModel, arrayData, errors;
  objNewUsed = document.getElementsByName("newUsed");
  objBy = document.getElementsByName("by");
  objType = document.querySelector("#carType");
  objModel = document.querySelector("#carModel");
  arrayData = [];
  errors = []; //////////////////////////////////////////////////

  if (objModel.disabled == true) {
    var p = document.createElement("p");
    p.className = "alert alert-danger";
    p.textContent = "You must choose brand!";
    var parent = document.getElementById("greska1");
    parent.appendChild(p);
    errors.push("You must first choose brand");
  }

  console.log(errors);
}

var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", provera);
/* for(let i = 3; i < carName.length; i++){
  let hideDiv = document.createElement("div");
  hideDiv.className = "d-none carHolder slide2";
  carSection.appendChild(hideDiv);
    let carImg = document.createElement("img");
  carImg.setAttribute("src", `${carImage[i]}`)
  hideDiv.appendChild(carImg); 
    let carH4 = document.createElement("h4");
  hideDiv.appendChild(carH4);
  let h4Content = document.createTextNode(carName[i] + " " + carModel[i]);
  carH4.appendChild(h4Content);
    let carBtn = document.createElement("button");
  hideDiv.appendChild(carBtn);
  let carBtnFA = document.createElement("i");
  carBtn.appendChild(carBtnFA);
  carBtnFA.className = "fa fa-chevron-right";
}  */

/* var btn = document.getElementById("btnDesno");
btn.addEventListener("click", promeni);
var lastItem = 0;
var lastH4 = document.getElementsByClassName("name");
var beforeImg = document.getElementsByClassName("first");

function promeni(){
    if(lastItem == 0){
        for(let j = 3; j < carName.length; j++){
            beforeImg[lastItem].src = `${carImage[j]}`;
            lastH4[lastItem].textContent = `${carName[j] + " " + carModel[j]}`;
            lastItem++;
        }
    }
    else{
        for(let i = 0; i < 3; i++){
            lastH4[i].textContent = `${carName[i] + " " + carModel[i]}`
            beforeImg[i].src = `${carImage[i]}`;
          }
          lastItem = 0;
    }
}
 */
// animation jquery search form

$(window).ready(function () {
  $(".searchForm").slideDown("slow");
});
$("#btnDesno").click(function () {
  $(".carHolder").animate({
    left: "0%"
  }, 700);
  $("#automobili1").animate({
    left: "-50%"
  }, 700);
});
$("#btnLevo").click(function () {
  $(".carHolder").animate({
    left: "100%"
  }, 1000);
  $("#automobili1").animate({
    left: "25%"
  }, 1000);
});