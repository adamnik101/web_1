"use strict";

//cekanje za izvrsavanje DOM-a
window.addEventListener("DOMContentLoaded", function () {
  navigacija1();
  info1();
  owlCarouselContent();
  ispisCarContent();
  ddl();
  testimonials();
  sideNav();
  about();
  typeClick();
});

window.onscroll = function () {
  scrollUp1();
};

var navigacija = [["<i class='fas fa-home'></i>", "Home"], ["<i class='fas fa-chalkboard-teacher'></i>", "Introduction"], ["<i class='fas fa-star'></i>", "Featured"], ["<i class='fas fa-car'></i>", "Rent a car"], ["<i class='fas fa-user'></i>", "Testimonials"], ["<i class='far fa-address-card'></i>", "About us"]];
var navigacijaLinkovi = ["index.html", "#naslov", "#featuredSection", "#formNaslov", "#TestimonialsSection", "#about"];

var navigacija1 = function navigacija1() {
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
    aList.textContent = "".concat(navigacija[indeks][1]);
  }
};

function scrollUp1() {
  var myBtn = document.getElementById("btnTop");

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    myBtn.style.visibility = "visible";
  } else {
    myBtn.style.visibility = "hidden";
  }
} //Introduction section


var info1 = function info1() {
  var naslov = ["WELCOME TO OUR SITE", "CAR", "ZONE"];
  var content = [["BRANDS", "We got latest and most popular brands from automotive industry", "fas fa-car"], ["ROAD SUPPORT", "24/7 available support to help you on road if you have any mechanical problem with our car", "fas fa-road"], ["AFFORDABLE", "Exotic cars that have best deals according to their performance", "fas fa-coins"]];
  document.getElementsByClassName("naslovContent")[0].innerHTML = "<div class=\"col-12 text-center naslov p-4\">\n                                                                        <h4>".concat(naslov[0], "</h4>\n                                                                        <span><i class=\"fas fa-angle-double-down\"></i></span>\n                                                                        <h1><span>").concat(naslov[1], "</span> ").concat(naslov[2], "</h1>\n                                                                    </div>");

  for (var i = 0; i < content.length - 1; i++) {
    document.getElementsByClassName("naslovContent")[0].innerHTML += "\n        <div class=\"col-12 col-sm-6 col-lg-4 text-center\">\n            <div class=\"col-12 sectionContent p-2 mb-3\">\n                <i class=\"".concat(content[i][2], "\"></i>\n                <h5>").concat(content[i][0], "</h5>\n                <p>").concat(content[i][1], "</p>\n            </div>\n        </div>");
  } //zbog poslednjeg elementa kome je potreban col-sm-12


  document.getElementsByClassName("naslovContent")[0].innerHTML += "\n        <div class=\"col-12 col-sm-12 col-lg-4 text-center\">\n                        <div class=\"col-12 sectionContent p-2 mb-3\">\n                            <i class=\"".concat(content[2][2], "\"></i>\n                        <h5>").concat(content[2][0], "</h5>\n                        <p>").concat(content[2][1], "</p>\n                        </div>\n                    </div>");
};

var naslov = document.getElementById("naslov");

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
    sideLi.classList.add("slideIn");
    sideUl.appendChild(sideLi);
    var sideA = document.createElement("a");
    sideLi.appendChild(sideA);
    sideA.setAttribute("href", "".concat(navigacijaLinkovi[indeks]));
    sideA.innerHTML = "".concat(navigacija[indeks][0] + ' ' + navigacija[indeks][1]);
  }
}

function openNav() {
  document.getElementById("openSide").style.width = "250px";
}

function closeNav() {
  document.getElementById("openSide").style.width = "0";
}

document.getElementById("clickSide").addEventListener("click", openNav);
document.getElementById("closeSide").addEventListener("click", closeNav); // dinamicko i nasumicno ispisivanje automobila

var carContent = [["assets/img/sports_civic1.jpg", "Honda Civic Type R", 120, "350hp"], ["assets/img/sports_supra1.jpg", "Toyota Supra", 300, "382hp"], ["assets/img/sports_subaru1.jpg", "Subaru Impreza STi", 130, "340hp"], ["assets/img/muscle_chevy.jpg", "Chevrolet ZL1", 180, "650hp"], ["assets/img/muscle_demon1.jpg", "Dodge Challenger", 200, "700hp"], ["assets/img/sports_benz1.jpg", "Mercedes 450 CLS", 160, "375hp"], ["assets/img/sports_evo.jpg", "Subaru WRX", 130, "360hp"], ["assets/img/sports_bmw1.jpg", "BMW 420d Coupe", 120, "310hp"], ["assets/img/sports_mitsubishi1.jpg", "Mitsubishi EVO X", 110, "290hp"], ["assets/img/muscle_mustang1.jpg", "Ford Mustang", 160, "750hp"], ["assets/img/sports_bmw2.jpg", "BMW X6m", 120, "310hp"], ["assets/img/suv_ford1.jpg", "Ford F-150", 160, "280hp"]];
var carsAndModels = {}; // za vrednosti za dve dropdown liste

carsAndModels["Chevrolet"] = ["ZL1"];
carsAndModels["Dodge"] = ["Challenger"];
carsAndModels["BMW"] = ["420d Coupe", "X6m"];
carsAndModels["Subaru"] = ["Impreza STi", "WRX"];
carsAndModels["Mitsubishi"] = ["EVO X"];
carsAndModels["Ford"] = ["Mustang", "F-150"];
carsAndModels["Honda"] = ["Civic Type R"];
carsAndModels["Toyota"] = ["Supra"];
carsAndModels["Mercedes"] = ["450 CLS"];
var izabranAuto; // za uzimanje cene na osnovu izabranog automobila preko dropdown 

