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
};

function sideNav() {
  var a = document.getElementById("openSide"),
      b = document.createElement("nav");
  a.appendChild(b);
  var c = document.createElement("button");
  c.textContent = "Close";
  var d = document.createElement("ul");

  for (indeks in b.appendChild(d), navigacija) {
    var _a3 = document.createElement("li"),
        _b2 = document.createElement("hr");

    _b2.after(_a3), _a3.classList.add("slideIn"), d.appendChild(_a3);
    var e = document.createElement("a");
    _a3.appendChild(e), e.setAttribute("href", "".concat(navigacijaLinkovi[indeks])), e.innerHTML = "".concat(navigacija[indeks][0] + " " + navigacija[indeks][1]);
  }
}

function openNav() {
  document.getElementById("openSide").style.width = "250px";
}

function closeNav() {
  document.getElementById("openSide").style.width = "0";
}

document.getElementById("clickSide").addEventListener("click", openNav), document.getElementById("closeSide").addEventListener("click", closeNav);
var izabranAuto,
    cena = [["Chevrolet", 180], ["Dodge", 200], ["BMW", 120], ["Subaru", 130], ["Mitsubishi", 110], ["Ford", 160], ["Honda", 120], ["Toyota", 300], ["Mercedes", 160]];

function ddl() {
  var a = {
    Chevrolet: ["ZL1"],
    Dodge: ["Challenger"],
    BMW: ["420d Coupe", "X6m"],
    Subaru: ["Impreza STi", "WRX"],
    Mitsubishi: ["EVO X"],
    Ford: ["Mustang", "F-150"],
    Honda: ["Civic Type R"],
    Toyota: ["Supra"],
    Mercedes: ["450 CLS"]
  },
      b = document.createElement("option");
  b.setAttribute("value", "0");
  var c = document.createTextNode("Choose a model");
  b.appendChild(c), model.appendChild(b), model.disabled = !0, document.getElementById("carType").onchange = function () {
    model.disabled = "0" == this.value;
    var c = this.options[this.selectedIndex].value;

    for (model.appendChild(b); model.options.length;) {
      model.remove(0);
    }

    for (var _a4 = 0; _a4 < cena.length; _a4++) {
      c == cena[_a4][0] && (izabranAuto = cena[_a4][1]);
    }

    "0" == c && model.appendChild(b);
    var d = a[c];
    if (d) for (var e, f = 0; f < d.length; f++) {
      e = document.createElement("option"), e.setAttribute("value", f);
      var g = document.createTextNode(d[f]);
      e.appendChild(g), model.options.add(e), document.getElementById("brandError").textContent = "";
    }
  };

  (function () {
    var b = document.getElementById("carType");

    for (var e = 0; e < Object.keys(a).length; e++) {
      var c = document.createElement("option");
      c.setAttribute("value", Object.keys(a)[e]);
      var d = document.createTextNode(Object.keys(a)[e]);
      c.appendChild(d), b.appendChild(c);
    }
  })();
}

var carContent = [["assets/img/sports_civic1.jpg", "Honda Civic Type R", 120, "350hp"], ["assets/img/sports_supra1.jpg", "Toyota Supra", 300, "382hp"], ["assets/img/sports_subaru1.jpg", "Subaru Impreza STi", 130, "340hp"], ["assets/img/muscle_chevy.jpg", "Chevrolet ZL1", 180, "650hp"], ["assets/img/muscle_demon1.jpg", "Dodge Challenger", 200, "700hp"], ["assets/img/sports_benz1.jpg", "Mercedes 450 CLS", 160, "375hp"], ["assets/img/sports_evo.jpg", "Subaru WRX", 130, "360hp"], ["assets/img/sports_bmw1.jpg", "BMW 420d Coupe", 120, "310hp"], ["assets/img/sports_mitsubishi1.jpg", "Mitsubishi EVO X", 110, "290hp"], ["assets/img/muscle_mustang1.jpg", "Ford Mustang", 160, "750hp"], ["assets/img/sports_bmw2.jpg", "BMW X6m", 120, "310hp"], ["assets/img/suv_ford1.jpg", "Ford F-150", 160, "280hp"]],
    random = [];

