"use strict";

window.addEventListener("DOMContentLoaded", function () {
  navigacija1(), info1(), owlCarouselContent(), ispisCarContent(), ddl(), testimonials(), sideNav(), about(), typeClick();
}), window.onscroll = function () {
  scrollUp1();
};

var navigacija = [["<i class='fas fa-home'></i>", "Home"], ["<i class='fas fa-chalkboard-teacher'></i>", "Introduction"], ["<i class='fas fa-star'></i>", "Featured"], ["<i class='fas fa-car'></i>", "Rent a car"], ["<i class='fas fa-user'></i>", "Testimonials"], ["<i class='far fa-address-card'></i>", "About us"]],
    navigacijaLinkovi = ["index.html", "#naslov", "#featuredSection", "#formNaslov", "#TestimonialsSection", "#about"],
    navigacija1 = function navigacija1() {
  var a = document.getElementById("navigacija"),
      b = document.createElement("nav");
  b.className = "d-flex align-items-center justify-content-center", a.appendChild(b);
  var c = document.createElement("ul");

  for (indeks in c.className = "d-flex justify-content-around", b.appendChild(c), navigacija) {
    var _a = document.createElement("li");

    c.appendChild(_a);

    var _b = document.createElement("a");

    _a.appendChild(_b), _b.setAttribute("href", "".concat(navigacijaLinkovi[indeks])), _b.textContent = "".concat(navigacija[indeks][1]);
  }
};

function scrollUp1() {
  var a = document.getElementById("btnTop");
  a.style.visibility = 500 < document.body.scrollTop || 500 < document.documentElement.scrollTop ? "visible" : "hidden";
}

var info1 = function info1() {
  var a = ["WELCOME TO OUR SITE", "CAR", "ZONE"],
      b = [["BRANDS", "We got latest and most popular brands from automotive industry", "fas fa-car"], ["ROAD SUPPORT", "24/7 available support to help you on road if you have any mechanical problem with our car", "fas fa-road"], ["AFFORDABLE", "Exotic cars that have best deals according to their performance", "fas fa-coins"]];
  document.getElementsByClassName("naslovContent")[0].innerHTML = "<div class=\"col-12 text-center naslov p-4\">\n<h4>".concat(a[0], "</h4>\n<span><i class=\"fas fa-angle-double-down\"></i></span>\n<h1><span>").concat(a[1], "</span> ").concat(a[2], "</h1>\n</div>");

  for (var _a2 = 0; _a2 < b.length - 1; _a2++) {
    document.getElementsByClassName("naslovContent")[0].innerHTML += "\n<div class=\"col-12 col-sm-6 col-lg-4 text-center\">\n<div class=\"col-12 sectionContent p-2 mb-3\">\n<i class=\"".concat(b[_a2][2], "\"></i>\n<h5>").concat(b[_a2][0], "</h5>\n<p>").concat(b[_a2][1], "</p>\n</div>\n</div>");
  }

  document.getElementsByClassName("naslovContent")[0].innerHTML += "\n<div class=\"col-12 col-sm-12 col-lg-4 text-center\">\n<div class=\"col-12 sectionContent p-2 mb-3\">\n<i class=\"".concat(b[2][2], "\"></i>\n<h5>").concat(b[2][0], "</h5>\n<p>").concat(b[2][1], "</p>\n</div>\n</div>");
},
    naslov = document.getElementById("naslov");

function sideNav() {
  var a = document.getElementById("openSide"),
      b = document.createElement("nav");
  a.appendChild(b);
  var c = document.createElement("button");
  c.textContent = "Close";
  var d = document.createElement("ul");

  for (indeks in b.appendChild(d), navigacija) {
    var _a3 = document.createElement("li");

    _a3.classList.add("slideIn"), d.appendChild(_a3);

    var _b2 = document.createElement("a");

    _a3.appendChild(_b2), _b2.setAttribute("href", "".concat(navigacijaLinkovi[indeks])), _b2.innerHTML = "".concat(navigacija[indeks][0] + " " + navigacija[indeks][1]);
  }
}

function openNav() {
  document.getElementById("openSide").style.width = "250px";
}

function closeNav() {
  document.getElementById("openSide").style.width = "0";
}