var cena = [[180], [200], [120], [130], [110], [160], [120], [300], [160]];

for (var i = 0; i < Object.keys(carsAndModels).length; i++) {
  // za upis cena modela
  cena[i].unshift(Object.keys(carsAndModels)[i]);
} // dinamicko ispisivanje ddl


function ddl() {
  var firstOpt = document.createElement("option");
  firstOpt.setAttribute("value", "0");
  var sadrzaj = document.createTextNode("Choose a model");
  firstOpt.appendChild(sadrzaj);
  model.appendChild(firstOpt);
  model.disabled = true; //za upisivanje vrednosti na osnovu prvog selecta u drugi

  document.getElementById("carType").onchange = function () {
    model.disabled = this.value == '0';
    var selCar = this.options[this.selectedIndex].value;
    model.appendChild(firstOpt);

    while (model.options.length) {
      model.remove(0);
    }

    for (var _i = 0; _i < cena.length; _i++) {
      if (selCar == cena[_i][0]) {
        izabranAuto = cena[_i][1];
      }
    }

    if (selCar == "0") {
      model.appendChild(firstOpt);
    }

    var cars = carsAndModels[selCar];

    if (cars) {
      for (var _i2 = 0; _i2 < cars.length; _i2++) {
        var car = document.createElement("option");
        car.setAttribute("value", _i2);
        var text = document.createTextNode(cars[_i2]);
        car.appendChild(text);
        model.options.add(car);
        document.getElementById("brandError").textContent = "";
      }
    }
  };

  var ispisivanjeOpt = function ispisivanjeOpt() {
    var type = document.getElementById("carType");

    for (var _i3 = 0; _i3 < Object.keys(carsAndModels).length; _i3++) {
      //preuzimanje vrednosti iz objekata
      var opt = document.createElement("option");
      opt.setAttribute("value", Object.keys(carsAndModels)[_i3]);
      var text = document.createTextNode(Object.keys(carsAndModels)[_i3]);
      opt.appendChild(text);
      type.appendChild(opt);
    }
  };

  ispisivanjeOpt();
}

var random = [];

function generate() {
  // funkcija za random ispisivanje iz niza
  for (var _i4 = 0; _i4 < carContent.length; _i4++) {
    var trenutni = Math.floor(Math.random() * carContent.length);

    if (random.indexOf(trenutni) == -1) {
      random.push(trenutni); //niz u koji ubacujemo DISTINCT vrednosti do 12
    } else _i4--;
  }
}

var value = []; //nasumicno generisanje sadrzaja za svaki element owl-carousel-a

function owlCarouselContent() {
  generate();
  var brojElemenataCarousel = 6;
  var parent = document.getElementById("automobili");
  var child = document.createElement("div");
  child.classList.add("owl-carousel", "first-owl");
  parent.appendChild(child);

  for (var _i5 = 0; _i5 < brojElemenataCarousel; _i5++) {
    value.push(carContent[random[_i5]][1].split(" "));
    child.innerHTML += "<div class=\"slideContent\"><img src=\"".concat(carContent[random[_i5]][0], "\" alt=\"").concat(carContent[random[_i5]][1], "\"><h5>").concat(carContent[random[_i5]][1], "</h5>\n            <p class=\"d-flex justify-content-between\"><span><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_i5]][2], "/day</span><a href=\"#formNaslov\"class=\"d-inline reqBtn\">Request now</a></p>\n        </div>");
  }

  random = [];
} //modal sa vise informacija


