"use strict";

var myBtn = document.getElementById("btnTop"); //pozivanje pri ucitavanju stranice za odredjene delove sajta

window.onload = function () {
  navigacija1();
  sideNav();
  ddl();
  info1();
  /*     cars(); */
};

window.onscroll = function () {
  scrollUp1();
};

function scrollUp1() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    myBtn.style.visibility = "visible";
  } else {
    myBtn.style.visibility = "hidden";
  }
} //JQUERY SCROLL TOP


$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#btnTop').fadeIn();
    } else {
      $('#btnTop').fadeOut();
    }
  });
  $('#btnTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

function info1() {
  var naslov = ["WELCOME TO OUR SITE", "CAR", "ZONE"];
  var content = [["BRANDS", "We got latest and most popular brands from automotive industry", "fas fa-car"], ["FREE SUPPORT", "24/7 covered available support to get answers to all your questions", "far fa-comment-dots"], ["AFFORDABLE", "Exotic cars that have best deals according to their performance", "fas fa-coins"]];
  document.getElementsByClassName("naslovContent")[0].innerHTML = "<div class=\"col-12 text-center naslov p-4\">\n    <h4>".concat(naslov[0], "</h4>\n    <span><i class=\"fas fa-angle-double-down\"></i></span>\n    <h1><span>").concat(naslov[1], "</span> ").concat(naslov[2], "</h1>\n</div>");

  for (var i = 0; i < content.length - 1; i++) {
    document.getElementsByClassName("naslovContent")[0].innerHTML += "\n        <div class=\"col-12 col-sm-6 col-lg-4 text-center\"><div class=\"col-12 sectionContent p-2 mb-3\"><i class=\"".concat(content[i][2], "\"></i><h5>").concat(content[i][0], "</h5><p>").concat(content[i][1], "</p></div></div>");
  } //zbog poslednjeg elementa kome je potreban col-sm-12


  document.getElementsByClassName("naslovContent")[0].innerHTML += "\n        <div class=\"col-12 col-sm-12 col-lg-4 text-center\">\n                        <div class=\"col-12 sectionContent p-2 mb-3\">\n                            <i class=\"".concat(content[2][2], "\"></i>\n                        <h5>").concat(content[2][0], "</h5>\n                        <p>").concat(content[2][1], "</p>\n                        </div>\n                    </div>");
} // Dinamicko ispisivanje navigacije i sidenav


var navigacija = new Array("Home", "Cars", "About", "Contact", "Documentation");
var navigacijaLinkovi = new Array("index.html", "search.html", "about.html", "contact.html", "#");

function navigacija1() {
  var navGet = document.getElementById("navigacija");
  var navSet = document.createElement("nav");
  navSet.className = "d-flex align-items-center justify-content-center";
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
}

function sideNav() {
  var sideNav = document.getElementById("openSide");
  var nav = document.createElement("nav");
  sideNav.appendChild(nav);
  var button = document.createElement("button");
  button.textContent = "Close";
  var sideUl = document.createElement("ul");
  nav.appendChild(sideUl);

  for (indeks in navigacija) {
    var sideLi = document.createElement("li");
    sideUl.appendChild(sideLi);
    var sideA = document.createElement("a");
    sideLi.appendChild(sideA);
    sideA.setAttribute("href", "".concat(navigacijaLinkovi[indeks]));
    sideA.textContent = "".concat(navigacija[indeks]);
  }
}

function openNav() {
  document.getElementById("openSide").style.width = "250px";
}

function closeNav() {
  document.getElementById("openSide").style.width = "0";
}

document.getElementById("clickSide").addEventListener("click", openNav);
document.getElementById("closeSide").addEventListener("click", closeNav); // dinamicko ispisivanje ddl na osnovu prethodno izabranog polja u select-u

function ddl() {
  var model = document.getElementById("carModel");
  model.disabled = true;
  var firstOpt = document.createElement("option");
  firstOpt.setAttribute("value", "0");
  var sadrzaj = document.createTextNode("Choose a model");
  firstOpt.appendChild(sadrzaj);
  model.appendChild(firstOpt);
  var carsAndModels = {};
  carsAndModels["Chevrolet"] = ["ZL1", "Stingray"];
  carsAndModels["Dodge"] = ["Challenger", "Charger"];
  carsAndModels["BMW"] = ["420d Coupe"];
  carsAndModels["Subaru"] = ["Impreza WRX STi"];
  carsAndModels["Mitsubishi"] = ["EVO X"];
  carsAndModels["Honda"] = ["Civic Type R"];
  carsAndModels["Toyota"] = ["Supra"];
  carsAndModels["Mercedes"] = ["450 CLS"];
  console.log(carsAndModels);

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
      for (var i = 0; i < cars.length; i++) {
        var car = document.createElement("option");
        car.setAttribute("value", i);
        var text = document.createTextNode(cars[i]);
        car.appendChild(text);
        model.options.add(car);
      }
    }
  };

  console.log(Object.values(carsAndModels)[1][1]);

  function ispisivanjeOpt() {
    var type = document.getElementById("carType");

    for (var i = 0; i < Object.keys(carsAndModels).length; i++) {
      var opt = document.createElement("option");
      opt.setAttribute("value", Object.keys(carsAndModels)[i]);
      var text = document.createTextNode(Object.keys(carsAndModels)[i]);
      opt.appendChild(text);
      type.appendChild(opt);
    }
  }

  ispisivanjeOpt();
} // dinamicko i nasumicno ispisivanje automobila u index.html