document.getElementById("clickSide").addEventListener("click", openNav), document.getElementById("closeSide").addEventListener("click", closeNav);
var carContent = [["assets/img/sports_civic1.jpg", "Honda Civic Type R", 120, "350hp"], ["assets/img/sports_supra1.jpg", "Toyota Supra", 300, "382hp"], ["assets/img/sports_subaru1.jpg", "Subaru Impreza STi", 130, "340hp"], ["assets/img/muscle_chevy.jpg", "Chevrolet ZL1", 180, "650hp"], ["assets/img/muscle_demon1.jpg", "Dodge Challenger", 200, "700hp"], ["assets/img/sports_benz1.jpg", "Mercedes 450 CLS", 160, "375hp"], ["assets/img/sports_evo.jpg", "Subaru WRX", 130, "360hp"], ["assets/img/sports_bmw1.jpg", "BMW 420d Coupe", 120, "310hp"], ["assets/img/sports_mitsubishi1.jpg", "Mitsubishi EVO X", 110, "290hp"], ["assets/img/muscle_mustang1.jpg", "Ford Mustang", 160, "750hp"], ["assets/img/sports_bmw2.jpg", "BMW X6m", 120, "310hp"], ["assets/img/suv_ford1.jpg", "Ford F-150", 160, "280hp"]],
    carsAndModels = {};
carsAndModels.Chevrolet = ["ZL1"], carsAndModels.Dodge = ["Challenger"], carsAndModels.BMW = ["420d Coupe", "X6m"], carsAndModels.Subaru = ["Impreza STi", "WRX"], carsAndModels.Mitsubishi = ["EVO X"], carsAndModels.Ford = ["Mustang", "F-150"], carsAndModels.Honda = ["Civic Type R"], carsAndModels.Toyota = ["Supra"], carsAndModels.Mercedes = ["450 CLS"];
var izabranAuto,
    cena = [[180], [200], [120], [130], [110], [160], [120], [300], [160]];

for (var a = 0; a < Object.keys(carsAndModels).length; a++) {
  cena[a].unshift(Object.keys(carsAndModels)[a]);
}

function ddl() {
  var a = document.createElement("option");
  a.setAttribute("value", "0");
  var b = document.createTextNode("Choose a model");
  a.appendChild(b), model.appendChild(a), model.disabled = !0, document.getElementById("carType").onchange = function () {
    model.disabled = "0" == this.value;
    var b = this.options[this.selectedIndex].value;

    for (model.appendChild(a); model.options.length;) {
      model.remove(0);
    }

    for (var _a4 = 0; _a4 < cena.length; _a4++) {
      b == cena[_a4][0] && (izabranAuto = cena[_a4][1]);
    }

    "0" == b && model.appendChild(a);
    var c = carsAndModels[b];
    if (c) for (var _a5, _b3 = 0; _b3 < c.length; _b3++) {
      _a5 = document.createElement("option"), _a5.setAttribute("value", _b3);
      var d = document.createTextNode(c[_b3]);
      _a5.appendChild(d), model.options.add(_a5), document.getElementById("brandError").textContent = "";
    }
  };

  (function () {
    var a = document.getElementById("carType");

    for (var _b4, c = 0; c < Object.keys(carsAndModels).length; c++) {
      _b4 = document.createElement("option"), _b4.setAttribute("value", Object.keys(carsAndModels)[c]);
      var d = document.createTextNode(Object.keys(carsAndModels)[c]);
      _b4.appendChild(d), a.appendChild(_b4);
    }
  })();
}

var random = [];

function generate() {
  for (var _a6, b = 0; b < carContent.length; b++) {
    _a6 = Math.floor(Math.random() * carContent.length), -1 == random.indexOf(_a6) ? random.push(_a6) : b--;
  }
}

var value = [];

function owlCarouselContent() {
  generate();
  var a = document.getElementById("automobili"),
      b = document.createElement("div");
  b.classList.add("owl-carousel", "first-owl"), a.appendChild(b);

  for (var _a7 = 0; _a7 < 6; _a7++) {
    value.push(carContent[random[_a7]][1].split(" ")), b.innerHTML += "<div class=\"slideContent\"><img src=\"".concat(carContent[random[_a7]][0], "\" alt=\"").concat(carContent[random[_a7]][1], "\"><h5>").concat(carContent[random[_a7]][1], "</h5>\n<p class=\"d-flex justify-content-between\"><span><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_a7]][2], "/day</span><a href=\"#formNaslov\"class=\"d-inline reqBtn\">Request now</a></p>\n</div>");
  }

  random = [];
}

