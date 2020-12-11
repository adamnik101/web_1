"use strict";

//pozivanje pri ucitavanju stranice za odredjene delove sajta
window.onload = function () {
  navigacija1();
  sideNav();
  ddl();
  info1();
  showImg();
};

window.onscroll = function () {
  scrollUp1();
};

function scrollUp1() {
  var myBtn = document.getElementById("btnTop");

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    myBtn.style.visibility = "visible";
  } else {
    myBtn.style.visibility = "hidden";
  }
}

function info1() {
  var naslov = ["WELCOME TO OUR SITE", "CAR", "ZONE"];
  var content = [["BRANDS", "We got latest and most popular brands from automotive industry", "fas fa-car"], ["ROAD SUPPORT", "24/7 available support to help you on road if you have any mechanical problem with our car", "fas fa-road"], ["AFFORDABLE", "Exotic cars that have best deals according to their performance", "fas fa-coins"]];
  document.getElementsByClassName("naslovContent")[0].innerHTML = "<div class=\"col-12 text-center naslov p-4\">\n                                                                        <h4>".concat(naslov[0], "</h4>\n                                                                        <span><i class=\"fas fa-angle-double-down\"></i></span>\n                                                                        <h1><span>").concat(naslov[1], "</span> ").concat(naslov[2], "</h1>\n                                                                    </div>");

  for (var i = 0; i < content.length - 1; i++) {
    document.getElementsByClassName("naslovContent")[0].innerHTML += "\n        <div class=\"col-12 col-sm-6 col-lg-4 text-center\"><div class=\"col-12 sectionContent p-2 mb-3\"><i class=\"".concat(content[i][2], "\"></i><h5>").concat(content[i][0], "</h5><p>").concat(content[i][1], "</p></div></div>");
  } //zbog poslednjeg elementa kome je potreban col-sm-12


  document.getElementsByClassName("naslovContent")[0].innerHTML += "\n        <div class=\"col-12 col-sm-12 col-lg-4 text-center\">\n                        <div class=\"col-12 sectionContent p-2 mb-3\">\n                            <i class=\"".concat(content[2][2], "\"></i>\n                        <h5>").concat(content[2][0], "</h5>\n                        <p>").concat(content[2][1], "</p>\n                        </div>\n                    </div>");
} // Dinamicko ispisivanje navigacije i sidenav


var navigacija = ["Home", "Cars", "About", "Contact", "Documentation"];
var navigacijaLinkovi = ["index.html", "search.html", "about.html", "contact.html", "#"];

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
    sideLi.classList.add("slideIn");
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
document.getElementById("closeSide").addEventListener("click", closeNav);
var izabranAuto;
var cena = [["Chevrolet", 180], ["Dodge", 200], ["BMW", 120], ["Subaru", 130], ["Mitsubishi", 110], ["Ford", 160], ["Honda", 120], ["Toyota", 300], ["Mercedes", 160]]; // dinamicko ispisivanje ddl na osnovu prethodno izabranog polja u select-u

function ddl() {
  var carsAndModels = {};
  carsAndModels["Chevrolet"] = ["ZL1"];
  carsAndModels["Dodge"] = ["Challenger"];
  carsAndModels["BMW"] = ["420d Coupe", "X6m"];
  carsAndModels["Subaru"] = ["Impreza WRX STi", "WRX"];
  carsAndModels["Mitsubishi"] = ["EVO X"];
  carsAndModels["Ford"] = ["Mustang", "F-150"];
  carsAndModels["Honda"] = ["Civic Type R"];
  carsAndModels["Toyota"] = ["Supra"];
  carsAndModels["Mercedes"] = ["450 CLS"];
  var model = document.getElementById("carModel");
  model.disabled = true;
  var firstOpt = document.createElement("option");
  firstOpt.setAttribute("value", "0");
  var sadrzaj = document.createTextNode("Choose a model");
  firstOpt.appendChild(sadrzaj);
  model.appendChild(firstOpt);

  document.getElementById("carType").onchange = function () {
    model.disabled = this.value == '0';
    var selCar = this.options[this.selectedIndex].value;
    model.appendChild(firstOpt);

    while (model.options.length) {
      model.remove(0);
    }

    for (var _i = 0; _i < cena.length; _i++) {
      if (selCar == cena[_i][0]) {
        console.log(selCar);
        ProveriNazad(cena[_i][1]);
      }
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
        document.getElementById("brandError").textContent = "";
      }
    }
  };

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