function upisVrednosti() {
  var noveSlike = ["assets/img/seeMoreHonda.jpg", "assets/img/seeMoreSupra.jpeg", "assets/img/seeMoreRedSubaru.jpg", "assets/img/seeMoreChevy.jpg", "assets/img/seeMoreDemon.jpg", "assets/img/seeMoreMerc.jpeg", "assets/img/seeMoreSubaru.jpeg", "assets/img/seeMoreBmw.jpg", "assets/img/seeMore1.jpg", "assets/img/seeMoreMustang.jpeg", "assets/img/seeMoreBmw2.jpg", "assets/img/seeMoreFord.jpeg"];
  var seeMore = document.getElementsByClassName("seeMore");
  var modal = document.getElementById("seeMoreModal");
  var request = document.getElementsByClassName("request");
  var typeNew = document.getElementById("carType");
  var model2 = document.getElementById("carModel");

  var _loop = function _loop(_i6) {
    seeMore[_i6].addEventListener("click", function () {
      if (seeMore[_i6].value == carContent[random[_i6]][1]) {
        modal.innerHTML = "<div class=\"row relative\"> <div class=\"col-12 p-0\"> <div id=\"header1\"> <div class=\"col-12 p-3 d-flex justify-content-between\"> <h2>CAR <span>ZONE</span></h2> <button type=\"button\" id=\"closeSeeMore\"><i class=\"fas fa-times-circle\"></i></button> </div></div><div id=\"body1\"> <div class=\"col-12 p-0\"><button type=\"button\" id=\"levo\"><i class=\"fas fa-angle-left\"></i></i></button><button type=\"button\" id=\"desno\"><i class=\"fas fa-angle-right\"></i></button><div class=\"owl-carousel another-owl\"> <img src=\"".concat(carContent[random[_i6]][0], "\" class=\"img-fluid\" alt=\"car\"> <img src=\"").concat(noveSlike[random[_i6]], "\" class=\"img-fluid\" alt=\"car\"></div> </div><div class=\"col-12 p-2\"> <h3 class=\"text-center\">").concat(carContent[random[_i6]][1], "</h3> <hr class=\"m-0\"> <div class=\"row m-0 p-0\"> <div class=\"col-6 p-0\"> <ul class=\"d-flex flex-column text-left p-2\"> <li> <i class=\"fas fa-check\"></i> Chilled AC </li><li> <i class=\"fas fa-check\"></i> Heated seats </li><li> <i class=\"fas fa-check\"></i> Audio input </li><li> <i class=\"fas fa-check\"></i> Bluetooth </li></ul> </div><div class=\"col-6 p-0\"> <ul class=\"d-flex flex-column text-left p-2\"> <li> <i class=\"fas fa-check\"></i> Manual </li><li> <i class=\"fas fa-check\"></i> Unlimited mileage </li><li> <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[_i6]][3], " </li></ul> </div></div></div><div class=\"row m-0\"> <div class=\"col-12 font-weight-bold euro\"> <i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_i6]][2], "<span>/ per day</span> </div></div></div><div id=\"footer1\" class=\"text-right\"> <button type=\"button\" class=\"request\">Request now!</button> </div></div></div>");
      } // za promenu dropdown liste u formi na osnovu selektovanog automobila preko modala


      for (var j = 0; j < request.length; j++) {
        request[j].addEventListener("click", function () {
          for (var t = 1; t < typeNew.options.length; t++) {
            if (typeNew.options[t].value == carTypeName[_i6][0]) {
              typeNew.selectedIndex = t;
              typeNew.onchange();

              if (model2.options.length > 1) {
                if (model2.options[model2.selectedIndex].text.includes(carTypeName[_i6][1])) {
                  model2.selectedIndex = 0;
                } else {
                  model2.selectedIndex = 1;
                }
              }
            }
          }
        });
      }
    });
  };

  for (var _i6 = 0; _i6 < seeMore.length; _i6++) {
    _loop(_i6);
  }
}

var carTypeName = [];

function ispisCarContent() {
  generate();
  var brojNovihElemenata = 3;
  var brojElemenataOnLoad = 6;
  var div = document.getElementById("showCars"); // ispisivanje prvih 6 artikala

  for (var _i7 = 0; _i7 < brojElemenataOnLoad; _i7++) {
    div.innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4 scale\">\n            <div class=\"imgHolder\">\n                <img src=\"".concat(carContent[random[_i7]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[_i7]][1], "\">\n            </div>\n            <div class=\"holder\">\n            <h5 class=\"mb-3\">").concat(carContent[random[_i7]][1], "</h5>\n            <p><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_i7]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[_i7]][3], "</p>\n            <button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[_i7]][1], "\">See more</button>\n            </div>\n        </div>");
    carTypeName.push(carContent[random[_i7]][1].split(" "));
  }

  upisVrednosti();
  var loadMoreCount = 0;
  document.getElementById("loadMore").addEventListener("click", function () {
    if (loadMoreCount == 1) {
      document.getElementById("loadMore").style.display = "none";
    }

    if (loadMoreCount == 0) {
      //ispisivanje narednih 3 elemenata iz niza pocev od 6
      for (var _i8 = brojElemenataOnLoad; _i8 < brojElemenataOnLoad + brojNovihElemenata; _i8++) {
        var slide = document.createElement("div");
        slide.classList.add("slide", "col-lg-4", "mr-auto", "col-12", "col-sm-6", "mb-4", "scale");
        document.getElementById("showCars").appendChild(slide);
        slide.innerHTML += "\n                    <div class=\"imgHolder\">\n                        <img src=\"".concat(carContent[random[_i8]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[_i8]][1], "\">\n                    </div>\n                    <div class=\"holder\">\n                    <h5 class=\"mb-3\">").concat(carContent[random[_i8]][1], "</h5>\n                    <p><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_i8]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[_i8]][3], "</p>\n                    <button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[_i8]][1], "\">See more</button>\n                    </div>");
        carTypeName.push(carContent[random[_i8]][1].split(" "));
      }

      upisVrednosti();
    }

    if (loadMoreCount > 0) {
      //ispisivanje ostatka 
      for (var _i9 = brojElemenataOnLoad + brojNovihElemenata; _i9 < carContent.length; _i9++) {
        document.getElementById("showCars").innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4 slide scale\">\n                    <div class=\"imgHolder\">\n                        <img src=\"".concat(carContent[random[_i9]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[_i9]][1], "\">\n                    </div>\n                    <div class=\"holder\">\n                    <h5 class=\"mb-3\">").concat(carContent[random[_i9]][1], "</h5>\n                    <p><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_i9]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[_i9]][3], "</p>\n                    <button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[_i9]][1], "\">See more</button>\n                    </div></div>");
        carTypeName.push(carContent[random[_i9]][1].split(" "));
      }

      upisVrednosti();
    }

    loadMoreCount++;
  });
} //za upisivanje u dropdown listu iz sekcije best cars


function typeClick() {
  var type1 = document.getElementById("carType");
  var model1 = document.getElementById("carModel");
  var reqBtns = document.getElementsByClassName("reqBtn");

  var _loop2 = function _loop2(_i10) {
    reqBtns[_i10].addEventListener("click", function () {
      for (var j = 1; j < type.options.length; j++) {
        if (type1.options[j].value == value[_i10][0]) {
          type1.selectedIndex = j;
          type1.onchange();

          if (model1.options.length > 1) {
            if (model1.options[model1.selectedIndex].text.includes(value[_i10][1])) {
              model1.selectedIndex = 0;
            } else {
              model1.selectedIndex = 1;
            }
          }
        }
      }
    });
  };

  for (var _i10 = 0; _i10 < reqBtns.length; _i10++) {
    _loop2(_i10);
  }
} //dohvatanje elemenata