function upisVrednosti() {
  var a = ["assets/img/seeMoreHonda.jpg", "assets/img/seeMoreSupra.jpeg", "assets/img/seeMoreRedSubaru.jpg", "assets/img/seeMoreChevy.jpg", "assets/img/seeMoreDemon.jpg", "assets/img/seeMoreMerc.jpeg", "assets/img/seeMoreSubaru.jpeg", "assets/img/seeMoreBmw.jpg", "assets/img/seeMore1.jpg", "assets/img/seeMoreMustang.jpeg", "assets/img/seeMoreBmw2.jpg", "assets/img/seeMoreFord.jpeg"],
      b = document.getElementsByClassName("seeMore"),
      c = document.getElementById("seeMoreModal"),
      d = document.getElementsByClassName("request"),
      e = document.getElementById("carType"),
      f = document.getElementById("carModel");

  var _loop = function _loop(g) {
    b[g].addEventListener("click", function () {
      b[g].value == carContent[random[g]][1] && (c.innerHTML = "<div class=\"row relative\"> <div class=\"col-12 p-0\"> <div id=\"header1\"> <div class=\"col-12 p-3 d-flex justify-content-between\"> <h2>CAR <span>ZONE</span></h2> <button type=\"button\" id=\"closeSeeMore\"><i class=\"fas fa-times-circle\"></i></button> </div></div><div id=\"body1\"> <div class=\"col-12 p-0\"><button type=\"button\" id=\"levo\"><i class=\"fas fa-angle-left\"></i></i></button><button type=\"button\" id=\"desno\"><i class=\"fas fa-angle-right\"></i></button><div class=\"owl-carousel another-owl\"> <img src=\"".concat(carContent[random[g]][0], "\" class=\"img-fluid\" alt=\"car\"> <img src=\"").concat(a[random[g]], "\" class=\"img-fluid\" alt=\"car\"></div> </div><div class=\"col-12 p-2\"> <h3 class=\"text-center\">").concat(carContent[random[g]][1], "</h3> <hr class=\"m-0\"> <div class=\"row m-0 p-0\"> <div class=\"col-6 p-0\"> <ul class=\"d-flex flex-column text-left p-2\"> <li> <i class=\"fas fa-check\"></i> Chilled AC </li><li> <i class=\"fas fa-check\"></i> Heated seats </li><li> <i class=\"fas fa-check\"></i> Audio input </li><li> <i class=\"fas fa-check\"></i> Bluetooth </li></ul> </div><div class=\"col-6 p-0\"> <ul class=\"d-flex flex-column text-left p-2\"> <li> <i class=\"fas fa-check\"></i> Manual </li><li> <i class=\"fas fa-check\"></i> Unlimited mileage </li><li> <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[g]][3], " </li></ul> </div></div></div><div class=\"row m-0\"> <div class=\"col-12 font-weight-bold euro\"> <i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[g]][2], "<span>/ per day</span> </div></div></div><div id=\"footer1\" class=\"text-right\"> <button type=\"button\" class=\"request\">Request now!</button> </div></div></div>"));

      for (var _a8 = 0; _a8 < d.length; _a8++) {
        d[_a8].addEventListener("click", function () {
          for (var _a9 = 1; _a9 < e.options.length; _a9++) {
            e.options[_a9].value == carTypeName[g][0] && (e.selectedIndex = _a9, e.onchange(), 1 < f.options.length && (f.options[f.selectedIndex].text.includes(carTypeName[g][1]) ? f.selectedIndex = 0 : f.selectedIndex = 1));
          }
        });
      }
    });
  };

  for (var g = 0; g < b.length; g++) {
    _loop(g);
  }
}

var carTypeName = [];

function ispisCarContent() {
  generate();
  var a = 3,
      b = 6;
  var c = document.getElementById("showCars");

  for (var _a10 = 0; _a10 < b; _a10++) {
    c.innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4 scale\">\n<div class=\"imgHolder\">\n<img src=\"".concat(carContent[random[_a10]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[_a10]][1], "\">\n</div>\n<div class=\"holder\">\n<h5 class=\"mb-3\">").concat(carContent[random[_a10]][1], "</h5>\n<p><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_a10]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[_a10]][3], "</p>\n<button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[_a10]][1], "\">See more</button>\n</div>\n</div>"), carTypeName.push(carContent[random[_a10]][1].split(" "));
  }

  upisVrednosti();
  var d = 0;
  document.getElementById("loadMore").addEventListener("click", function () {
    if (1 == d && (document.getElementById("loadMore").style.display = "none"), 0 == d) {
      for (var _c, _d = b; _d < b + a; _d++) {
        _c = document.createElement("div"), _c.classList.add("slide", "col-lg-4", "mr-auto", "col-12", "col-sm-6", "mb-4", "scale"), document.getElementById("showCars").appendChild(_c), _c.innerHTML += "\n<div class=\"imgHolder\">\n<img src=\"".concat(carContent[random[_d]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[_d]][1], "\">\n</div>\n<div class=\"holder\">\n<h5 class=\"mb-3\">").concat(carContent[random[_d]][1], "</h5>\n<p><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_d]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[_d]][3], "</p>\n<button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[_d]][1], "\">See more</button>\n</div>"), carTypeName.push(carContent[random[_d]][1].split(" "));
      }

      upisVrednosti();
    }

    if (0 < d) {
      for (var _c2 = b + a; _c2 < carContent.length; _c2++) {
        document.getElementById("showCars").innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4 slide scale\">\n<div class=\"imgHolder\">\n<img src=\"".concat(carContent[random[_c2]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[_c2]][1], "\">\n</div>\n<div class=\"holder\">\n<h5 class=\"mb-3\">").concat(carContent[random[_c2]][1], "</h5>\n<p><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_c2]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[_c2]][3], "</p>\n<button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[_c2]][1], "\">See more</button>\n</div></div>"), carTypeName.push(carContent[random[_c2]][1].split(" "));
      }

      upisVrednosti();
    }

    d++;
  });
}

