"use strict";

window.addEventListener("DOMContentLoaded", function () {
  navigacija1(), info1(), ddl(), owlCarouselContent(), ispisCarContent(), crossfade(), testimonials(), sideNav();
}), window.onload = function () {
  showImg(), initMap();
}, window.onscroll = function () {
  scrollUp1();
};

var izabranAuto,
    navigacija = ["Home", "Introduction", "Featured", "Rent a car", "Testimonials"],
    navigacijaLinkovi = ["index.html", "#naslov", "#featuredSection", "#formNaslov", "#TestimonialsSection"],
    navigacija1 = function navigacija1() {
  var a = document.getElementById("navigacija"),
      b = document.createElement("nav");
  b.className = "d-flex align-items-center justify-content-center", a.appendChild(b);
  var c = document.createElement("ul");

  for (indeks in c.className = "d-flex justify-content-around", b.appendChild(c), navigacija) {
    var _a = document.createElement("li");

    c.appendChild(_a);

    var _b = document.createElement("a");

    _a.appendChild(_b), _b.setAttribute("href", "".concat(navigacijaLinkovi[indeks])), _b.textContent = "".concat(navigacija[indeks]);
  }
},
    cena = [["Chevrolet", 180], ["Dodge", 200], ["BMW", 120], ["Subaru", 130], ["Mitsubishi", 110], ["Ford", 160], ["Honda", 120], ["Toyota", 300], ["Mercedes", 160]];

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
    var _a3 = document.createElement("li");

    _a3.classList.add("slideIn"), d.appendChild(_a3);

    var _b2 = document.createElement("a");

    _a3.appendChild(_b2), _b2.setAttribute("href", "".concat(navigacijaLinkovi[indeks])), _b2.textContent = "".concat(navigacija[indeks]);
  }
}

function openNav() {
  document.getElementById("openSide").style.width = "250px";
}

function closeNav() {
  document.getElementById("openSide").style.width = "0";
}

document.getElementById("clickSide").addEventListener("click", openNav), document.getElementById("closeSide").addEventListener("click", closeNav);