var fullName = document.getElementById("fullName");
var mail = document.getElementById("mail");
var payment = document.getElementsByName("payment");
var type = document.getElementById("carType");
var cvv = document.getElementById("cvv");
var model = document.getElementById("carModel");
var pick = document.getElementById("pick");
var drop = document.getElementById("drop"); //dohvatanje greski

var fullNameError = document.getElementById("fullNameError");
var mailError = document.getElementById("mailError");
var paymentError = document.getElementById("paymentError");
var dateError = document.getElementById("dateError");
var cvvError = document.getElementById("cvvError");
var brandError = document.getElementById("brandError"); //regularni izrazi

var regExFullName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,14}(\s[A-ZČĆŽŠĐ][a-zšđčćž]{2,19})+$/;
var regExMail = /^[a-z][a-z\.\d-\_]+\@[a-z]+(\.[a-z]+)+$/;
var dataArray = [];

function proveraFullName() {
  //full name error
  if (!regExFullName.test(fullName.value)) {
    fullNameError.innerHTML = 'Incorrect format <i class="fas fa-question-circle" data-toggle="tooltip" data-placement="bottom" title="e.g. John Doe"></i>';
    fullName.classList.add("greska");
    fullName.classList.remove("correct");
    return false;
  } else {
    fullNameError.textContent = "";
    fullName.classList.remove("greska");
    fullName.classList.add("correct");
    return true;
  }
}

function proveraMail() {
  //mail error
  if (!regExMail.test(mail.value)) {
    mailError.innerHTML = 'Please enter a valid email address. <i class="fas fa-question-circle" data-toggle="tooltip" data-placement="bottom" title="e.g. johndoe@example.com"></i>';
    mail.classList.add("greska");
    mail.classList.remove("correct");
    return false;
  } else {
    mailError.textContent = "";
    mail.classList.remove("greska");
    mail.classList.add("correct");
    return true;
  }
}

function proveraCashCard() {
  //provera da li je izabran metod placanja
  var value;

  var _boolean;

  for (var _i11 = 0; _i11 < payment.length; _i11++) {
    if (!payment[_i11].checked) {
      paymentError.innerHTML = "Required";
      _boolean = false;
      continue;
    } else {
      paymentError.innerHTML = "";
      _boolean = true;
      value = payment[_i11].value;
      break;
    }
  }

  return {
    value: value,
    "boolean": _boolean
  };
}

var from,
    to,
    today,
    disabledDate = document.getElementById("drop");
disabledDate.disabled = true; //postavljanje danasnjeg dana kao minimalnu vrednostu u pick up polje

var today1 = new Date(),
    day = today1.getDate(),
    month = today1.getMonth() + 1,
    year = today1.getFullYear();

if (day < 10) {
  day = '0' + day;
}

if (month < 10) {
  month = '0' + month;
}

today1 = year + '-' + month + '-' + day;
pick.setAttribute("min", today1);
localStorage.setItem("proveriDatumIsteka", today1); // za proveru datuma ako je tekuci dan isti poslednjem danu prethodnog perioda trajanja usluge tj. za brisanje local storage-a

var ukupanBrojDana,
    maksBrojDana = 30,
    daniMs = 86400000; //broj milisekundi u jednom danu, potrebno za kasnije racunanje broja dana -- proveraPick() i proveraDrop()

var proveraPick = function proveraPick() {
  //uzimanje vrednosti iz polja -- date
  from = new Date(pick.value);
  to = new Date(drop.value); //uzimanje vrednosti tekuceg dana

  today = new Date(); //postavljanje broja sati trenutnog dana radi poredjenja sa drugim datumom

  today.setHours(1, 0, 0);
  ukupanBrojDana = (to - from) / daniMs; //provera da li je datum uopste izabran

  if (isNaN(from) && isNaN(to)) {
    pickError.innerHTML = "Please choose a pick up date!";
    pick.classList.add("greska");
    pick.classList.remove("correct");
    dropError.innerHTML = "";
    return false;
  } else if (from.toString() == today.toString()) {
    //provera da li se pocetni dan poklapa sa tekucim danom
    pickError.innerHTML = "We need at least one day from today to proccess your request!";
    pick.classList.add("greska");
    pick.classList.remove("correct");
    allError.innerHTML = "";
    return false;
  } else if (from.toString() == to.toString()) {
    //provera da li se poklapaju dani
    allError.innerHTML = "You can't rent a car for the same day!";
    pick.classList.add("greska");
    pick.classList.remove("correct");
    drop.classList.add("greska");
    drop.classList.remove("correct");
    pickError.innerHTML = "";
    dropError.innerHTML = "";
    return false;
  } else if (from > to) {
    allError.innerHTML = "Pick up date can't be after drop off date!";
    pick.classList.add("greska");
    pick.classList.remove("correct");
    pickError.innerHTML = "";
    dropError.innerHTML = "";
    return false;
  } else if (ukupanBrojDana > maksBrojDana) {
    allError.innerHTML = "You can't rent a car for more than 30 days!";
    pickError.innerHTML = "";
    pick.classList.add("greska");
    pick.classList.remove("correct");
    drop.classList.add("greska");
    drop.classList.remove("correct");
    return false;
  } else {
    //ako je sve ispunjeno
    allError.innerHTML = "";
    pickError.innerHTML = "";
    pick.classList.remove("greska");
    pick.classList.add("correct");
    disabledDate.disabled = false;

    if (ukupanBrojDana <= 30 && !(from.toString() == today.toString())) {
      // malo dublja provera za polje ranije
      dropError.innerHTML = "";
      drop.classList.add("correct");
      drop.classList.remove("greska");
    }

    return true;
  }
};