function typeClick() {
  var a = document.getElementById("carType"),
      b = document.getElementById("carModel"),
      c = document.getElementsByClassName("reqBtn");

  var _loop2 = function _loop2(d) {
    c[d].addEventListener("click", function () {
      for (var _c3 = 1; _c3 < type.options.length; _c3++) {
        a.options[_c3].value == value[d][0] && (a.selectedIndex = _c3, a.onchange(), 1 < b.options.length && (b.options[b.selectedIndex].text.includes(value[d][1]) ? b.selectedIndex = 0 : b.selectedIndex = 1));
      }
    });
  };

  for (var d = 0; d < c.length; d++) {
    _loop2(d);
  }
}

var fullName = document.getElementById("fullName"),
    mail = document.getElementById("mail"),
    payment = document.getElementsByName("payment"),
    type = document.getElementById("carType"),
    cvv = document.getElementById("cvv"),
    model = document.getElementById("carModel"),
    pick = document.getElementById("pick"),
    drop = document.getElementById("drop"),
    fullNameError = document.getElementById("fullNameError"),
    mailError = document.getElementById("mailError"),
    paymentError = document.getElementById("paymentError"),
    dateError = document.getElementById("dateError"),
    cvvError = document.getElementById("cvvError"),
    brandError = document.getElementById("brandError"),
    regExFullName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,14}(\s[A-ZČĆŽŠĐ][a-zšđčćž]{2,19})+$/,
    regExMail = /^[a-z][a-z\.\d-\_]+\@[a-z]+(\.[a-z]+)+$/,
    dataArray = [];

function proveraFullName() {
  return regExFullName.test(fullName.value) ? (fullNameError.textContent = "", fullName.classList.remove("greska"), fullName.classList.add("correct"), !0) : (fullNameError.innerHTML = "Incorrect format <i class=\"fas fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"e.g. John Doe\"></i>", fullName.classList.add("greska"), fullName.classList.remove("correct"), !1);
}

function proveraMail() {
  return regExMail.test(mail.value) ? (mailError.textContent = "", mail.classList.remove("greska"), mail.classList.add("correct"), !0) : (mailError.innerHTML = "Please enter a valid email address. <i class=\"fas fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"e.g. johndoe@example.com\"></i>", mail.classList.add("greska"), mail.classList.remove("correct"), !1);
}

function proveraCashCard() {
  var a, b;

  for (var c = 0; c < payment.length; c++) {
    if (!payment[c].checked) {
      paymentError.innerHTML = "Required", b = !1;
      continue;
    } else {
      paymentError.innerHTML = "", b = !0, a = payment[c].value;
      break;
    }
  }

  return {
    value: a,
    "boolean": b
  };
}

var from,
    to,
    today,
    disabledDate = document.getElementById("drop");
disabledDate.disabled = !0;
var today1 = new Date(),
    day = today1.getDate(),
    month = today1.getMonth() + 1,
    year = today1.getFullYear();
10 > day && (day = "0" + day), 10 > month && (month = "0" + month), today1 = year + "-" + month + "-" + day, pick.setAttribute("min", today1), localStorage.setItem("proveriDatumIsteka", today1);