var carContent = [["assets/img/sports_civic1.jpeg", "Honda Civic Type R", "Manual", "350hp"], ["assets/img/sports_supra1.jpeg", "Toyota Supra", "Automatic", "382hp"], ["assets/img/sports_subaru1.jpeg", "Subaru Impreza WRX", "Manual", "340hp"], ["assets/img/muscle_chevy1.jpg", "Chevrolet ZL1", "Automatic", "650hp"], ["assets/img/muscle_demon1.jpeg", "Dodge Challenger", "Automatic", "700hp"], ["assets/img/sports_benz1.jpeg", "Mercedes 450 CLS", "Manual", "375hp"], ["assets/img/sports_evo.jpeg", "Subaru WRX", "Manual", "360hp"], ["assets/img/sports_bmw1.jpeg", "BMW 420d Coupe", "Manual", "310hp"], ["assets/img/sports_mitsubishi1.jpg", "Mitsubishi EVO X", "Automatic", "290hp"], ["assets/img/muscle_mustang1.jpeg", "Ford Mustang", "Automatic", "750hp"], ["assets/img/sports_bmw2.jpeg", "BMW X5", "Automatic", "310hp"], ["assets/img/suv_ford1.jpeg", "Ford F-150", "Automatic", "280hp"]]; //niz u koji ubacujemo DISTINCT vrednosti do 12

var random = []; // funkcija za random ispisivanje iz niza

function generate() {
  //broj elemenata niza
  var max = 12;

  for (var i = 0; i < max; i++) {
    var trenutni = Math.floor(Math.random() * 12);

    if (random.indexOf(trenutni) == -1) {
      random.push(trenutni);
    } else i--;
  }
}

generate();