var proveraDrop = function proveraDrop() {
  //uzimanje vrednosti iz polja -- date
  from = new Date(pick.value);
  to = new Date(drop.value); //brojanje ukupnog broja dana koliko korisnik zeli da rentuje automobil

  ukupanBrojDana = (to - from) / daniMs; //provera da li je izabran drop off datum

  if (isNaN(to)) {
    dropError.innerHTML = "Please choose a drop off date!";
    drop.classList.add("greska");
    drop.classList.remove("correct");
    return false;
  } else if (to.toString() == from.toString()) {
    //provera da li se poklapaju dani
    allError.innerHTML = "You can't rent a car for the same day!";
    drop.classList.add("greska");
    drop.classList.remove("correct");
    pick.classList.add("greska");
    pick.classList.remove("correct");
    dropError.innerHTML = "";
    pickError.innerHTML = "";
    return false;
  } else if (to < from) {
    allError.innerHTML = "Drop off date can't be before pick up date!";
    drop.classList.add("greska");
    drop.classList.remove("correct");
    dropError.innerHTML = "";
    pickError.innerHTML = "";
    return false;
  } else if (ukupanBrojDana > maksBrojDana) {
    allError.innerHTML = "You can't rent a car for more than 30 days!";
    drop.classList.add("greska");
    drop.classList.remove("correct");
    pick.classList.add("greska");
    pick.classList.remove("correct");
    dropError.innerHTML = "";
    return false;
  } else {
    //ako je sve ispunjeno
    allError.innerHTML = "";
    dropError.innerHTML = "";
    drop.classList.remove("greska");
    drop.classList.add("correct");

    if (ukupanBrojDana <= 30 && !(from.toString() == today.toString())) {
      // malo dublja provera za polje ranije
      pickError.innerHTML = "";
      pick.classList.add("correct");
      pick.classList.remove("greska");
    }

    return true;
  }
};

pick.onchange = function () {
  // za svako izlazenje iz polja da proveri vrednosti unete u odredjeno polje
  proveraPick();
};

drop.onchange = function () {
  // za svako izlazenje iz polja da proveri vrednosti unete u odredjeno polje
  proveraDrop();
};

var cardMade = 0; //za pravljenje nova 3 polja ako je korisnik izabrao karticu

payment[1].onclick = function () {
  if (cardMade == 0) {
    var placeholder = ["MM/YY", "***"];
    var id = ["validThru", "cvv"];
    var labelMain = ["Expiration date:", "CVV:"];
    var parentDiv = document.getElementById("card");
    var formMore = document.createElement("div");
    formMore.classList.add("d-flex", "justify-content-between", "flex-wrap", "mt-2", "mb-2", "cardHolder");
    var input1 = document.createElement("input");
    input1.classList.add("w-100");
    input1.setAttribute("type", "text");
    input1.setAttribute("placeholder", "Card number: 5XXXXXXXXXXXXXXX");
    input1.setAttribute("id", "cardContent");
    var inputGreska = document.createElement("span");
    inputGreska.classList.add("greskaTekst", "w-100");
    inputGreska.setAttribute("id", "cardNumberError");
    formMore.appendChild(input1);
    formMore.appendChild(inputGreska);

    for (var _i12 = 0; _i12 < 2; _i12++) {
      var wrap = document.createElement("div");
      wrap.classList.add("w-50");
      formMore.appendChild(wrap);
      var label = document.createElement("label");
      label.classList.add("w-100");
      label.setAttribute("for", id[_i12]);
      var labelText = document.createTextNode(labelMain[_i12]);
      label.appendChild(labelText);
      wrap.appendChild(label);
      var input2 = document.createElement("input");
      input2.classList.add("w-50");
      input2.setAttribute("type", "text");
      input2.setAttribute("placeholder", placeholder[_i12]);
      input2.setAttribute("id", id[_i12]);
      wrap.appendChild(input2);
    } //greska


    var idGreska = ["expDateError", "cvvError"];

    for (var _i13 = 0; _i13 < idGreska.length; _i13++) {
      var greske = document.createElement("div");
      greske.classList.add("w-50");
      formMore.appendChild(greske);
      var span = document.createElement("span");
      span.setAttribute("id", idGreska[_i13]);
      span.classList.add("greskaTekst");
      greske.appendChild(span);
    }

    cardMade++;
    parentDiv.appendChild(formMore);
  } // za proveru nakon izlaska iz polja za karticu


  document.getElementById("validThru").onchange = function () {
    proveraExpDate();
  };

  document.getElementById("cvv").onchange = function () {
    proveraCvv();
  };

  document.getElementById("cardContent").onchange = function () {
    proveraCardNumber();
  };
}; //provera da li je korisnik uneo broj kartice


function proveraCardNumber() {
  //pocinju sa brojem 5 i ima maks 16 brojeva
  var regExCardNumber = /^5[0-9]{15}$/; // jedino ovako prihvata ako korisnik zeli automatski da unese broj mastercard kartice koju vec ima sacuvanu u browser-u

  var cardNumber = document.getElementById("cardContent");
  var cardNumberError = document.getElementById("cardNumberError");

  if (!regExCardNumber.test(cardNumber.value)) {
    cardNumberError.innerHTML = "Format: 5XXXXXXXXXXXXXXX(16 digits)";
    cardNumber.classList.add("greska");
    cardNumber.classList.remove("correct");
    return false;
  } else {
    cardNumberError.innerHTML = "";
    cardNumber.classList.remove("greska");
    cardNumber.classList.add("correct");
    return true;
  }
}