var ukupanBrojDana,
    maksBrojDana = 30,
    daniMs = 864e5,
    proveraPick = function proveraPick() {
  return from = new Date(pick.value), to = new Date(drop.value), today = new Date(), today.setHours(1, 0, 0), ukupanBrojDana = (to - from) / daniMs, isNaN(from) && isNaN(to) ? (pickError.innerHTML = "Please choose a pick up date!", pick.classList.add("greska"), pick.classList.remove("correct"), dropError.innerHTML = "", !1) : from.toString() == today.toString() ? (pickError.innerHTML = "We need at least one day from today to proccess your request!", pick.classList.add("greska"), pick.classList.remove("correct"), allError.innerHTML = "", !1) : from.toString() == to.toString() ? (allError.innerHTML = "You can't rent a car for the same day!", pick.classList.add("greska"), pick.classList.remove("correct"), drop.classList.add("greska"), drop.classList.remove("correct"), pickError.innerHTML = "", dropError.innerHTML = "", !1) : from > to ? (allError.innerHTML = "Pick up date can't be after drop off date!", pick.classList.add("greska"), pick.classList.remove("correct"), pickError.innerHTML = "", dropError.innerHTML = "", !1) : ukupanBrojDana > maksBrojDana ? (allError.innerHTML = "You can't rent a car for more than 30 days!", pickError.innerHTML = "", pick.classList.add("greska"), pick.classList.remove("correct"), drop.classList.add("greska"), drop.classList.remove("correct"), !1) : (allError.innerHTML = "", pickError.innerHTML = "", pick.classList.remove("greska"), pick.classList.add("correct"), disabledDate.disabled = !1, 30 >= ukupanBrojDana && from.toString() != today.toString() && (dropError.innerHTML = "", drop.classList.add("correct"), drop.classList.remove("greska")), !0);
},
    proveraDrop = function proveraDrop() {
  return from = new Date(pick.value), to = new Date(drop.value), ukupanBrojDana = (to - from) / daniMs, maksBrojDana = 30, isNaN(to) ? (dropError.innerHTML = "Please choose a drop off date!", drop.classList.add("greska"), drop.classList.remove("correct"), !1) : to.toString() == from.toString() ? (allError.innerHTML = "You can't rent a car for the same day!", drop.classList.add("greska"), drop.classList.remove("correct"), pick.classList.add("greska"), pick.classList.remove("correct"), dropError.innerHTML = "", pickError.innerHTML = "", !1) : to < from ? (allError.innerHTML = "Drop off date can't be before pick up date!", drop.classList.add("greska"), drop.classList.remove("correct"), dropError.innerHTML = "", pickError.innerHTML = "", !1) : ukupanBrojDana > maksBrojDana ? (allError.innerHTML = "You can't rent a car for more than 30 days!", drop.classList.add("greska"), drop.classList.remove("correct"), pick.classList.add("greska"), pick.classList.remove("correct"), dropError.innerHTML = "", !1) : (allError.innerHTML = "", dropError.innerHTML = "", drop.classList.remove("greska"), drop.classList.add("correct"), 30 >= ukupanBrojDana && from.toString() != today.toString() && (pickError.innerHTML = "", pick.classList.add("correct"), pick.classList.remove("greska")), !0);
};

pick.onchange = function () {
  proveraPick();
}, drop.onchange = function () {
  proveraDrop();
};
var cardMade = 0;

payment[1].onclick = function () {
  if (0 == cardMade) {
    var b = ["MM/YY", "***"],
        c = ["validThru", "cvv"],
        d = ["Expiration date:", "CVV:"],
        e = document.getElementById("card"),
        f = document.createElement("div");
    f.classList.add("d-flex", "justify-content-between", "flex-wrap", "mt-2", "mb-2", "cardHolder");
    var g = document.createElement("input");
    g.classList.add("w-100"), g.setAttribute("type", "text"), g.setAttribute("placeholder", "Card number: 5XXXXXXXXXXXXXXX"), g.setAttribute("id", "cardContent");
    var h = document.createElement("span");
    h.classList.add("greskaTekst", "w-100"), h.setAttribute("id", "cardNumberError"), f.appendChild(g), f.appendChild(h);

    for (var _a11, _e = 0; 2 > _e; _e++) {
      _a11 = document.createElement("div"), _a11.classList.add("w-50"), f.appendChild(_a11);

      var _g = document.createElement("label");

      _g.classList.add("w-100"), _g.setAttribute("for", c[_e]);

      var _h = document.createTextNode(d[_e]);

      _g.appendChild(_h), _a11.appendChild(_g);
      var i = document.createElement("input");
      i.classList.add("w-50"), i.setAttribute("type", "text"), i.setAttribute("placeholder", b[_e]), i.setAttribute("id", c[_e]), _a11.appendChild(i);
    }

    var a = ["expDateError", "cvvError"];

    for (var _b5, _c4 = 0; _c4 < a.length; _c4++) {
      _b5 = document.createElement("div"), _b5.classList.add("w-50"), f.appendChild(_b5);

      var _d2 = document.createElement("span");

      _d2.setAttribute("id", a[_c4]), _d2.classList.add("greskaTekst"), _b5.appendChild(_d2);
    }

    cardMade++, e.appendChild(f);
  }

  document.getElementById("validThru").onchange = function () {
    proveraExpDate();
  }, document.getElementById("cvv").onchange = function () {
    proveraCvv();
  }, document.getElementById("cardContent").onchange = function () {
    proveraCardNumber();
  };
};