var carContent = [["assets/img/sports_civic1.jpg", "Honda Civic Type R", 120, "350hp"], ["assets/img/sports_supra1.jpg", "Toyota Supra", 300, "382hp"], ["assets/img/sports_subaru1.jpg", "Subaru Impreza WRX", 130, "340hp"], ["assets/img/muscle_chevy1.jpg", "Chevrolet ZL1", 180, "650hp"], ["assets/img/muscle_demon1.jpg", "Dodge Challenger", 200, "700hp"], ["assets/img/sports_benz1.jpg", "Mercedes 450 CLS", 160, "375hp"], ["assets/img/sports_evo.jpg", "Subaru WRX", 130, "360hp"], ["assets/img/sports_bmw1.jpg", "BMW 420d Coupe", 120, "310hp"], ["assets/img/sports_mitsubishi1.jpg", "Mitsubishi EVO X", 110, "290hp"], ["assets/img/muscle_mustang1.jpeg", "Ford Mustang", 160, "750hp"], ["assets/img/sports_bmw2.jpg", "BMW X6m", 120, "310hp"], ["assets/img/suv_ford1.jpg", "Ford F-150", 160, "280hp"]]; //niz u koji ubacujemo DISTINCT vrednosti do 12

var random = []; // funkcija za random ispisivanje iz niza

function generate() {
  //broj elemenata niza
  for (var i = 0; i < carContent.length; i++) {
    var trenutni = Math.floor(Math.random() * carContent.length);

    if (random.indexOf(trenutni) == -1) {
      random.push(trenutni);
    } else i--;
  }
}

function owlCarouselContent() {
  generate();
  var parent = document.getElementById("automobili");
  var child = document.createElement("div");
  child.classList.add("owl-carousel", "first-owl");
  parent.appendChild(child);

  for (var i = 0; i < 6; i++) {
    child.innerHTML += "<div class=\"slideContent\"><img src=\"".concat(carContent[random[i]][0], "\" alt=\"").concat(carContent[random[i]][1], "\"><h5>").concat(carContent[random[i]][1], "</h5>\n            <p class=\"d-flex justify-content-between\"><span><i class=\"fas fa-euro-sign\"></i> ").concat(carContent[random[i]][2], "/day</span><a href=\"#!\"class=\"d-inline reqBtn\">Request now</a></p>\n        </div>");
  }

  random = [];
}

owlCarouselContent();