function proveraExpDate() {
  // provera da li je kartica validna najmanje 5 godina
  var regExExpDate = /^([0][1-9]|[1-2][0-2])\/(([2][0-6])|([2][0][2-3][0-6]))$/; // MM/YY ili MM/YYYY

  var expDate = document.getElementById("validThru");
  var expDateError = document.getElementById("expDateError");

  if (!regExExpDate.test(expDate.value)) {
    expDateError.innerHTML = 'Incorrect format <i class="fas fa-question-circle" data-toggle="tooltip" data-placement="bottom" title="e.g. 05/21 OR 05/2021"></i>';
    expDate.classList.add("greska");
    expDate.classList.remove("correct");
    return false;
  } else {
    expDateError.textContent = "";
    expDate.classList.remove("greska");
    expDate.classList.add("correct");
    return true;
  }
} //provera da li je unet cvv/cvc


function proveraCvv() {
  var regExCvv = /^[0-9]{3}$/;
  var cvv = document.getElementById("cvv");
  var cvvError = document.getElementById("cvvError");

  if (!regExCvv.test(cvv.value)) {
    cvvError.innerHTML = 'Incorrect format <i class="fas fa-question-circle" data-toggle="tooltip" data-placement="bottom" title="e.g. 123"></i>';
    cvv.classList.add("greska");
    cvv.classList.remove("correct");
    return false;
  } else {
    cvvError.textContent = "";
    cvv.classList.remove("greska");
    cvv.classList.add("correct");
    return true;
  }
}

function proveraType() {
  //provera da li je izabran brend automobila
  if (type.options[type.options.selectedIndex].value != 0) {
    brandError.textContent = "";
    return true;
  } else {
    brandError.textContent = "You must choose brand!";
    return false;
  }
} //za promene izlaskom iz polja


fullName.onchange = function () {
  proveraFullName();
};

mail.onchange = function () {
  proveraMail();
}; //za menjanje metoda placanja


payment.forEach(function (selected) {
  return selected.onchange = function () {
    proveraCashCard();
  };
}); //ako je korisnik izabrao cash

payment[0].onclick = function () {
  if (cardMade > 0) {
    document.querySelector(".cardHolder").remove();
    cardMade--;
  }
}; //provera nakon klika da li su pravilno uneti svi podaci


document.getElementById("form").onsubmit = function (e) {
  e.preventDefault();
  var fullName = proveraFullName();
  var mail = proveraMail();
  var type = proveraType();
  var cashOrCard = proveraCashCard();
  var bool = cashOrCard["boolean"];
  var cardValue = cashOrCard.value;
  var pick = proveraPick();
  var drop = proveraDrop(); // provera za karticu

  if (cardValue == payment[1].value) {
    var exp = proveraExpDate();

    var _cvv = proveraCvv();

    var card = proveraCardNumber(); //provera novih polja za karticu

    if (exp && _cvv && card) {
      celokupnaProvera(fullName, mail, type, bool, pick, drop);
    }
  } // provera za cash


  if (cardValue == payment[0].value) {
    celokupnaProvera(fullName, mail, type, bool, pick, drop);
  }
};

if (localStorage.getItem("proveriDatumIsteka") == localStorage.getItem("vremeIsteka")) {
  // ako je poslednji dan prethodnog perioda jednak danasnjem, onda se brise local storage
  localStorage.clear();
}

function celokupnaProvera(imeProvera, mailProvera, typeProvera, cashCardProvera, proveraPick, proveraDrop) {
  //provera svih unetih podataka
  if (imeProvera && mailProvera && typeProvera && cashCardProvera && proveraPick && proveraDrop) {
    if (dataArray.length == 0 && localStorage.getItem("poslato") == null) {
      //upisivanje podataka u niz
      dataArray.push(fullName.value);
      dataArray.push(mail.value);
      dataArray.push(type.options[type.options.selectedIndex].value);
      dataArray.push(model.options[model.options.selectedIndex].text);
      dataArray.push(ukupanBrojDana * izabranAuto);
      var firstName = dataArray[0].split(" "); // upis podataka u local storage

      localStorage.setItem("ime", firstName[0]);
      localStorage.setItem("brend", dataArray[2]);
      localStorage.setItem("model", dataArray[3]);
      localStorage.setItem("vremeIsteka", drop.value);
      modal();
    } else {
      modal();
    }
  }
} //dinamicko kreiranje modala 


