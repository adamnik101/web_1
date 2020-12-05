"use strict";

var myBtn = document.getElementById("btnTop"); //pozivanje pri ucitavanju stranice za odredjene delove sajta

window.onload = function () {
  navigacija1();
  sideNav();
  ddl();
  info1();
  showImg();
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
        document.getElementById("brandError").textContent = "";
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


var carContent = [["assets/img/sports_civic1.jpeg", "Honda Civic Type R", "150/day", "350hp"], ["assets/img/sports_supra1.jpeg", "Toyota Supra", "300/day", "382hp"], ["assets/img/sports_subaru1.jpeg", "Subaru Impreza WRX", "120/day", "340hp"], ["assets/img/muscle_chevy1.jpg", "Chevrolet ZL1", "200/day", "650hp"], ["assets/img/muscle_demon1.jpeg", "Dodge Challenger", "200/day", "700hp"], ["assets/img/sports_benz1.jpeg", "Mercedes 450 CLS", "160/day", "375hp"], ["assets/img/sports_evo.jpeg", "Subaru WRX", "130/day", "360hp"], ["assets/img/sports_bmw1.jpeg", "BMW 420d Coupe", "120/day", "310hp"], ["assets/img/sports_mitsubishi1.jpg", "Mitsubishi EVO X", "110/day", "290hp"], ["assets/img/muscle_mustang1.jpeg", "Ford Mustang", "180/day", "750hp"], ["assets/img/sports_bmw2.jpeg", "BMW X5", "110/day", "310hp"], ["assets/img/suv_ford1.jpeg", "Ford F-150", "100/day", "280hp"]]; //niz u koji ubacujemo DISTINCT vrednosti do 12

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
  child.classList.add("owl-carousel");
  parent.appendChild(child);

  for (var i = 0; i < 6; i++) {
    child.innerHTML += "<div class=\"slideContent\"><img src=\"".concat(carContent[random[i]][0], "\" alt=\"").concat(carContent[random[i]][1], "\"><h5>").concat(carContent[random[i]][1], "</h5>\n            <p class=\"d-flex justify-content-between\"><span><i class=\"fas fa-euro-sign\"></i> ").concat(carContent[random[i]][2], "</span><a href=\"#!\"class=\"d-inline reqBtn\">Request now</a></p>\n        </div>");
  }

  random = [];
}

owlCarouselContent();

function ispisCarContent() {
  generate();
  var div = document.getElementById("showCars"); // ispisivanje prvih 6 artikala

  for (var i = 0; i < carContent.length - 6; i++) {
    div.innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4 scale\">\n            <div class=\"imgHolder\">\n                <img src=\"".concat(carContent[random[i]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[i]][1], "\">\n            </div>\n            <div class=\"holder\">\n            <h5 class=\"mb-3\">").concat(carContent[random[i]][1], "</h5>\n            <p><i class=\"fas fa-euro-sign\"></i> ").concat(carContent[random[i]][2], " &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[i]][3], "</p>\n            <a href=\"#\">ORDER NOW</a>\n            </div>\n        </div>");
  }

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
        slide.innerHTML += "\n                    <div class=\"imgHolder\">\n                        <img src=\"".concat(carContent[random[i]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[i]][1], "\">\n                    </div>\n                    <div class=\"holder\">\n                    <h5 class=\"mb-3\">").concat(carContent[random[i]][1], "</h5>\n                    <p><i class=\"fas fa-euro-sign\"></i> ").concat(carContent[random[i]][2], " &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[i]][3], "</p>\n                    <a href=\"#\">ORDER NOW</a>\n                    </div>");
      }
    }

    if (click1 > 0) {
      //ispisivanje ostatka 
      for (var i = 9; i < carContent.length; i++) {
        document.getElementById("showCars").innerHTML += "<div class=\"col-lg-4 col-12 col-sm-6 mb-4 slide scale\">\n                    <div class=\"imgHolder\">\n                        <img src=\"".concat(carContent[random[i]][0], "\" class=\"img-fluid\" alt=\"").concat(carContent[random[i]][1], "\">\n                    </div>\n                    <div class=\"holder\">\n                    <h5 class=\"mb-3\">").concat(carContent[random[i]][1], "</h5>\n                    <p><i class=\"fas fa-euro-sign\"></i> ").concat(carContent[random[i]][2], " &nbsp; <i class=\"fas fa-tachometer-alt\"></i> ").concat(carContent[random[i]][3], "</p>\n                    <a href=\"#\">ORDER NOW</a>\n                    </div></div>");
      }
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
}

crossfade(); // kreiranje crossfade efekta za smooth prelazak sa slike na sliku

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
} //dohvatanje elemenata