function ddl() {
  var a = {
    Chevrolet: ["ZL1"],
    Dodge: ["Challenger"],
    BMW: ["420d Coupe", "X6m"],
    Subaru: ["Impreza WRX STi", "WRX"],
    Mitsubishi: ["EVO X"],
    Ford: ["Mustang", "F-150"],
    Honda: ["Civic Type R"],
    Toyota: ["Supra"],
    Mercedes: ["450 CLS"]
  },
      b = document.getElementById("carModel");
  b.disabled = !0;
  var c = document.createElement("option");
  c.setAttribute("value", "0");
  var d = document.createTextNode("Choose a model");
  c.appendChild(d), b.appendChild(c), document.getElementById("carType").onchange = function () {
    b.disabled = "0" == this.value;
    var d = this.options[this.selectedIndex].value;

    for (b.appendChild(c); b.options.length;) {
      b.remove(0);
    }

    for (var _a4 = 0; _a4 < cena.length; _a4++) {
      d == cena[_a4][0] && ProveriNazad(cena[_a4][1]);
    }

    "0" == d && b.appendChild(c);
    var e = a[d];
    if (e) for (var f, g = 0; g < e.length; g++) {
      f = document.createElement("option"), f.setAttribute("value", g);
      var h = document.createTextNode(e[g]);
      f.appendChild(h), b.options.add(f), document.getElementById("brandError").textContent = "";
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

var carContent = [["assets/img/sports_civic1.jpg", "Honda Civic Type R", 120, "350hp"], ["assets/img/sports_supra1.jpg", "Toyota Supra", 300, "382hp"], ["assets/img/sports_subaru1.jpg", "Subaru Impreza WRX", 130, "340hp"], ["assets/img/muscle_chevy1.jpg", "Chevrolet ZL1", 180, "650hp"], ["assets/img/muscle_demon1.jpg", "Dodge Challenger", 200, "700hp"], ["assets/img/sports_benz1.jpg", "Mercedes 450 CLS", 160, "375hp"], ["assets/img/sports_evo.jpg", "Subaru WRX", 130, "360hp"], ["assets/img/sports_bmw1.jpg", "BMW 420d Coupe", 120, "310hp"], ["assets/img/sports_mitsubishi1.jpg", "Mitsubishi EVO X", 110, "290hp"], ["assets/img/muscle_mustang1.jpeg", "Ford Mustang", 160, "750hp"], ["assets/img/sports_bmw2.jpg", "BMW X6m", 120, "310hp"], ["assets/img/suv_ford1.jpg", "Ford F-150", 160, "280hp"]],
    random = [];

function generate() {
  for (var a, b = 0; b < carContent.length; b++) {
    a = Math.floor(Math.random() * carContent.length), -1 == random.indexOf(a) ? random.push(a) : b--;
  }
}

function owlCarouselContent() {
  generate();
  var a = document.getElementById("automobili"),
      b = document.createElement("div");
  b.classList.add("owl-carousel", "first-owl"), a.appendChild(b);

  for (var _a5 = 0; 6 > _a5; _a5++) {
    b.innerHTML += "<div class=\"slideContent\"><img src=\"".concat(carContent[random[_a5]][0], "\" alt=\"").concat(carContent[random[_a5]][1], "\"><h5>").concat(carContent[random[_a5]][1], "</h5>\n<p class=\"d-flex justify-content-between\"><span><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_a5]][2], "/day</span><a href=\"#formNaslov\"class=\"d-inline reqBtn\">Request now</a></p>\n</div>");
  }

  random = [];
}

function upisVrednosti() {
  var a = ["assets/img/seeMoreHonda.png", "assets/img/seeMoreSupra.jpeg", "assets/img/seeMoreRedSubaru.jpeg", "assets/img/seeMoreChevy.jpeg", "assets/img/seeMoreDemon.jpeg", "assets/img/seeMoreMerc.jpeg", "assets/img/seeMoreSubaru.jpeg", "assets/img/seeMoreBmw.jpeg", "assets/img/seeMore1.jpeg", "assets/img/seeMoreMustang.jpeg", "assets/img/seeMoreBmw2.jpeg", "assets/img/seeMoreFord.jpeg"];
  var b = document.getElementsByClassName("seeMore");
  var c = document.getElementById("seeMoreModal");

  var _loop = function _loop(d) {
    b[d].addEventListener("click", function () {
      b[d].value == carContent[random[d]][1] && (c.innerHTML = "<div class=\"row relative\"> <div class=\"col-12 p-0\"> <div id=\"header1\"> <div class=\"col-12 p-3 d-flex justify-content-between\"> <h2>CAR <span>ZONE</span></h2> <button type=\"button\" id=\"closeSeeMore\"><i class=\"fas fa-times-circle\"></i></button> </div></div><div id=\"body1\"> <div class=\"col-12 p-0\"><button type=\"button\" id=\"levo\"><i class=\"fas fa-angle-left\"></i></i></button><button type=\"button\" id=\"desno\"><i class=\"fas fa-angle-right\"></i></button> <div class=\"owl-carousel another-owl\"> <img src=\"".concat(carContent[random[d]][0], "\" class=\"img-fluid\" alt=\"car\"> <img src=\"").concat(a[random[d]], "\" class=\"img-fluid\" alt=\"car\"></div> </div><div class=\"col-12 p-2\"> <h3 class=\"text-center\">").concat(carContent[random[d]][1], "</h3> <hr class=\"m-0\"> <div class=\"row m-0 p-0\"> <div class=\"col-6 p-0\"> <ul class=\"d-flex flex-column text-left p-2\"> <li> <i class=\"fas fa-check\"></i> Chilled AC </li><li> <i class=\"fas fa-check\"></i> Heated seats </li><li> <i class=\"fas fa-check\"></i> Audio input </li><li> <i class=\"fas fa-check\"></i> Bluetooth </li></ul> </div><div class=\"col-6 p-0\"> <ul class=\"d-flex flex-column text-left p-2\"> <li> <i class=\"fas fa-check\"></i> Manual </li><li> <i class=\"fas fa-check\"></i> Unlimited mileage </li><li> <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[d]][3], " </li></ul> </div></div></div><div class=\"row m-0\"> <div class=\"col-12 font-weight-bold euro\"> <i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[d]][2], "<span>/ per day</span> </div></div></div><div id=\"footer1\" class=\"text-right\"> <button type=\"button\" class=\"request\">Request now!</button> </div></div></div>"), c.style.visibility = "visible", c.style.opacity = "1");
      var e = document.getElementsByClassName("request"),
          f = document.getElementById("closeSeeMore");
      f.addEventListener("click", function () {
        c.style.visibility = "hidden", c.style.opacity = "0";
      });

      for (var _a6 = 0; _a6 < e.length; _a6++) {
        e[_a6].addEventListener("click", function () {
          c.style.visibility = "hidden", c.style.opacity = "0";
        });
      }

      $(".another-owl").owlCarousel({
        responsiveClass: !0,
        loop: !0,
        nav: !1,
        dots: !1,
        responsive: {
          0: {
            items: 1,
            autoplay: !1
          }
        }
      });
      var g = $(".another-owl");
      $("#desno").click(function () {
        g.trigger("next.owl.carousel");
      }), $("#levo").click(function () {
        g.trigger("prev.owl.carousel");
      }), $(".request").click(function () {
        $("html,body").animate({
          scrollTop: $(".back").offset().top
        }, 1500);
      });
    });
  };

  for (var d = 0; d < b.length; d++) {
    _loop(d);
  }
}

function ispisCarContent() {
  generate();
  var a = document.getElementById("showCars");

  for (var _b3 = 0; _b3 < carContent.length - 6; _b3++) {
    a.innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4 scale\">\n<div class=\"imgHolder\">\n<img src=\"".concat(carContent[random[_b3]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[_b3]][1], "\">\n</div>\n<div class=\"holder\">\n<h5 class=\"mb-3\">").concat(carContent[random[_b3]][1], "</h5>\n<p><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[_b3]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[_b3]][3], "</p>\n<button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[_b3]][1], "\">See more</button>\n</div>\n</div>");
  }

  upisVrednosti();
  var b = 0;
  document.getElementById("loadMore").addEventListener("click", function () {
    if (1 == b && (document.getElementById("loadMore").style.display = "none"), 0 == b) {
      for (var a = 6; a < carContent.length - 3; a++) {
        var _b4 = document.createElement("div");

        _b4.classList.add("slide", "col-lg-4", "mr-auto", "col-12", "col-sm-6", "mb-4", "scale"), document.getElementById("showCars").appendChild(_b4), _b4.innerHTML += "\n<div class=\"imgHolder\">\n<img src=\"".concat(carContent[random[a]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[a]][1], "\">\n</div>\n<div class=\"holder\">\n<h5 class=\"mb-3\">").concat(carContent[random[a]][1], "</h5>\n<p><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[a]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[a]][3], "</p>\n<button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[a]][1], "\">See more</button>\n</div>");
      }

      upisVrednosti();
    }

    if (0 < b) {
      for (var a = 9; a < carContent.length; a++) {
        document.getElementById("showCars").innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4 slide scale\">\n<div class=\"imgHolder\">\n<img src=\"".concat(carContent[random[a]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[a]][1], "\">\n</div>\n<div class=\"holder\">\n<h5 class=\"mb-3\">").concat(carContent[random[a]][1], "</h5>\n<p><i class=\"fas fa-dollar-sign\"></i> ").concat(carContent[random[a]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[a]][3], "</p>\n<button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[a]][1], "\">See more</button>\n</div></div>");
      }

      upisVrednosti();
    }

    b++;
  });
}

function crossfade() {
  var a = ["assets/img/form1.jpg", "assets/img/form3.jpg", "assets/img/form4.jpg"],
      b = document.getElementById("absolute");

  for (indeks in a) {
    var c = document.createElement("img");
    c.setAttribute("src", a[indeks]), c.className = "slideShow fadeIn fadeOut", c.alt = "car", b.appendChild(c);
  }
}

var indeks = 0,
    indeksOpacity = 0;

function showImg() {
  var a = document.getElementsByClassName("slideShow");

  for (var b = 0; b < a.length; b++) {
    a[b].style.visibility = "hidden", a[b].classList.remove("fadeIn"), a[b].classList.remove("fadeOut");
  }

  indeks++, indeksOpacity++, indeks > a.length && (indeks = 1);
  indeksOpacity > a.length - 1 && (indeksOpacity = 0);
  a[indeks - 1].style.visibility = "visible", a[indeks - 1].classList.add("fadeOut"), a[indeksOpacity].style.visibility = "visible", a[indeksOpacity].classList.add("fadeIn"), setTimeout(showImg, 15e3);
}

var fullName = document.getElementById("fullName"),
    mail = document.getElementById("mail"),
    payment = document.getElementsByName("payment"),
    type = document.getElementById("carType"),
    cvv = document.getElementById("cvv"),
    model = document.getElementById("carModel"),
    fullNameError = document.getElementById("fullNameError"),
    mailError = document.getElementById("mailError"),
    paymentError = document.getElementById("paymentError"),
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

function proveraDays() {
  var a = document.getElementById("day"),
      b = document.getElementById("daysError");
  var c, d;
  return /^([1-9]|[1][0-4])$/.test(a.value) ? (b.innerHTML = "", a.classList.add("correct"), a.classList.remove("greska"), d = a.value, c = !0) : (b.innerHTML = "Car can be only rented for 14 days max", a.classList.add("greska"), a.classList.remove("correct"), c = !1), {
    value: d,
    "boolean": c
  };
}

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

    for (var _a7 = 0; 2 > _a7; _a7++) {
      var n = document.createElement("div");
      n.classList.add("w-50"), e.appendChild(n);
      var o = document.createElement("span");
      o.setAttribute("id", m[_a7]), o.classList.add("greskaTekst"), n.appendChild(o);
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
}, payment[0].onclick = function () {
  0 < cardMade && (document.querySelector(".cardHolder").remove(), cardMade--);
}, payment.forEach(function (a) {
  return a.onchange = function () {
    proveraCashCard();
  };
});

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
}, day.onchange = function () {
  proveraDays(), proveri();
};