function modal() {
  var modal = document.getElementById("modal");
  var row = document.createElement("div");
  row.classList.add("row", "regenerate");
  var header = document.createElement("div");
  header.setAttribute("id", "header");
  header.classList.add("col-12", "text-left", "p-3");
  var headerNaslov = document.createElement("h2");
  headerNaslov.innerHTML += "CAR <span>ZONE</span>";
  var body = document.createElement("div");
  body.setAttribute("id", "body");
  body.classList.add("col-12", "p-2");
  var p = document.createElement("p");

  if (localStorage.getItem("poslato") == "true") {
    // ako su podaci uneti vec u lokal storage
    p.innerHTML = "Oops, looks like you have already sent the request for the <span>".concat(localStorage.getItem("brend"), " ").concat(localStorage.getItem("model"), "</span>!<br> You can make another request after <span>").concat(localStorage.getItem("vremeIsteka"), "</span>");
  } else {
    localStorage.setItem("poslato", "true");
    p.innerHTML = "Dear <span>".concat(localStorage.getItem("ime"), "</span>, you've successfully sent the request for the <span>").concat(localStorage.getItem("brend"), " ").concat(localStorage.getItem("model"), "</span>, all other information has been sent to your mail.</br>\n    <span>").concat(dataArray[1], "</br></span> <span class=\"modalTotal\"> TOTAL: <i class=\"fas fa-dollar-sign\"></i> ").concat(dataArray[4], "</span>");
  }

  var footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  footer.classList.add("col-12", "text-right");
  var button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("id", "closeModal");
  button.textContent = "Close";
  modal.appendChild(row);
  row.appendChild(header);
  header.appendChild(headerNaslov);
  row.appendChild(body);
  row.appendChild(footer);
  body.appendChild(p);
  footer.appendChild(button);
  modal.style.visibility = "visible";

  button.onclick = function () {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0"; //brisanje prethodnog niza i modala

    row.remove();
  };
} //ispisivanje testimonials-a


function testimonials() {
  var testimonials = [["assets/img/test1.png", "During all the years we have rented a car from you, there has never been any problems. We are satisfied with both price and quality of your cars!", "Michael De Santa"], ["assets/img/test2.png", "Thank you all once again for your exceptional service level. The customer experience served by everyone at CarZone is 1st class!", "Trevor Philips"], ["assets/img/test3.png", "Friendly and reliable service on site. The booking went smoothly and was handled quickly. The car was perfect and very new!", "Franklin Clinton"]];
  var parent = document.getElementById("testimonials");

  for (var _i14 = 0; _i14 < testimonials.length; _i14++) {
    parent.innerHTML += " <div class=\"col-12 col-md-4 mb-3 mb-md-0\">\n        <div class=\"col-12 testContent p-3\">\n            <i class=\"fas fa-quote-right\"></i>\n            <div class=\"d-flex justify-content-center p-2\">\n                <div class=\"testImage\">\n                    <img src=\"".concat(testimonials[_i14][0], "\" alt=\"guy\">\n                </div>\n            </div>\n            <span><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i></span>\n            <blockquote class=\"blockquote text-center\">\n                <p class=\"mb-0\">").concat(testimonials[_i14][1], "</p>\n                <footer class=\"blockquote-footer\"><cite>").concat(testimonials[_i14][2], "</cite></footer>\n              </blockquote>\n        </div>\n    </div>");
  }
} // ispisivanje sekcije about us


function about() {
  sadrzajTab = [["What we're about", "We want to make renting a car as simple and personal as driving your own. Renting a car brings you freedom, and we'll help you find the right car for you at a great price. But there's much more to us than that. We're here to make renting a car a lot less hassle."], ["How we work", "Making sure you have a great experience every time you rent a car makes us happy. We use our massive buying power to bring you great deals."], ["Why use us", "We use all our experience – and the experiences of thousands of our customers – to bring you the car you need and the quality of service you want. Always at the best price."], ["Who we are", "Our founders had the simple idea of wanting to make renting cars much better. And we’ve flourished because our customers love how we work."]];
  var tab = document.getElementsByClassName("tab-content");

  for (var _i15 = 0; _i15 < sadrzajTab.length; _i15++) {
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    h3.textContent = sadrzajTab[_i15][0];
    p.textContent = sadrzajTab[_i15][1];

    tab[_i15].appendChild(h3);

    tab[_i15].appendChild(p);
  }
} // Ispisivanje informacije o autoru


function autor() {
  var naziv = "Adam Nikolić";
  var brIndeksa = "101/19";
  var tekst = "Hi. I'm a web developer from Požega, Serbia. Right now I'm studying Internet Technologies at Information and Communication Technologies College in Belgrade and I'm pursuing career in Web programming.";
  var parent = document.getElementById("box");
  parent.innerHTML = "<div class=\"col-12 col-md-5 p-0\">\n    <img src=\"assets/img/autor.jpg\" class=\"img-fluid\" alt=\"autor\">\n</div>\n<div class=\"col-12 col-md-7 p-0 p-lg-5 pb-2 pb-md-0\" id=\"infoAutor\">\n    <div class=\"row m-0\">\n        <div class=\"col-12 d-flex justify-content-end p-1\">\n            <button type=\"button\" id=\"closeAutor\"><i class=\"fas fa-times\"></i></button>\n        </div>\n    </div>\n    <div class=\"row m-0\">\n        <div class=\"col-12 p-1 font-weight-bold\">\n            <h3 class=\"text-center font-weight-bold\">".concat(naziv, " <span>").concat(brIndeksa, "</span></h3>\n            <p>").concat(tekst, "\n            </p>\n        </div>\n    </div>\n    <div class=\"row m-0\">\n        <div class=\"col-12 d-flex flex-row flex-wrap linkovi justify-content-center\">\n            <div >\n               <a href=\"https://github.com/adamnik101\"><button type=\"button\" class=\"linkBtn\"><i class=\"fab fa-github-alt\"></i></button></a> \n               <a href=\"https://www.linkedin.com\"><button type=\"button\" class=\"linkBtn\"><i class=\"fab fa-linkedin-in\"></i></button></a>\n               <a href=\"https://www.twitter.com\"><button type=\"button\" class=\"linkBtn\"><i class=\"fab fa-twitter\"></i></button></a>\n               <a href=\"https://adamnik101.github.io/adamportfolio/index.html\"><button type=\"button\" class=\"linkBtn\"><i class=\"fas fa-address-book\"></i></button></a>\n            </div>                          \n        </div>\n    </div>  \n</div>");
}