function upisVrednosti() {
  var noveSlike = ["assets/img/seeMoreHonda.png", "assets/img/seeMoreSupra.jpeg", "assets/img/seeMoreRedSubaru.jpeg", "assets/img/seeMoreChevy.jpeg", "assets/img/seeMoreDemon.jpeg", "assets/img/seeMoreMerc.jpeg", "assets/img/seeMoreSubaru.jpeg", "assets/img/seeMoreBmw.jpeg", "assets/img/seeMore1.jpeg", "assets/img/seeMoreMustang.jpeg", "assets/img/seeMoreBmw2.jpeg", "assets/img/seeMoreFord.jpeg"];
  var seeMore = document.getElementsByClassName("seeMore");
  var modal = document.getElementById("seeMoreModal");

  var _loop = function _loop(i) {
    seeMore[i].addEventListener("click", function () {
      if (seeMore[i].value == carContent[random[i]][1]) {
        modal.innerHTML = "<div class=\"row relative\"> <div class=\"col-12 p-0\"> <div id=\"header1\"> <div class=\"col-12 p-3 d-flex justify-content-between\"> <h2>CAR <span>ZONE</span></h2> <button type=\"button\" id=\"closeSeeMore\"><i class=\"fas fa-times-circle\"></i></button> </div></div><div id=\"body1\"> <div class=\"col-12 p-0\"><button type=\"button\" id=\"levo\"><i class=\"fas fa-angle-left\"></i></i></button><button type=\"button\" id=\"desno\"><i class=\"fas fa-angle-right\"></i></button> <div class=\"owl-carousel another-owl\"> <img src=\"".concat(carContent[random[i]][0], "\" class=\"img-fluid\" alt=\"car\"> <img src=\"").concat(noveSlike[random[i]], "\" class=\"img-fluid\" alt=\"car\"></div> </div><div class=\"col-12 p-2\"> <h3 class=\"text-center\">").concat(carContent[random[i]][1], "</h3> <hr class=\"m-0\"> <div class=\"row m-0 p-0\"> <div class=\"col-6 p-0\"> <ul class=\"d-flex flex-column text-left p-2\"> <li> <i class=\"fas fa-check\"></i> Chilled AC </li><li> <i class=\"fas fa-check\"></i> Heated seats </li><li> <i class=\"fas fa-check\"></i> Audio input </li><li> <i class=\"fas fa-check\"></i> Bluetooth </li></ul> </div><div class=\"col-6 p-0\"> <ul class=\"d-flex flex-column text-left p-2\"> <li> <i class=\"fas fa-check\"></i> Manual </li><li> <i class=\"fas fa-check\"></i> Unlimited mileage </li><li> <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[i]][3], " </li></ul> </div></div></div><div class=\"row m-0\"> <div class=\"col-12 font-weight-bold euro\"> <i class=\"fas fa-euro-sign\"></i> ").concat(carContent[random[i]][2], "<span>/ per day</span> </div></div></div><div id=\"footer1\" class=\"text-right\"> <button type=\"button\" class=\"request\">Request now!</button> </div></div></div>");
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
      }

      var request = document.getElementsByClassName("request");
      var closeSeeMore = document.getElementById("closeSeeMore");
      closeSeeMore.addEventListener("click", function () {
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
      });

      for (var _i2 = 0; _i2 < request.length; _i2++) {
        request[_i2].addEventListener("click", function () {
          modal.style.visibility = "hidden";
          modal.style.opacity = "0";
        });
      }

      $(".another-owl").owlCarousel({
        responsiveClass: true,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
          0: {
            items: 1,
            autoplay: false
          }
        }
      });
      var $owl = $(".another-owl");
      $("#desno").click(function () {
        $owl.trigger("next.owl.carousel");
      });
      $("#levo").click(function () {
        $owl.trigger("prev.owl.carousel");
      });
      $(".request").click(function () {
        $("html,body").animate({
          scrollTop: $(".back").offset().top
        }, 1500);
      });
    });
  };

  for (var i = 0; i < seeMore.length; i++) {
    _loop(i);
  }
}

function ispisCarContent() {
  generate();
  var div = document.getElementById("showCars"); // ispisivanje prvih 6 artikala

  for (var i = 0; i < carContent.length - 6; i++) {
    div.innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4 scale\">\n            <div class=\"imgHolder\">\n                <img src=\"".concat(carContent[random[i]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[i]][1], "\">\n            </div>\n            <div class=\"holder\">\n            <h5 class=\"mb-3\">").concat(carContent[random[i]][1], "</h5>\n            <p><i class=\"fas fa-euro-sign\"></i> ").concat(carContent[random[i]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[i]][3], "</p>\n            <button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[i]][1], "\">See more</button>\n            </div>\n        </div>");
  }

  upisVrednosti();
  var click1 = 0;
  document.getElementById("loadMore").addEventListener("click", function () {
    if (click1 == 1) {
      document.getElementById("loadMore").style.display = "none";
    }

    if (click1 == 0) {
      //ispisivanje narednih 3 elemenata iz niza pocev od 6
      for (var i = 6; i < carContent.length - 3; i++) {
        var slide = document.createElement("div");
        slide.classList.add("slide", "col-lg-4", "mr-auto", "col-12", "col-sm-6", "mb-4", "scale");
        document.getElementById("showCars").appendChild(slide);
        slide.innerHTML += "\n                    <div class=\"imgHolder\">\n                        <img src=\"".concat(carContent[random[i]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[i]][1], "\">\n                    </div>\n                    <div class=\"holder\">\n                    <h5 class=\"mb-3\">").concat(carContent[random[i]][1], "</h5>\n                    <p><i class=\"fas fa-euro-sign\"></i> ").concat(carContent[random[i]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[i]][3], "</p>\n                    <button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[i]][1], "\">See more</button>\n                    </div>");
      }

      upisVrednosti();
    }

    if (click1 > 0) {
      //ispisivanje ostatka 
      for (var i = 9; i < carContent.length; i++) {
        document.getElementById("showCars").innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4 slide scale\">\n                    <div class=\"imgHolder\">\n                        <img src=\"".concat(carContent[random[i]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[i]][1], "\">\n                    </div>\n                    <div class=\"holder\">\n                    <h5 class=\"mb-3\">").concat(carContent[random[i]][1], "</h5>\n                    <p><i class=\"fas fa-euro-sign\"></i> ").concat(carContent[random[i]][2], "/day &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[i]][3], "</p>\n                    <button type=\"button\" class=\"seeMore\" value=\"").concat(carContent[random[i]][1], "\">See more</button>\n                    </div></div>");
      }

      upisVrednosti();
    }

    click1++;
  });
} //ispisivanje slika za crossfade efekat