var proveri = function proveri() {
  var a = document.getElementById("carType"),
      b = a.options[a.selectedIndex].value;

  for (var _a8 = 0; _a8 < cena.length; _a8++) {
    b == cena[_a8][0] && ProveriNazad(cena[_a8][1]);
  }
};

function ProveriNazad(a) {
  var b = proveraDays(),
      c = b.value;
  izabranAuto = c * a;
}

document.getElementById("searchBtn").addEventListener("click", function () {
  var a = proveraFullName(),
      b = proveraMail(),
      c = proveraDays(),
      d = proveraType(),
      e = proveraCashCard(),
      f = c["boolean"],
      g = e["boolean"],
      h = e.value;

  if (h == payment[1].value) {
    var _c = proveraExpDate(),
        _e = proveraCvv(),
        _h = proveraCardNumber();

    _c && _e && _h && celokupnaProvera(a, b, d, g, f);
  }

  h == payment[0].value && celokupnaProvera(a, b, d, g, f);
});

function celokupnaProvera(a, b, c, d, e) {
  var f = 0;
  a && b && c && d && e && 0 == dataArray.length && (dataArray.push(fullName.value), dataArray.push(mail.value), carContent[type.options[type.options]], dataArray.push(type.options[type.options.selectedIndex].value), dataArray.push(model.options[model.options.selectedIndex].text), dataArray.push(izabranAuto), f++, modal());
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
  g.innerHTML = "<span>".concat(a[0], "</span>, you've successfully sent the request for the <span>").concat(dataArray[2], " ").concat(dataArray[3], "</span>, all other information has been sent to your mail.</br>\n<span>").concat(dataArray[1], "</br></span> <span class=\"modalTotal\"> TOTAL: <i class=\"fas fa-dollar-sign\"></i> ").concat(izabranAuto, "</span>");
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
    b.innerHTML += " <div class=\"col-12 col-md-4 mb-3 mb-md-0\"><div class=\"col-12 testContent p-3\"><i class=\"fas fa-quote-right\"></i><div class=\"d-flex justify-content-center p-2\"><div class=\"testImage\"><img src=\"".concat(a[c][0], "\" alt=\"guy\"></div></div><span><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i></span><blockquote class=\"blockquote text-center\"><p class=\"mb-0\">").concat(a[c][1], "</p><footer class=\"blockquote-footer\"><cite>").concat(a[c][2], "</cite></footer></blockquote></div></div>");
  }
}