$(document).ready(function () {
  $(window).on("load", function () {
    $('.preloader').fadeOut('slow'); // za ucitavanje preloader-a dok se cela stranica ne ucita
  }); //animacija sidenav elemenata liste linkova

  $("#clickSide").click(function () {
    $(".slideIn").each(function (i) {
      $(this).delay(200 * i).animate({
        left: "0",
        opacity: "1"
      }, 700);
    }); // da se tekstovi ne bi raspadali prilikom smanjivanja side navigacije

    $("#naslovSide").delay(500).animate({
      opacity: "1"
    }, 200);
    $("#copy").delay(500).animate({
      opacity: "1"
    }, 200);
    $("#openSide").css("box-shadow", "0 0 0 10000px rgba(0,0,0,.50)"); // box shadow za efekat van side navigacije
  });
  $("#closeSide").click(function () {
    // za animaciju svakog elementa liste jedan nakog drugog
    $(".slideIn").each(function () {
      $(this).animate({
        left: "-250px"
      }).finish(); // finish() da bi se zaustavilo beskonacno ponavljanje animacije ukoliko se brze otvara i zatvara side navigacija
    });
    $("#naslovSide").css("opacity", "0");
    $("#copy").css("opacity", "0");
    $("#openSide").css("box-shadow", "none");
  }); //tooltip inicijalizacija bootstrap

  $('body').tooltip({
    selector: '.fa-question-circle'
  }); //canvasTekst animacija sa desno na levo

  $(".canvasTekst").animate({
    right: "0"
  }, 2000); //animations card block & btn top

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".sectionContent").each(function (i) {
        $(this).delay(200 * i).animate({
          opacity: "1",
          top: "0"
        }, "slow");
      });
    }

    if ($(this).scrollTop() > 900) {
      $(".featured").animate({
        left: "0",
        opacity: "1"
      });
    }

    if ($(this).scrollTop() > 300) {
      $('#btnTop').fadeIn();
    } else {
      $('#btnTop').fadeOut();
    }
  }); //glatka animacija nakon klika na dugme za gore i mali delay

  $('#btnTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 0);
    return false;
  }); //animacija artikala sa automobilima koji se prikazuju sa animacijom jedan nakon drugog

  var i = 0; // moglo je i preko indeks u each ali bi se drugim klikom cekalo i na prva 3 elementa

  var delay = 0;
  $("#loadMore").click(function () {
    delay = 0;
    $(".slide").each(function () {
      $(".slide").eq(i).delay(450 * delay++).animate({
        top: "0",
        opacity: "1"
      }), i++;
    });
  }); //plugin za carousel aka owl-carousel

  $(".first-owl").owlCarousel({
    responsiveClass: true,
    animateIn: true,
    autoplay: true,
    rewind: true,
    loop: false,
    nav: false,
    dots: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1
      },
      850: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  }); //dugmad za kontrolu owl-carousel

  var $owl = $(".first-owl");
  $("#btnDesno").click(function () {
    $owl.trigger("next.owl.carousel");
  });
  $("#btnLevo").click(function () {
    $owl.trigger("prev.owl.carousel");
  });
  $("#seeMoreModal").addClass("hide"); //pocetno stanje modala
  //dodavanje klasa i efekata modalu

  $(document).on("click", ".seeMore", function () {
    $("#seeMoreModal").fadeIn("fast");
    $("#seeMoreModal").addClass("block");
    $("#seeMoreModal").removeClass("hide"); // za zatvaranje modala

    $("#closeSeeMore").on("click", function () {
      $("#seeMoreModal").fadeOut("fast", function () {
        $("#seeMoreModal").addClass("hide");
        $("#seeMoreModal").removeClass("block");
      });
    }); // isti efekat i preko dugmeta request sa slanjem ka formi

    $(".request").on("click", function () {
      $("html,body").animate({
        scrollTop: $(".back").offset().top
      }, 0);
      $("#seeMoreModal").fadeOut("fast", function () {
        $("#seeMoreModal").addClass("hide");
        $("#seeMoreModal").removeClass("block");
      });
    }); // owl carousel u see more 

    $(".another-owl").owlCarousel({
      responsiveClass: true,
      loop: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
          autoplay: true
        }
      }
    });
    var $owl1 = $(".another-owl");
    $("#desno").click(function () {
      $owl1.trigger("next.owl.carousel");
    });
    $("#levo").click(function () {
      $owl1.trigger("prev.owl.carousel");
    });
  }); //za fadeOut efekat owl-carousel

  $("#fadeOwl").owlCarousel({
    animateOut: "fadeOut",
    autoplayTimeout: 10000,
    nav: false,
    loop: true,
    touchDrag: false,
    dots: false,
    autoplay: true,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1
      }
    }
  }); // prikazi prvog, a ostale sakrij

  $('#tabs-nav li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first').show(); //promeni klikom

  $('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn("slow");
    return false;
  }); //animacija pri prikazivanju modala nakon uspesnog popunjavanja forme

  $("#form").on("submit", function () {
    $("#modal").animate({
      opacity: "1"
    }, 1000);
    $("#modal .row").animate({
      opacity: "1",
      top: "0"
    }, 1000);
  });
  $("#autorBtn").click(function () {
    autor(); //kreiranje dinamicki

    $("#autor").fadeIn();
    $("#closeAutor").click(function () {
      $("#autor").fadeOut();
    });
  });
});