function crossfade() {
  var formCrossfade = ["assets/img/form1.jpg", "assets/img/form3.jpg", "assets/img/form4.jpg"];
  var parent = document.getElementById("absolute");

  for (indeks in formCrossfade) {
    var img = document.createElement("img");
    img.setAttribute("src", formCrossfade[indeks]);
    img.className = "slideShow fadeIn fadeOut";
    img.alt = "car";
    parent.appendChild(img);
  }
} // kreiranje crossfade efekta za smooth prelazak sa slike na sliku


var indeks = 0;
var indeksOpacity = 0;

function showImg() {
  var slideShow = document.getElementsByClassName("slideShow");

  for (var i = 0; i < slideShow.length; i++) {
    slideShow[i].style.visibility = "hidden";
    slideShow[i].classList.remove("fadeIn");
    slideShow[i].classList.remove("fadeOut");
  }

  indeks++;
  indeksOpacity++;

  if (indeks > slideShow.length) {
    indeks = 1;
  }

  ;

  if (indeksOpacity > slideShow.length - 1) {
    indeksOpacity = 0;
  }

  ;
  slideShow[indeks - 1].style.visibility = "visible";
  slideShow[indeks - 1].classList.add("fadeOut");
  slideShow[indeksOpacity].style.visibility = "visible";
  slideShow[indeksOpacity].classList.add("fadeIn");
  setTimeout(showImg, 15000);
}

crossfade(); //dohvatanje elemenata

var fullName = document.getElementById("fullName");
var mail = document.getElementById("mail");
var payment = document.getElementsByName("payment");
var type = document.getElementById("carType");
var cvv = document.getElementById("cvv");
var model = document.getElementById("carModel"); //dohvatanje greski

var fullNameError = document.getElementById("fullNameError");
var mailError = document.getElementById("mailError");
var paymentError = document.getElementById("paymentError");
var cvvError = document.getElementById("cvvError");
var brandError = document.getElementById("brandError"); //regularni izrazi

var regExFullName = /^[A-ŠĐČĆŽ][a-zšđčćž]{2,14}(\s[A-ZČĆŽŠĐ][a-zšđčćž]{2,19})+$/;
var regExMail = /^[a-z][a-z\.\d-\_]+\@[a-z]+(\.[a-z]+)+$/;
var dataArray = [];

function proveraFullName() {
  //full name error
  if (!regExFullName.test(fullName.value)) {
    fullNameError.innerHTML = 'Incorrect format <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="e.g. John Doe"></i>';
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
    mailError.innerHTML = 'Please enter a valid email address. <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="e.g. johndoe@example.com"></i>';
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

  for (var i = 0; i < payment.length; i++) {
    if (!payment[i].checked) {
      paymentError.innerHTML = "Required";
      _boolean = false;
      continue;
    } else {
      paymentError.innerHTML = "";
      _boolean = true;
      value = payment[i].value;
      break;
    }
  }

  return {
    value: value,
    "boolean": _boolean
  };
}

function proveraDays() {
  //provera da li je korisnik uneo broj dana 
  var day = document.getElementById("day");
  var dayError = document.getElementById("daysError");
  var regExDays = /^([1-9]|[1][0-4])$/;

  var _boolean2;

  var value;

  if (!regExDays.test(day.value)) {
    dayError.innerHTML = "Car can be only rented for 14 days max";
    day.classList.add("greska");
    day.classList.remove("correct");
    _boolean2 = false;
  } else {
    dayError.innerHTML = "";
    day.classList.add("correct");
    day.classList.remove("greska");
    value = day.value;
    _boolean2 = true;
  }

  return {
    value: value,
    "boolean": _boolean2
  };
}

var cardMade = 0;

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

    for (var i = 0; i < 2; i++) {
      var wrap = document.createElement("div");
      wrap.classList.add("w-50");
      formMore.appendChild(wrap);
      var label = document.createElement("label");
      label.classList.add("w-100");
      label.setAttribute("for", id[i]);
      var labelText = document.createTextNode(labelMain[i]);
      label.appendChild(labelText);
      wrap.appendChild(label);
      var input2 = document.createElement("input");
      input2.classList.add("w-50");
      input2.setAttribute("type", "text");
      input2.setAttribute("placeholder", placeholder[i]);
      input2.setAttribute("id", id[i]);
      wrap.appendChild(input2);
    }

    var idGreska = ["expDateError", "cvvError"];

    for (var _i3 = 0; _i3 < 2; _i3++) {
      var greske = document.createElement("div");
      greske.classList.add("w-50");
      formMore.appendChild(greske);
      var span = document.createElement("span");
      span.setAttribute("id", idGreska[_i3]);
      span.classList.add("greskaTekst");
      greske.appendChild(span);
    }

    cardMade++;
    parentDiv.appendChild(formMore);
  }

  document.getElementById("validThru").onchange = function () {
    proveraExpDate();
  };

  document.getElementById("cvv").onchange = function () {
    proveraCvv();
  };

  document.getElementById("cardContent").onchange = function () {
    proveraCardNumber();
  };
};