function generate() {
  for (var a, b = 0; b < carContent.length; b++) {
    a = Math.floor(Math.random() * carContent.length), -1 == random.indexOf(a) ? random.push(a) : b--;
  }
}

var value = [];

function owlCarouselContent() {
  generate();
  var a = document.getElementById("automobili"),
      b = document.createElement("div");
  b.classList.add("owl-carousel", "first-owl"), a.appendChild(b);

  for (var _a5 = 0; 6 > _a5; _a5++) {
    value.push(carContent[random[_a5]][1].split(" ")), b.innerHTML += "<div class=\"slideContent\"><img src=\"".concat(carContent[random[_a5]][0], "\" alt=\"").concat(carContent[random[_a5]][1], "\"><h5>").concat(carContent[random[_a5]][1], "</h5>\n<p class=\"d-flex justify-content-between\"><span><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_a5]][2], "/day</span><a href=\"#formNaslov\"class=\"d-inline reqBtn\">Request now</a></p>\n</div>");
  }

  random = [];
}

function upisVrednosti() {
  var a = ["assets/img/seeMoreHonda.jpg", "assets/img/seeMoreSupra.jpeg", "assets/img/seeMoreRedSubaru.jpg", "assets/img/seeMoreChevy.jpg", "assets/img/seeMoreDemon.jpg", "assets/img/seeMoreMerc.jpeg", "assets/img/seeMoreSubaru.jpeg", "assets/img/seeMoreBmw.jpg", "assets/img/seeMore1.jpg", "assets/img/seeMoreMustang.jpeg", "assets/img/seeMoreBmw2.jpg", "assets/img/seeMoreFord.jpeg"];
  var b = document.getElementsByClassName("seeMore");
  var c = document.getElementById("seeMoreModal"),
      d = document.getElementsByClassName("request"),
      e = document.getElementById("carType"),
      f = document.getElementById("carModel");

  var _loop = function _loop(g) {
    b[g].addEventListener("click", function () {
      b[g].value == carContent[random[g]][1] && (c.innerHTML = "<div class=\"row relative\"> <div class=\"col-12 p-0\"> <div id=\"header1\"> <div class=\"col-12 p-3 d-flex justify-content-between\"> <h2>CAR <span>ZONE</span></h2> <button type=\"button\" id=\"closeSeeMore\"><i class=\"fas fa-times-circle\"></i></button> </div></div><div id=\"body1\"> <div class=\"col-12 p-0\"><button type=\"button\" id=\"levo\"><i class=\"fas fa-angle-left\"></i></i></button><button type=\"button\" id=\"desno\"><i class=\"fas fa-angle-right\"></i></button><div class=\"owl-carousel another-owl\"> <img src=\"".concat(carContent[random[g]][0], "\" class=\"img-fluid\" alt=\"car\"> <img src=\"").concat(a[random[g]], "\" class=\"img-fluid\" alt=\"car\"></div> </div><div class=\"col-12 p-2\"> <h3 class=\"text-center\">").concat(carContent[random[g]][1], "</h3> <hr class=\"m-0\"> <div class=\"row m-0 p-0\"> <div class=\"col-6 p-0\"> <ul class=\"d-flex flex-column text-left p-2\"> <li> <i class=\"fas fa-check\"></i> Chilled AC </li><li> <i class=\"fas fa-check\"></i> Heated seats </li><li> <i class=\"fas fa-check\"></i> Audio input </li><li> <i class=\"fas fa-check\"></i> Bluetooth </li></ul> </div><div class=\"col-6 p-0\"> <ul class=\"d-flex flex-column text-left p-2\"> <li> <i class=\"fas fa-check\"></i> Manual </li><li> <i class=\"fas fa-check\"></i> Unlimited mileage </li><li> <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[g]][3], " </li></ul> </div></div></div><div class=\"row m-0\"> <div class=\"col-12 font-weight-bold euro\"> <i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[g]][2], "<span>/ per day</span> </div></div></div><div id=\"footer1\" class=\"text-right\"> <button type=\"button\" class=\"request\">Request now!</button> </div></div></div>"));

      for (var _a6 = 0; _a6 < d.length; _a6++) {
        d[_a6].addEventListener("click", function () {
          for (var _a7 = 1; _a7 < e.options.length; _a7++) {
            e.options[_a7].value == carTypeName[g][0] && (e.selectedIndex = _a7, e.onchange(), 1 < f.options.length && (f.options[f.selectedIndex].text.includes(carTypeName[g][1]) ? f.selectedIndex = 0 : f.selectedIndex = 1));
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
  var a = document.getElementById("showCars");

  for (var _b3 = 0; _b3 < carContent.length - 6; _b3++) {
    a.innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4 scale\">\n<div class=\"imgHolder\">\n<img src=\"".concat(carContent[random[_b3]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[_b3]][1], "\">\n</div>\n<div class=\"holder\">\n<h5 class=\"mb-3\">").concat(carContent[random[_b3]][1], "</h5>\n<p><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_b3]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[_b3]][3], "</p>\n<button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[_b3]][1], "\">See more</button>\n</div>\n</div>"), carTypeName.push(carContent[random[_b3]][1].split(" "));
  }

  upisVrednosti();
  var b = 0;
  document.getElementById("loadMore").addEventListener("click", function () {
    if (1 == b && (document.getElementById("loadMore").style.display = "none"), 0 == b) {
      for (var _a8, _b4 = 6; _b4 < carContent.length - 3; _b4++) {
        _a8 = document.createElement("div"), _a8.classList.add("slide", "col-lg-4", "mr-auto", "col-12", "col-sm-6", "mb-4", "scale"), document.getElementById("showCars").appendChild(_a8), _a8.innerHTML += "\n<div class=\"imgHolder\">\n<img src=\"".concat(carContent[random[_b4]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[_b4]][1], "\">\n</div>\n<div class=\"holder\">\n<h5 class=\"mb-3\">").concat(carContent[random[_b4]][1], "</h5>\n<p><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_b4]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[_b4]][3], "</p>\n<button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[_b4]][1], "\">See more</button>\n</div>"), carTypeName.push(carContent[random[_b4]][1].split(" "));
      }

      upisVrednosti();
    }

    if (0 < b) {
      for (var _a9 = 9; _a9 < carContent.length; _a9++) {
        document.getElementById("showCars").innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4 slide scale\">\n<div class=\"imgHolder\">\n<img src=\"".concat(carContent[random[_a9]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[_a9]][1], "\">\n</div>\n<div class=\"holder\">\n<h5 class=\"mb-3\">").concat(carContent[random[_a9]][1], "</h5>\n<p><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_a9]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[_a9]][3], "</p>\n<button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[_a9]][1], "\">See more</button>\n</div></div>"), carTypeName.push(carContent[random[_a9]][1].split(" "));
      }

      upisVrednosti();
    }

    b++;
  });
}

function typeClick() {
  var a = document.getElementById("carType"),
      b = document.getElementById("carModel"),
      c = document.getElementsByClassName("reqBtn");

  var _loop2 = function _loop2(d) {
    c[d].addEventListener("click", function () {
      for (var _c = 1; _c < type.options.length; _c++) {
        a.options[_c].value == value[d][0] && (a.selectedIndex = _c, a.onchange(), 1 < b.options.length && (b.options[b.selectedIndex].text.includes(value[d][1]) ? b.selectedIndex = 0 : b.selectedIndex = 1));
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
    regExFullName = /^[A-ŠĐČĆŽ][a-zšđčćž]{2,14}(\s[A-ZČĆŽŠĐ][a-zšđčćž]{2,19})+$/,
    regExMail = /^[a-z][a-z\.\d-\_]+\@[a-z]+(\.[a-z]+)+$/,
    dataArray = [];

function proveraFullName() {
  return regExFullName.test(fullName.value) ? (fullNameError.textContent = "", fullName.classList.remove("greska"), fullName.classList.add("correct"), !0) : (fullNameError.innerHTML = "Incorrect format <i class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"e.g. John Doe\"></i>", fullName.classList.add("greska"), fullName.classList.remove("correct"), !1);
}

function proveraMail() {
  return regExMail.test(mail.value) ? (mailError.textContent = "", mail.classList.remove("greska"), mail.classList.add("correct"), !0) : (mailError.innerHTML = "Please enter a valid email address. <i class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"e.g. johndoe@example.com\"></i>", mail.classList.add("greska"), mail.classList.remove("correct"), !1);
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
10 > day && (day = "0" + day), 10 > month && (month = "0" + month), today1 = year + "-" + month + "-" + day, pick.setAttribute("min", today1);

var ukupanBrojDana,
    daniMs = 864e5,
    proveraPick = function proveraPick() {
  return from = new Date(pick.value), to = new Date(drop.value), today = new Date(), today.setHours(1, 0, 0), ukupanBrojDana = (to - from) / daniMs, isNaN(from) && isNaN(to) ? (pickError.innerHTML = "Please choose a pick up date!", pick.classList.add("greska"), pick.classList.remove("correct"), dropError.innerHTML = "", !1) : from.toString() == today.toString() ? (pickError.innerHTML = "We need at least one day from today to proccess your request!", pick.classList.add("greska"), pick.classList.remove("correct"), allError.innerHTML = "", !1) : from.toString() == to.toString() ? (allError.innerHTML = "You can't rent a car for the same day!", pick.classList.add("greska"), pick.classList.remove("correct"), drop.classList.add("greska"), drop.classList.remove("correct"), pickError.innerHTML = "", dropError.innerHTML = "", !1) : from > to ? (allError.innerHTML = "Pick up date can't be after drop off date!", pick.classList.add("greska"), pick.classList.remove("correct"), pickError.innerHTML = "", dropError.innerHTML = "", !1) : 30 < ukupanBrojDana ? (allError.innerHTML = "You can't rent a car for more than 30 days!", pickError.innerHTML = "", pick.classList.add("greska"), pick.classList.remove("correct"), drop.classList.add("greska"), drop.classList.remove("correct"), !1) : (allError.innerHTML = "", pickError.innerHTML = "", pick.classList.remove("greska"), pick.classList.add("correct"), disabledDate.disabled = !1, 30 >= ukupanBrojDana && from.toString() != today.toString() && (dropError.innerHTML = "", drop.classList.add("correct"), drop.classList.remove("greska")), !0);
},
    proveraDrop = function proveraDrop() {
  return from = new Date(pick.value), to = new Date(drop.value), ukupanBrojDana = (to - from) / daniMs, isNaN(to) ? (dropError.innerHTML = "Please choose a drop off date!", drop.classList.add("greska"), drop.classList.remove("correct"), !1) : to.toString() == from.toString() ? (allError.innerHTML = "You can't rent a car for the same day!", drop.classList.add("greska"), drop.classList.remove("correct"), pick.classList.add("greska"), pick.classList.remove("correct"), dropError.innerHTML = "", pickError.innerHTML = "", !1) : to < from ? (allError.innerHTML = "Drop off date can't be before pick up date!", drop.classList.add("greska"), drop.classList.remove("correct"), dropError.innerHTML = "", pickError.innerHTML = "", !1) : 30 < ukupanBrojDana ? (allError.innerHTML = "You can't rent a car for more than 30 days!", drop.classList.add("greska"), drop.classList.remove("correct"), pick.classList.add("greska"), pick.classList.remove("correct"), dropError.innerHTML = "", !1) : (allError.innerHTML = "", dropError.innerHTML = "", drop.classList.remove("greska"), drop.classList.add("correct"), 30 >= ukupanBrojDana && from.toString() != today.toString() && (pickError.innerHTML = "", pick.classList.add("correct"), pick.classList.remove("greska")), !0);
};

pick.onchange = function () {
  proveraPick();
}, drop.onchange = function () {
  proveraDrop();
};
var cardMade = 0;

payment[1].onclick = function () {
  if (0 == cardMade) {
    var a = ["MM/YY", "***"],
        b = ["validThru", "cvv"],
        c = ["Expiration date:", "CVV:"],
        d = document.getElementById("card"),
        e = document.createElement("div");
    e.classList.add("d-flex", "justify-content-between", "flex-wrap", "mt-2", "mb-2", "cardHolder");
    var f = document.createElement("input");
    f.classList.add("w-100"), f.setAttribute("type", "text"), f.setAttribute("placeholder", "Card number: 5XXXXXXXXXXXXXXX"), f.setAttribute("id", "cardContent");
    var g = document.createElement("span");
    g.classList.add("greskaTekst", "w-100"), g.setAttribute("id", "cardNumberError"), e.appendChild(f), e.appendChild(g);

    for (var _d = 0; 2 > _d; _d++) {
      var h = document.createElement("div");
      h.classList.add("w-50"), e.appendChild(h);
      var j = document.createElement("label");
      j.classList.add("w-100"), j.setAttribute("for", b[_d]);
      var k = document.createTextNode(c[_d]);
      j.appendChild(k), h.appendChild(j);
      var l = document.createElement("input");
      l.classList.add("w-50"), l.setAttribute("type", "text"), l.setAttribute("placeholder", a[_d]), l.setAttribute("id", b[_d]), h.appendChild(l);
    }

    var m = ["expDateError", "cvvError"];

    for (var _a10 = 0; 2 > _a10; _a10++) {
      var n = document.createElement("div");
      n.classList.add("w-50"), e.appendChild(n);
      var o = document.createElement("span");
      o.setAttribute("id", m[_a10]), o.classList.add("greskaTekst"), n.appendChild(o);
    }

    cardMade++, d.appendChild(e);
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
  return /^([0][1-9]|[1-2][0-2])\/(([2][0-6])|([2][0][2-3][0-6]))$/.test(a.value) ? (b.textContent = "", a.classList.remove("greska"), a.classList.add("correct"), !0) : (b.innerHTML = "Incorrect format <i class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"e.g. 05/21 OR 05/2021\"></i>", a.classList.add("greska"), a.classList.remove("correct"), !1);
}

function proveraCvv() {
  var a = document.getElementById("cvv"),
      b = document.getElementById("cvvError");
  return /^[0-9]{3}$/.test(a.value) ? (b.textContent = "", a.classList.remove("greska"), a.classList.add("correct"), !0) : (b.innerHTML = "Incorrect format <i class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"e.g. 123\"></i>", a.classList.add("greska"), a.classList.remove("correct"), !1);
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
    var _a11 = proveraExpDate(),
        _e = proveraCvv(),
        _g = proveraCardNumber();

    _a11 && _e && _g && celokupnaProvera(b, c, d, f, h, i);
  }

  g == payment[0].value && celokupnaProvera(b, c, d, f, h, i);
};

function celokupnaProvera(a, b, c, d, e, f) {
  a && b && c && d && e && f && 0 == dataArray.length && (dataArray.push(fullName.value), dataArray.push(mail.value), dataArray.push(type.options[type.options.selectedIndex].value), dataArray.push(model.options[model.options.selectedIndex].text), dataArray.push(ukupanBrojDana * izabranAuto), modal());
}

function modal() {
  var a = dataArray[0].split(" "),
      b = document.getElementById("modal"),
      c = document.createElement("div");
  c.classList.add("row", "regenerate");
  var d = document.createElement("div");
  d.setAttribute("id", "header"), d.classList.add("col-12", "text-left", "p-3");
  var e = document.createElement("h2");
  e.innerHTML += "CAR <span>ZONE</span>";
  var f = document.createElement("div");
  f.setAttribute("id", "body"), f.classList.add("col-12", "p-2");
  var g = document.createElement("p");
  g.innerHTML = "Dear <span>".concat(a[0], "</span>, you've successfully sent the request for the <span>").concat(dataArray[2], " ").concat(dataArray[3], "</span>, all other information has been sent to your mail.</br>\n<span>").concat(dataArray[1], "</br></span> <span class=\"modalTotal\"> TOTAL: <i class=\"fas fa-dollar-sign\"></i> ").concat(dataArray[4], "</span>");
  var h = document.createElement("div");
  h.setAttribute("id", "footer"), h.classList.add("col-12", "text-right");
  var i = document.createElement("button");
  i.setAttribute("type", "button"), i.setAttribute("id", "closeModal"), i.textContent = "Close", b.appendChild(c), c.appendChild(d), d.appendChild(e), c.appendChild(f), c.appendChild(h), f.appendChild(g), h.appendChild(i), b.style.visibility = "visible", i.onclick = function () {
    b.style.visibility = "hidden", b.style.opacity = "0", dataArray = [], c.remove();
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
  a.innerHTML = "<div class=\"col-12 col-md-5 p-0\">\n<img src=\"assets/img/autor.jpg\" class=\"img-fluid\" alt=\"autor\">\n</div>\n<div class=\"col-12 col-md-7 p-0 p-lg-5 pb-2 pb-md-0\" id=\"infoAutor\">\n<div class=\"row m-0\">\n<div class=\"col-12 d-flex justify-content-end p-1\">\n<button type=\"button\" id=\"closeAutor\"><i class=\"fas fa-times\"></i></button>\n</div>\n</div>\n<div class=\"row m-0\">\n<div class=\"col-12 p-1 font-weight-bold\">\n<h3 class=\"text-center font-weight-bold\">".concat("Adam Nikoli\u0107", " <span>", "101/19", "</span></h3>\n<p>", "Hi. I'm a web developer from Po\u017Eega, Serbia. Right now I'm studying Internet Technologies at Information and Communication Technologies College in Belgrade and I'm pursuing career in Web programming.", "\n</p>\n</div>\n</div>\n<div class=\"row m-0\">\n<div class=\"col-12 d-flex flex-row flex-wrap linkovi justify-content-center\">\n<div >\n <a href=\"https://github.com/adamnik101\"><button type=\"button\" class=\"linkBtn\"><i class=\"fab fa-github-alt\"></i></button></a> \n <a href=\"https://www.linkedin.com\"><button type=\"button\" class=\"linkBtn\"><i class=\"fab fa-linkedin-in\"></i></button></a>\n <a href=\"https://www.twitter.com\"><button type=\"button\" class=\"linkBtn\"><i class=\"fab fa-twitter\"></i></button></a>\n <a href=\"https://adamnik101.github.io/adamportfolio/index.html\"><button type=\"button\" class=\"linkBtn\"><i class=\"fas fa-address-book\"></i></button></a>\n</div> \n</div>\n</div>\n</div>");
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
    }), $("#openSide").css("box-shadow", "0 0 0 10000px rgba(0,0,0,.50)");
  }), $("#closeSide").click(function () {
    $(".slideIn").each(function () {
      $(this).animate({
        left: "-250px"
      }).finish();
    }), $("#openSide").css("box-shadow", "none");
  }), $("body").tooltip({
    selector: ".fa-info-circle"
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
        items: 1,
        autoplay: !1
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