function autor() {
  var a = document.getElementById("box");
  a.innerHTML = "<div class=\"col-12 col-md-5 p-0\"><img src=\"assets/img/autor.jpg\" class=\"img-fluid\" alt=\"autor\"></div><div class=\"col-12 col-md-7 p-0 p-lg-5 pb-2 pb-md-0\" id=\"infoAutor\"><div class=\"row m-0\"><div class=\"col-12 d-flex justify-content-end p-1\"><button type=\"button\" id=\"closeAutor\"><i class=\"fas fa-times\"></i></button></div></div><div class=\"row m-0\"><div class=\"col-12 p-1 font-weight-bold\"><h3 class=\"text-center font-weight-bold\">".concat("Adam Nikoli\u0107", " <span>", "101/19", "</span></h3><p>", "Hi. I'm a web developer from Po\u017Eega, Serbia. Right now I'm studying Internet Technologies at Information and Communication Technologies College in Belgrade and I'm pursuing career in Web programming.", "</p></div></div><div class=\"row m-0\"><div class=\"col-12 d-flex flex-row flex-wrap linkovi justify-content-center\"><div ><a href=\"https://github.com/adamnik101\"><button type=\"button\" class=\"linkBtn\"><i class=\"fab fa-github-alt\"></i></button></a> <a href=\"https://www.linkedin.com\"><button type=\"button\" class=\"linkBtn\"><i class=\"fab fa-linkedin-in\"></i></button></a><a href=\"https://www.twitter.com\"><button type=\"button\" class=\"linkBtn\"><i class=\"fab fa-twitter\"></i></button></a><a href=\"https://adamnik101.github.io/adamportfolio/index.html\"><button type=\"button\" class=\"linkBtn\"><i class=\"fas fa-address-book\"></i></button></a></div> </div></div></div>");
}