payment[0].onclick = function () {
  if (cardMade > 0) {
    document.querySelector(".cardHolder").remove();
    cardMade--;
  }
};

payment.forEach(function (selected) {
  return selected.onchange = function () {
    proveraCashCard();
  };
});

function proveraCardNumber() {
  var regExCardNumber = /^5[0-9]{15}$/;
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
  var regExExpDate = /^([0][1-9]|[1-2][0-2])\/(([2][0-6])|([2][0][2-3][0-6]))$/;
  var expDate = document.getElementById("validThru");
  var expDateError = document.getElementById("expDateError");

  if (!regExExpDate.test(expDate.value)) {
    expDateError.innerHTML = 'Incorrect format <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="e.g. 05/21 OR 05/2021"></i>';
    expDate.classList.add("greska");
    expDate.classList.remove("correct");
    return false;
  } else {
    expDateError.textContent = "";
    expDate.classList.remove("greska");
    expDate.classList.add("correct");
    return true;
  }
}

function proveraCvv() {
  var regExCvv = /^[0-9]{3}$/;
  var cvv = document.getElementById("cvv");
  var cvvError = document.getElementById("cvvError");

  if (!regExCvv.test(cvv.value)) {
    cvvError.innerHTML = 'Incorrect format <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="e.g. 123"></i>';
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
  // car choose error
  if (type.options[type.options.selectedIndex].value != 0) {
    brandError.textContent = "";
    return true;
  } else {
    brandError.textContent = "You must choose brand!";
    return false;
  }
}

fullName.onchange = function () {
  proveraFullName();
};

mail.onchange = function () {
  proveraMail();
};

day.onchange = function () {
  proveraDays();
  proveri();
};

var proveri = function proveri() {
  var type = document.getElementById("carType");
  var selCar = type.options[type.selectedIndex].value;

  for (var i = 0; i < cena.length; i++) {
    if (selCar == cena[i][0]) {
      ProveriNazad(cena[i][1]);
    }
  }
};

function ProveriNazad(cena) {
  var izabraniDani = proveraDays();
  var brojDana = izabraniDani.value;
  izabranAuto = brojDana * cena;
}

document.getElementById("searchBtn").addEventListener("click", function () {
  var fullName = proveraFullName();
  var mail = proveraMail();
  var day = proveraDays();
  var type = proveraType();
  var cashOrCard = proveraCashCard();
  var pickedDay = day["boolean"];
  var bool = cashOrCard["boolean"];
  var cardValue = cashOrCard.value;

  if (cardValue == payment[1].value) {
    var exp = proveraExpDate();

    var _cvv = proveraCvv();

    var card = proveraCardNumber();

    if (exp && _cvv && card) {
      celokupnaProvera(fullName, mail, type, bool, pickedDay);
    }
  }

  if (cardValue == payment[0].value) {
    celokupnaProvera(fullName, mail, type, bool, pickedDay);
  }
});

function celokupnaProvera(imeProvera, mailProvera, typeProvera, cashCardProvera, dayProvera) {
  var predajaPodataka = 0; //provera svih unetih podataka

  if (imeProvera && mailProvera && typeProvera && cashCardProvera && dayProvera) {
    if (dataArray.length == 0) {
      //upisivanje podataka u niz
      dataArray.push(fullName.value);
      dataArray.push(mail.value);
      carContent[type.options[type.options]];
      dataArray.push(type.options[type.options.selectedIndex].value);
      dataArray.push(model.options[model.options.selectedIndex].text);
      dataArray.push(izabranAuto);
      console.log(dataArray);
      predajaPodataka++;
      console.log(predajaPodataka);
      modal();
    }
  }
} //dinamicko kreiranje modala 


function modal() {
  var firstName = dataArray[0].split(" ");
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
  p.innerHTML = "<span>".concat(firstName[0], "</span>, you've successfully sent the request for the <span>").concat(dataArray[2], " ").concat(dataArray[3], "</span>, all other information has been sent to your mail.</br>\n    <span>").concat(dataArray[1], "</br></span> <span class=\"modalTotal\"> TOTAL: <i class=\"fas fa-euro-sign\"></i> ").concat(izabranAuto, "</span>");
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

    dataArray = [];
    row.remove();
  };
}