function ispisCarContent() {
  var div = document.getElementById("showCars"); // ispisivanje prvih 6 artikala

  for (var i = 0; i < carContent.length - 6; i++) {
    div.innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4\">\n            <div class=\"imgHolder\">\n                <img src=\"".concat(carContent[random[i]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[i]][1], "\">\n            </div>\n            <div class=\"holder\">\n            <h5 class=\"mb-3\">").concat(carContent[random[i]][1], "</h5>\n            <p><i class=\"fas fa-cog\"></i> ").concat(carContent[random[i]][2], " <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[i]][3], "</p>\n            <a href=\"#\">ORDER NOW</a>\n            </div>\n        </div>");
  }

  var click1 = 0;
  document.getElementById("loadMore").addEventListener("click", function () {
    if (click1 == 1) {
      document.getElementById("loadMore").style.display = "none";
    }

    if (click1 == 0) {
      //ispisivanje narednih 3 elemenata iz niza pocev od 6
      for (var i = 6; i < carContent.length - 3; i++) {
        document.getElementById("showCars").innerHTML += "<div class=\"col-lg-4 mr-auto col-12 col-sm-6 mb-4 slide\">\n                    <div class=\"imgHolder\">\n                        <img src=\"".concat(carContent[random[i]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[i]][1], "\">\n                    </div>\n                    <div class=\"holder\">\n                    <h5 class=\"mb-3\">").concat(carContent[random[i]][1], "</h5>\n                    <p><i class=\"fas fa-cog\"></i> ").concat(carContent[random[i]][2], " <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[i]][3], "</p>\n                    <a href=\"#\">ORDER NOW</a>\n                    </div></div>");
      }
    }

    if (click1 > 0) {
      //ispisivanje ostatka 
      for (var i = 9; i < carContent.length; i++) {
        document.getElementById("showCars").innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4 slide\">\n                    <div class=\"imgHolder\">\n                        <img src=\"".concat(carContent[random[i]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[i]][1], "\">\n                    </div>\n                    <div class=\"holder\">\n                    <h5 class=\"mb-3\">").concat(carContent[random[i]][1], "</h5>\n                    <p><i class=\"fas fa-cog\"></i> ").concat(carContent[random[i]][2], " <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[i]][3], "</p>\n                    <a href=\"#\">ORDER NOW</a>\n                    </div></div>");
      }
    }

    click1++;
  });
}
/* var carIspis1 = [
    ["assets/img/sports_evo.jpeg","Subaru WRX","Manual", "360hp"],
    ["assets/img/sports_bmw1.jpeg","BMW 420d Coupe","Manual", "310hp"],
    ["assets/img/sports_mitsubishi1.jpg","Mitsubishi EVO X","Automatic", "290hp"]];
var carIspis2 = [
    ["assets/img/muscle_mustang1.jpeg","Ford Mustang","Automatic", "750hp"],
    ["assets/img/sports_bmw2.jpeg","BMW X5","Automatic", "310hp"],
    ["assets/img/suv_ford1.jpeg","Ford F-150","Automatic", "280hp"]];


var click1 = 0;
document.getElementById("loadMore").addEventListener("click", function(){
    if(click1 == 1){
        document.getElementById("loadMore").style.display = "none";
    }
    if(click1 == 0){
        for(var i = 0; i < carIspis1.length; i++){
            document.getElementById("showCars").innerHTML += `<div class="col-lg-4 mr-auto col-12 col-sm-6 mb-4 slide">
            <div class="imgHolder">
                <img src="${carIspis1[i][0]}" class="img-fluid" alt="${carIspis1[i][1]}">
            </div>
            <div class="holder">
            <h5 class="mb-3">${carIspis1[i][1]}</h5>
            <p><i class="fas fa-cog"></i> ${carIspis1[i][2]} <i class="fas fa-tachometer-alt"></i> ${carIspis1[i][3]}</p>
            <a href="#">ORDER NOW</a>
            </div></div>`;
        }
    }
    if(click1 > 0){
        for(var i = 0; i < carIspis2.length; i++){
            document.getElementById("showCars").innerHTML += `<div class="col-lg-4 col-12 col-sm-6 mb-4 slide">
            <div class="imgHolder">
                <img src="${carIspis2[i][0]}" class="img-fluid" alt="${carIspis2[i][1]}">
            </div>
            <div class="holder">
            <h5 class="mb-3">${carIspis2[i][1]}</h5>
            <p><i class="fas fa-cog"></i> ${carIspis2[i][2]} <i class="fas fa-tachometer-alt"></i> ${carIspis2[i][3]}</p>
            <a href="#">ORDER NOW</a>
            </div></div>`;
        }
    }
    click1++;
}) */

/* document.getElementById("loadMore").addEventListener("click", function(){
    if(click1 > 0){
        for(var i = 0; i < carIspis2.length; i++){
            document.getElementById("showCars").innerHTML += `<div class="col-lg-4 col-12 col-sm-6 mb-4">
            <div class="imgHolder">
                <img src="${carIspis2[i][0]}" class="img-fluid" alt="${carIspis2[i][1]}">
            </div>
            <div class="holder">
            <h5 class="mb-3">${carIspis2[i][1]}</h5>
            <p><i class="fas fa-cog"></i> ${carIspis2[i][2]} <i class="fas fa-tachometer-alt"></i> ${carIspis2[i][3]}</p>
            <a href="#">ORDER NOW</a>
            </div></div>`;
        }
    }
}) */


function provera() {
  var objNewUsed, objBy, objType, objModel, arrayData, errors;
  objNewUsed = document.getElementsByName("newUsed");
  objBy = document.getElementsByName("by");
  objType = document.querySelector("#carType");
  objModel = document.querySelector("#carModel");
  arrayData = [];
  errors = []; //////////////////////////////////////////////////

  if (objType.options[objType.options.selectedIndex].value == 0) {
    errors.push("You must first choose brand");
  } else {
    arrayData.push(objType.options[objType.options.selectedIndex].value);
    console.log(arrayData);
  }

  var ispis = "<ul class='list-group'>";

  if (errors.length != 0) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var greska = _step.value;
        ispis += "<li class=\"list-group-item\">".concat(greska, "</li>");
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  ispis += "</ul>";

  if (objType.options[objType.options.selectedIndex].value != 0) {
    document.getElementById("greska1").innerHTML -= ispis;
  }

  document.getElementById("greska1").innerHTML = ispis;
}

document.getElementById("searchBtn").addEventListener("click", provera);
$(document).ready(function () {
  ispisCarContent();
  $(".owl-carousel").owlCarousel({
    responsiveClass: true,
    autoplay: true,
    animateIn: true,
    loop: true,
    nav: false,
    dots: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1,
        autoplay: false
      },
      850: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  var owl = $(".owl-carousel");
  $("#btnDesno").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $("#btnLevo").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});
$(window).ready(function () {
  $(".searchForm").slideDown("slow");
});