function initMap() {
  var a = {
    lat: 33.992464973409135,
    lng: -117.72586818553368
  },
      b = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: a
  }),
      c = new google.maps.Marker({
    position: a,
    map: b
  });
}

$(document).ready(function () {
  $("#clickSide").click(function () {
    var a = 1;
    $(".slideIn").each(function () {
      $(this).delay(200 * a).animate({
        left: "0",
        opacity: "1"
      }, 700), a++;
    }), $("#openSide").css("box-shadow", "0 0 0 10000px rgba(0,0,0,.50)");
  }), $("#closeSide").click(function () {
    $(".slideIn").each(function () {
      $(this).animate({
        left: "-250px"
      });
    }), $("#openSide").css("box-shadow", "none");
  }), $("body").tooltip({
    selector: ".fa-info-circle"
  }), $(".canvasTekst").animate({
    right: "0"
  }, 1e3), $(window).scroll(function () {
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
    }, 300), !1;
  }), $("#loadMore").click(function () {
    $(".slide").each(function (a) {
      $(this).delay(450 * a).animate({
        top: "0",
        opacity: "1"
      });
    });
  }), $("#requestBtn").click(function () {
    $("html,body").animate({
      scrollTop: $(".back").offset().top
    }, 1500);
  }), $(".first-owl").owlCarousel({
    responsiveClass: !0,
    autoplay: !0,
    animateIn: !0,
    loop: !0,
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
  var a = $(".first-owl");
  $("#btnDesno").click(function () {
    a.trigger("next.owl.carousel");
  }), $("#btnLevo").click(function () {
    a.trigger("prev.owl.carousel");
  }), $("#searchBtn").on("click", function () {
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