var fullName = document.getElementById("fullName");
var mail = document.getElementById("mail");
var payment = document.getElementsByName("payment"); //var expDate = document.getElementById("validThru"); 

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
    fullNameError.innerHTML = 'Incorrect format <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="ex: John Doe"></i>';
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
    mailError.innerHTML = 'Please enter a valid email address. <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="ex: johndoe@example.com"></i>';
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
  var value;

  var _boolean;

  for (var i = 0; i < payment.length; i++) {
    if (!payment[i].checked) {
      paymentError.innerHTML = "Please choose payment method.";
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

var formMore = document.createElement("div");
var parentDiv = document.getElementById("card");
var cardMade = 0;

payment[1].onclick = function () {
  if (cardMade == 0) {
    console.log("1");
    var placeholder = ["MM/YY", "***"];
    var id = ["validThru", "cvv"];
    var labelMain = ["Expiration date:", "CVV:"];
    var formMore = document.createElement("div");
    formMore.classList.add("d-flex", "justify-content-between", "flex-wrap", "mt-2", "mb-2", "cardHolder");
    var input1 = document.createElement("input");
    input1.classList.add("w-100");
    input1.setAttribute("type", "text");
    input1.setAttribute("placeholder", "Card number: 5XXX-XXXX-XXXX-XXXX");
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

    for (var _i = 0; _i < 2; _i++) {
      var greske = document.createElement("div");
      greske.classList.add("w-50");
      formMore.appendChild(greske);
      var span = document.createElement("span");
      span.setAttribute("id", idGreska[_i]);
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
  console.log("0");

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
  var regExCardNumber = /^5[0-9]{3}(\-[0-9]{4}){3}$/;
  var cardNumber = document.getElementById("cardContent");
  var cardNumberError = document.getElementById("cardNumberError");

  if (!regExCardNumber.test(cardNumber.value)) {
    cardNumberError.innerHTML = "Format: 5XXX-XXXX-XXXX-XXXX";
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
  var regExExpDate = /^([0][1-9]|[1-2][0-2])\/([2][0-6])$/;
  var expDate = document.getElementById("validThru");
  var expDateError = document.getElementById("expDateError");

  if (!regExExpDate.test(expDate.value)) {
    expDateError.innerHTML = 'Incorrect format <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="Example: 05/21"></i>';
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
    cvvError.innerHTML = 'Incorrect format <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="Example: 123"></i>';
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

document.getElementById("searchBtn").addEventListener("click", function () {
  var fullName = proveraFullName();
  var mail = proveraMail();
  var type = proveraType();
  var cashOrCard = proveraCashCard();
  var bool = cashOrCard["boolean"];
  var cardValue = cashOrCard.value;

  if (cardValue == payment[1].value) {
    var exp = proveraExpDate();

    var _cvv = proveraCvv();

    var card = proveraCardNumber();
    console.log(exp, _cvv, card);

    if (exp && _cvv && card) {
      celokupnaProvera(fullName, mail, type, bool);
    }
  }

  if (cardValue == payment[0].value) {
    celokupnaProvera(fullName, mail, type, bool);
  }
});

function celokupnaProvera(imeProvera, mailProvera, typeProvera, cashCardProvera) {
  var predajaPodataka = 0; //provera svih unetih podataka

  if (imeProvera && mailProvera && typeProvera && cashCardProvera) {
    if (dataArray.length == 0) {
      //upisivanje podataka u niz
      dataArray.push(fullName.value);
      dataArray.push(mail.value);
      dataArray.push(type.options[type.options.selectedIndex].value);
      dataArray.push(model.options[model.options.selectedIndex].text);
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
  p.innerHTML = "<span>".concat(firstName[0], "</span>, you've successfully sent the request for the <span>").concat(dataArray[2], " ").concat(dataArray[3], "</span>, all other information has been sent to your mail.</br>\n    <span>").concat(dataArray[1], "</span>");
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

$(document).ready(function () {
  $('body').tooltip({
    selector: '.fa-info-circle'
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $(".sectionContent").each(function (i) {
        $(this).delay(200 * i).animate({
          opacity: "1",
          top: "0"
        }, "slow");
      });
    }

    if ($(window).scrollTop() > 900) {
      $(".featured").animate({
        left: "0",
        opacity: "1"
      });
    }
  });
  ispisCarContent();
  $("#loadMore").click(function () {
    $(".slide").each(function (i) {
      $(this).delay(450 * i).animate({
        top: "0",
        opacity: "1"
      });
    });
  });
  $("#requestBtn").click(function () {
    $("html,body").animate({
      scrollTop: $(".back").offset().top
    }, 1500);
  });
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