function proveraCardNumber() {
  var a = document.getElementById("cardContent"),
      b = document.getElementById("cardNumberError");
  return /^5[0-9]{15}$/.test(a.value) ? (b.innerHTML = "", a.classList.remove("greska"), a.classList.add("correct"), !0) : (b.innerHTML = "Format: 5XXXXXXXXXXXXXXX(16 digits)", a.classList.add("greska"), a.classList.remove("correct"), !1);
}

function proveraExpDate() {
  var a = document.getElementById("validThru"),
      b = document.getElementById("expDateError");
  return /^([0][1-9]|[1-2][0-2])\/(([2][0-6])|([2][0][2-3][0-6]))$/.test(a.value) ? (b.textContent = "", a.classList.remove("greska"), a.classList.add("correct"), !0) : (b.innerHTML = "Incorrect format <i class=\"fas fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"e.g. 05/21 OR 05/2021\"></i>", a.classList.add("greska"), a.classList.remove("correct"), !1);
}

function proveraCvv() {
  var a = document.getElementById("cvv"),
      b = document.getElementById("cvvError");
  return /^[0-9]{3}$/.test(a.value) ? (b.textContent = "", a.classList.remove("greska"), a.classList.add("correct"), !0) : (b.innerHTML = "Incorrect format <i class=\"fas fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"e.g. 123\"></i>", a.classList.add("greska"), a.classList.remove("correct"), !1);
}

function proveraType() {
  return 0 == type.options[type.options.selectedIndex].value ? (brandError.textContent = "You must choose brand!", !1) : (brandError.textContent = "", !0);
}

fullName.onchange = function () {
  proveraFullName();
}, mail.onchange = function () {
  proveraMail();
}, payment.forEach(function (a) {
  return a.onchange = function () {
    proveraCashCard();
  };
}), payment[0].onclick = function () {
  0 < cardMade && (document.querySelector(".cardHolder").remove(), cardMade--);
}, document.getElementById("form").onsubmit = function (a) {
  a.preventDefault();
  var b = proveraFullName(),
      c = proveraMail(),
      d = proveraType(),
      e = proveraCashCard(),
      f = e["boolean"],
      g = e.value,
      h = proveraPick(),
      i = proveraDrop();

  if (g == payment[1].value) {
    var _a12 = proveraExpDate(),
        _e2 = proveraCvv(),
        _g2 = proveraCardNumber();

    _a12 && _e2 && _g2 && celokupnaProvera(b, c, d, f, h, i);
  }

  g == payment[0].value && celokupnaProvera(b, c, d, f, h, i);
}, localStorage.getItem("proveriDatumIsteka") == localStorage.getItem("vremeIsteka") && localStorage.clear();

function celokupnaProvera(a, b, c, d, e, f) {
  if (a && b && c && d && e && f) if (0 == dataArray.length && null == localStorage.getItem("poslato")) {
    dataArray.push(fullName.value), dataArray.push(mail.value), dataArray.push(type.options[type.options.selectedIndex].value), dataArray.push(model.options[model.options.selectedIndex].text), dataArray.push(ukupanBrojDana * izabranAuto);

    var _a13 = dataArray[0].split(" ");

    localStorage.setItem("ime", _a13[0]), localStorage.setItem("brend", dataArray[2]), localStorage.setItem("model", dataArray[3]), localStorage.setItem("vremeIsteka", drop.value), modal();
  } else modal();
}

function modal() {
  var a = document.getElementById("modal"),
      b = document.createElement("div");
  b.classList.add("row", "regenerate");
  var c = document.createElement("div");
  c.setAttribute("id", "header"), c.classList.add("col-12", "text-left", "p-3");
  var d = document.createElement("h2");
  d.innerHTML += "CAR <span>ZONE</span>";
  var e = document.createElement("div");
  e.setAttribute("id", "body"), e.classList.add("col-12", "p-2");
  var f = document.createElement("p");
  "true" == localStorage.getItem("poslato") ? f.innerHTML = "Oops, looks like you have already sent the request for the <span>".concat(localStorage.getItem("brend"), " ").concat(localStorage.getItem("model"), "</span>!<br> You can make another request after <span>").concat(localStorage.getItem("vremeIsteka"), "</span>") : (localStorage.setItem("poslato", "true"), f.innerHTML = "Dear <span>".concat(localStorage.getItem("ime"), "</span>, you've successfully sent the request for the <span>").concat(localStorage.getItem("brend"), " ").concat(localStorage.getItem("model"), "</span>, all other information has been sent to your mail.</br>\n<span>").concat(dataArray[1], "</br></span> <span class=\"modalTotal\"> TOTAL: <i class=\"fas fa-dollar-sign\"></i> ").concat(dataArray[4], "</span>"));
  var g = document.createElement("div");
  g.setAttribute("id", "footer"), g.classList.add("col-12", "text-right");
  var h = document.createElement("button");
  h.setAttribute("type", "button"), h.setAttribute("id", "closeModal"), h.textContent = "Close", a.appendChild(b), b.appendChild(c), c.appendChild(d), b.appendChild(e), b.appendChild(g), e.appendChild(f), g.appendChild(h), a.style.visibility = "visible", h.onclick = function () {
    a.style.visibility = "hidden", a.style.opacity = "0", b.remove();
  };
}