function testimonials() {
  var testimonials = [["assets/img/test1.png", "During all the years we have rented a car from you, there has never been any problems. We are satisfied with both price and quality of your cars!", "Michael De Santa"], ["assets/img/test2.png", "Thank you all once again for your exceptional service level. The customer experience served by everyone at CarZone is 1st class!", "Trevor Philips"], ["assets/img/test3.png", "Friendly and reliable service on site. The booking went smoothly and was handled quickly. The car was perfect and very new!", "Franklin Clinton"]];
  var parent = document.getElementById("testimonials");

  for (var i = 0; i < testimonials.length; i++) {
    parent.innerHTML += " <div class=\"col-12 col-md-4 mb-3 mb-md-0\">\n        <div class=\"col-12 testContent p-3\">\n            <i class=\"fas fa-quote-right\"></i>\n            <div class=\"d-flex justify-content-center p-2\">\n                <div class=\"testImage\">\n                    <img src=\"".concat(testimonials[i][0], "\" alt=\"guy\">\n                </div>\n            </div>\n            <span><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i></span>\n            <blockquote class=\"blockquote text-center\">\n                <p class=\"mb-0\">").concat(testimonials[i][1], "</p>\n                <footer class=\"blockquote-footer\"><cite>").concat(testimonials[i][2], "</cite></footer>\n              </blockquote>\n        </div>\n    </div>");
  }
}

testimonials(); // Google maps API

function initMap() {
  // The location of Uluru
  var uluru = {
    lat: 33.992464973409135,
    lng: -117.72586818553368
  }; // The map, centered at Uluru

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uluru
  }); // The marker, positioned at Uluru

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

$(document).ready(function () {
  ispisCarContent(); //animacija sidenav elements 

  $("#clickSide").click(function () {
    var i = 1;
    $(".slideIn").each(function () {
      $(this).delay(200 * i).animate({
        left: "0",
        opacity: "1"
      }, 700);
      i++;
    });
    $("#openSide").css("box-shadow", "0 0 0 10000px rgba(0,0,0,.50)");
  });
  $("#closeSide").click(function () {
    $(".slideIn").each(function () {
      $(this).animate({
        left: "-250px"
      });
    });
    $("#openSide").css("box-shadow", "none");
  }); //tooltip initialization bootstrap

  $('body').tooltip({
    selector: '.fa-info-circle'
  }); //canvasTekst animation from right

  $(".canvasTekst").animate({
    right: "0"
  }, 1000); //animations card block & btn top

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
  }); //animate smooth scroll to top

  $('#btnTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  }); //animate cars one after one before has finished animation

  $("#loadMore").click(function () {
    $(".slide").each(function (i) {
      $(this).delay(450 * i).animate({
        top: "0",
        opacity: "1"
      });
    });
  }); //scroll to request form section

  $("#requestBtn").click(function () {
    $("html,body").animate({
      scrollTop: $(".back").offset().top
    }, 1500);
  }); //plugin for carousel aka owl-carousel

  $(".first-owl").owlCarousel({
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
  }); //buttons to navigate owl-carousel

  var $owl = $(".first-owl");
  $("#btnDesno").click(function () {
    $owl.trigger("next.owl.carousel");
  });
  $("#btnLevo").click(function () {
    $owl.trigger("prev.owl.carousel");
  }); //animacija pri prikazivanju modala nakon uspesnog popunjavanja forme

  $("#searchBtn").on("click", function () {
    $("#modal").animate({
      opacity: "1"
    }, 1000);
    $("#modal .row").animate({
      opacity: "1",
      top: "0"
    }, 1000);
  });
});