function testimonials() {
  var a = [["assets/img/test1.png", "During all the years we have rented a car from you, there has never been any problems. We are satisfied with both price and quality of your cars!", "Michael De Santa"], ["assets/img/test2.png", "Thank you all once again for your exceptional service level. The customer experience served by everyone at CarZone is 1st class!", "Trevor Philips"], ["assets/img/test3.png", "Friendly and reliable service on site. The booking went smoothly and was handled quickly. The car was perfect and very new!", "Franklin Clinton"]],
      b = document.getElementById("testimonials");

  for (var c = 0; c < a.length; c++) {
    b.innerHTML += " <div class=\"col-12 col-md-4 mb-3 mb-md-0\">\n<div class=\"col-12 testContent p-3\">\n<i class=\"fas fa-quote-right\"></i>\n<div class=\"d-flex justify-content-center p-2\">\n<div class=\"testImage\">\n<img src=\"".concat(a[c][0], "\" alt=\"guy\">\n</div>\n</div>\n<span><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i></span>\n<blockquote class=\"blockquote text-center\">\n<p class=\"mb-0\">").concat(a[c][1], "</p>\n<footer class=\"blockquote-footer\"><cite>").concat(a[c][2], "</cite></footer>\n</blockquote>\n</div>\n</div>");
  }
}

function about() {
  sadrzajTab = [["What we're about", "We want to make renting a car as simple and personal as driving your own. Renting a car brings you freedom, and we'll help you find the right car for you at a great price. But there's much more to us than that. We're here to make renting a car a lot less hassle."], ["How we work", "Making sure you have a great experience every time you rent a car makes us happy. We use our massive buying power to bring you great deals."], ["Why use us", "We use all our experience \u2013 and the experiences of thousands of our customers \u2013 to bring you the car you need and the quality of service you want. Always at the best price."], ["Who we are", "Our founders had the simple idea of wanting to make renting cars much better. And we\u2019ve flourished because our customers love how we work."]];
  var a = document.getElementsByClassName("tab-content");

  for (var b = 0; b < sadrzajTab.length; b++) {
    var c = document.createElement("h3"),
        d = document.createElement("p");
    c.textContent = sadrzajTab[b][0], d.textContent = sadrzajTab[b][1], a[b].appendChild(c), a[b].appendChild(d);
  }
}

function autor() {
  var a = document.getElementById("box");
  a.innerHTML = "<div class=\"col-12 col-md-5 p-0\">\n<img src=\"assets/img/autor.jpg\" class=\"img-fluid\" alt=\"autor\">\n</div>\n<div class=\"col-12 col-md-7 p-0 p-lg-5 pb-2 pb-md-0\" id=\"infoAutor\">\n<div class=\"row m-0\">\n<div class=\"col-12 d-flex justify-content-end p-1\">\n<button type=\"button\" id=\"closeAutor\"><i class=\"fas fa-times\"></i></button>\n</div>\n</div>\n<div class=\"row m-0\">\n<div class=\"col-12 p-1 font-weight-bold\">\n<h3 class=\"text-center font-weight-bold\">".concat("Adam Nikoli\u0107", " <span>", "101/19", "</span></h3>\n<p>", "Hi. I'm a web developer from Po\u017Eega, Serbia. Right now I'm studying Internet Technologies at Information and Communication Technologies College in Belgrade and I'm pursuing career in Web programming.", "\n</p>\n</div>\n</div>\n<div class=\"row m-0\">\n<div class=\"col-12 d-flex flex-row flex-wrap linkovi justify-content-center\">\n<div >\n <a href=\"https://github.com/adamnik101\"><button type=\"button\" class=\"linkBtn\"><i class=\"fab fa-github-alt\"></i></button></a> \n <a href=\"https://www.linkedin.com\"><button type=\"button\" class=\"linkBtn\"><i class=\"fab fa-linkedin-in\"></i></button></a>\n <a href=\"https://www.twitter.com\"><button type=\"button\" class=\"linkBtn\"><i class=\"fab fa-twitter\"></i></button></a>\n <a href=\"https://adamnik101.github.io/adamportfolio/index.html\"><button type=\"button\" class=\"linkBtn\"><i class=\"fas fa-address-book\"></i></button></a>\n</div>\n</div>\n</div>\n</div>");
}

$(document).ready(function () {
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
  }), $("#clickSide").click(function () {
    $(".slideIn").each(function (a) {
      $(this).delay(200 * a).animate({
        left: "0",
        opacity: "1"
      }, 700);
    }), $("#naslovSide").delay(500).animate({
      opacity: "1"
    }, 200), $("#copy").delay(500).animate({
      opacity: "1"
    }, 200), $("#openSide").css("box-shadow", "0 0 0 10000px rgba(0,0,0,.50)");
  }), $("#closeSide").click(function () {
    $(".slideIn").each(function () {
      $(this).animate({
        left: "-250px"
      }).finish();
    }), $("#naslovSide").css("opacity", "0"), $("#copy").css("opacity", "0"), $("#openSide").css("box-shadow", "none");
  }), $("body").tooltip({
    selector: ".fa-question-circle"
  }), $(".canvasTekst").animate({
    right: "0"
  }, 2e3), $(window).scroll(function () {
    500 < $(this).scrollTop() && $(".sectionContent").each(function (a) {
      $(this).delay(200 * a).animate({
        opacity: "1",
        top: "0"
      }, "slow");
    }), 900 < $(this).scrollTop() && $(".featured").animate({
      left: "0",
      opacity: "1"
    }), 300 < $(this).scrollTop() ? $("#btnTop").fadeIn() : $("#btnTop").fadeOut();
  }), $("#btnTop").click(function () {
    return $("html, body").animate({
      scrollTop: 0
    }, 0), !1;
  });
  var a = 0,
      b = 0;
  $("#loadMore").click(function () {
    b = 0, $(".slide").each(function () {
      $(".slide").eq(a).delay(450 * b++).animate({
        top: "0",
        opacity: "1"
      }), a++;
    });
  }), $(".first-owl").owlCarousel({
    responsiveClass: !0,
    animateIn: !0,
    autoplay: !0,
    rewind: !0,
    loop: !1,
    nav: !1,
    dots: !0,
    dotsEach: !0,
    responsive: {
      0: {
        items: 1
      },
      850: {
        items: 2
      },
      1e3: {
        items: 3
      }
    }
  });
  var c = $(".first-owl");
  $("#btnDesno").click(function () {
    c.trigger("next.owl.carousel");
  }), $("#btnLevo").click(function () {
    c.trigger("prev.owl.carousel");
  }), $("#seeMoreModal").addClass("hide"), $(document).on("click", ".seeMore", function () {
    $("#seeMoreModal").fadeIn("fast"), $("#seeMoreModal").addClass("block"), $("#seeMoreModal").removeClass("hide"), $("#closeSeeMore").on("click", function () {
      $("#seeMoreModal").fadeOut("fast", function () {
        $("#seeMoreModal").addClass("hide"), $("#seeMoreModal").removeClass("block");
      });
    }), $(".request").on("click", function () {
      $("html,body").animate({
        scrollTop: $(".back").offset().top
      }, 0), $("#seeMoreModal").fadeOut("fast", function () {
        $("#seeMoreModal").addClass("hide"), $("#seeMoreModal").removeClass("block");
      });
    }), $(".another-owl").owlCarousel({
      responsiveClass: !0,
      loop: !0,
      nav: !1,
      dots: !1,
      responsive: {
        0: {
          items: 1,
          autoplay: !0
        }
      }
    });
    var a = $(".another-owl");
    $("#desno").click(function () {
      a.trigger("next.owl.carousel");
    }), $("#levo").click(function () {
      a.trigger("prev.owl.carousel");
    });
  }), $("#fadeOwl").owlCarousel({
    animateOut: "fadeOut",
    autoplayTimeout: 1e4,
    nav: !1,
    loop: !0,
    touchDrag: !1,
    dots: !1,
    autoplay: !0,
    mouseDrag: !1,
    responsive: {
      0: {
        items: 1
      }
    }
  }), $("#tabs-nav li:first-child").addClass("active"), $(".tab-content").hide(), $(".tab-content:first").show(), $("#tabs-nav li").click(function () {
    $("#tabs-nav li").removeClass("active"), $(this).addClass("active"), $(".tab-content").hide();
    var a = $(this).find("a").attr("href");
    return $(a).fadeIn("slow"), !1;
  }), $("#form").on("submit", function () {
    $("#modal").animate({
      opacity: "1"
    }, 1e3), $("#modal .row").animate({
      opacity: "1",
      top: "0"
    }, 1e3);
  }), $("#autorBtn").click(function () {
    autor(), $("#autor").fadeIn(), $("#closeAutor").click(function () {
      $("#autor").fadeOut();
    });
  });
});