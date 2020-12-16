//cekanje za izvrsavanje DOM-a
window.addEventListener("DOMContentLoaded", function(){
    navigacija1();
    info1();
    owlCarouselContent();
    ispisCarContent();
    crossfade();
    ddl();
    testimonials();
    sideNav();
})
window.onload = function(){
    showImg();
}
window.onscroll = function(){
    scrollUp1()
};


var navigacija = [["<i class='fas fa-home'></i>", "Home"], ["<i class='fas fa-chalkboard-teacher'></i>", "Introduction"], ["<i class='fas fa-star'></i>", "Featured"], ["<i class='fas fa-car'></i>", "Rent a car"], ["<i class='fas fa-user'></i>", "Testimonials"]];
var navigacijaLinkovi = ["index.html", "#naslov", "#featuredSection", "#formNaslov", "#TestimonialsSection"];

var navigacija1 = function(){
    let navGet = document.getElementById("navigacija");

    let navSet = document.createElement("nav");
    navSet.className = "d-flex align-items-center justify-content-center";
    navGet.appendChild(navSet);

    let uList = document.createElement("ul");
    uList.className = "d-flex justify-content-around";
    navSet.appendChild(uList);

    for(indeks in navigacija){
        let liList = document.createElement("li");
        uList.appendChild(liList);

        let aList = document.createElement("a");
        liList.appendChild(aList);
        aList.setAttribute("href", `${navigacijaLinkovi[indeks]}`);
        aList.textContent = `${navigacija[indeks][1]}`;
    }
}          

function scrollUp1(){
    let myBtn = document.getElementById("btnTop");
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        myBtn.style.visibility = "visible";
    }
    else {
        myBtn.style.visibility = "hidden";
    }
} 
//Introduction section
var info1 = function(){
    let naslov = ["WELCOME TO OUR SITE","CAR", "ZONE"];
    let content = [
        ["BRANDS","We got latest and most popular brands from automotive industry", "fas fa-car"],
        ["ROAD SUPPORT", "24/7 available support to help you on road if you have any mechanical problem with our car", "fas fa-road"],
        ["AFFORDABLE", "Exotic cars that have best deals according to their performance", "fas fa-coins"]
    ];

    document.getElementsByClassName("naslovContent")[0].innerHTML =`<div class="col-12 text-center naslov p-4">
                                                                        <h4>${naslov[0]}</h4>
                                                                        <span><i class="fas fa-angle-double-down"></i></span>
                                                                        <h1><span>${naslov[1]}</span> ${naslov[2]}</h1>
                                                                    </div>`
    for(let i = 0; i < content.length - 1;i++){
        document.getElementsByClassName("naslovContent")[0].innerHTML +=`
        <div class="col-12 col-sm-6 col-lg-4 text-center">
            <div class="col-12 sectionContent p-2 mb-3">
                <i class="${content[i][2]}"></i>
                <h5>${content[i][0]}</h5>
                <p>${content[i][1]}</p>
            </div>
        </div>`
    }
    //zbog poslednjeg elementa kome je potreban col-sm-12
    document.getElementsByClassName("naslovContent")[0].innerHTML +=`
        <div class="col-12 col-sm-12 col-lg-4 text-center">
                        <div class="col-12 sectionContent p-2 mb-3">
                            <i class="${content[2][2]}"></i>
                        <h5>${content[2][0]}</h5>
                        <p>${content[2][1]}</p>
                        </div>
                    </div>`
}

function sideNav(){
    let sideNav = document.getElementById("openSide");
    
    let nav = document.createElement("nav");
    sideNav.appendChild(nav);
    let button = document.createElement("button");
    button.textContent = "Close"

    let sideUl = document.createElement("ul");
    nav.appendChild(sideUl);
    
    for(indeks in navigacija){
        let sideLi = document.createElement("li");
        let hr = document.createElement("hr");
        hr.after(sideLi);
        sideLi.classList.add("slideIn");
        sideUl.appendChild(sideLi);
        
        var sideA = document.createElement("a");
        sideLi.appendChild(sideA);
        sideA.setAttribute("href", `${navigacijaLinkovi[indeks]}`);
        sideA.innerHTML = `${navigacija[indeks][0] + ' ' + navigacija[indeks][1]}`;
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
var cena = [["Chevrolet", 180], 
            ["Dodge", 200], 
            ["BMW", 120], 
            ["Subaru", 130], 
            ["Mitsubishi", 110], 
            ["Ford", 160],
            ["Honda", 120], 
            ["Toyota", 300],
            ["Mercedes", 160]];
  
// dinamicko ispisivanje ddl
function ddl(){
    var carsAndModels = {};
            carsAndModels["Chevrolet"] = ["ZL1"];
            carsAndModels["Dodge"] = ["Challenger"];
            carsAndModels["BMW"] = ["420d Coupe", "X6m"];
            carsAndModels["Subaru"] = ["Impreza WRX STi", "WRX"];
            carsAndModels["Mitsubishi"] = ["EVO X"];
            carsAndModels["Ford"] = ["Mustang", "F-150"]
            carsAndModels["Honda"] = ["Civic Type R"];
            carsAndModels["Toyota"] = ["Supra"];
            carsAndModels["Mercedes"] = ["450 CLS"];

    var model = document.getElementById("carModel");
        model.disabled=true;

    var firstOpt = document.createElement("option");
        firstOpt.setAttribute("value","0");
    var sadrzaj = document.createTextNode("Choose a model");
        firstOpt.appendChild(sadrzaj);
        model.appendChild(firstOpt);


//za upisivanje vrednosti na osnovu prvog selecta u drugi
document.getElementById("carType").onchange = function(){
    model.disabled = this.value == '0'
    var selCar = this.options[this.selectedIndex].value;
        model.appendChild(firstOpt);
    while (model.options.length) {
        model.remove(0);
    }
     for(let i = 0; i < cena.length;i++){
        if(selCar == cena[i][0]){
            izabranAuto = cena[i][1];
        }
    } 
    if(selCar == "0"){
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
}
var ispisivanjeOpt = function(){
    var type = document.getElementById("carType");
    for(let i = 0; i < Object.keys(carsAndModels).length; i++){
        //preuzimanje vrednosti iz objekata
        var opt = document.createElement("option");
            opt.setAttribute("value", Object.keys(carsAndModels)[i]);
        var text = document.createTextNode(Object.keys(carsAndModels)[i]);
            opt.appendChild(text);
            type.appendChild(opt);
    }
}
ispisivanjeOpt();
}

// dinamicko i nasumicno ispisivanje automobila u featured sekciji
var carContent = [
    ["assets/img/sports_civic1.jpg", "Honda Civic Type R", 120, "350hp"],
    ["assets/img/sports_supra1.jpg", "Toyota Supra", 300, "382hp"],
    ["assets/img/sports_subaru1.jpg","Subaru Impreza WRX", 130, "340hp"],
    ["assets/img/muscle_chevy1.jpg","Chevrolet ZL1", 180, "650hp"],
    ["assets/img/muscle_demon1.jpg","Dodge Challenger", 200, "700hp"],
    ["assets/img/sports_benz1.jpg","Mercedes 450 CLS", 160,"375hp"],
    ["assets/img/sports_evo.jpg","Subaru WRX",130, "360hp"],
    ["assets/img/sports_bmw1.jpg","BMW 420d Coupe",120, "310hp"],
    ["assets/img/sports_mitsubishi1.jpg","Mitsubishi EVO X",110, "290hp"],
    ["assets/img/muscle_mustang1.jpg","Ford Mustang",160, "750hp"],
    ["assets/img/sports_bmw2.jpg","BMW X6m",120, "310hp"],
    ["assets/img/suv_ford1.jpg","Ford F-150",160, "280hp"]];

    //niz u koji ubacujemo DISTINCT vrednosti do 12
var random = [];
    // funkcija za random ispisivanje iz niza
function generate(){
    //broj elemenata niza
    for (var i = 0; i < carContent.length; i++){
        var trenutni = Math.floor(Math.random() * carContent.length);
        if(random.indexOf(trenutni) == -1){
            random.push(trenutni);
        }
        else i--;
    }
}
//generisanje sadrzaja za svaki element owl-carousel-a
function owlCarouselContent(){
        generate();
        let parent = document.getElementById("automobili");
        let child = document.createElement("div");
            child.classList.add("owl-carousel", "first-owl");
            parent.appendChild(child);
        for(let i = 0; i < 6; i++){
            child.innerHTML +=`<div class="slideContent"><img src="${carContent[random[i]][0]}" alt="${carContent[random[i]][1]}"><h5>${carContent[random[i]][1]}</h5>
            <p class="d-flex justify-content-between"><span><i class="fas fa-dollar-sign"></i> ${carContent[random[i]][2]}/day</span><a href="#formNaslov"class="d-inline reqBtn">Request now</a></p>
        </div>`
        }
        random=[];
    }   

//modal sa vise informacija
function upisVrednosti(){
    let noveSlike = ["assets/img/seeMoreHonda.jpg", "assets/img/seeMoreSupra.jpeg", "assets/img/seeMoreRedSubaru.jpg", "assets/img/seeMoreChevy.jpg", "assets/img/seeMoreDemon.jpg", "assets/img/seeMoreMerc.jpeg", "assets/img/seeMoreSubaru.jpeg", "assets/img/seeMoreBmw.jpg", "assets/img/seeMore1.jpg", "assets/img/seeMoreMustang.jpeg","assets/img/seeMoreBmw2.jpg", "assets/img/seeMoreFord.jpeg"];
    var seeMore = document.getElementsByClassName("seeMore");
    let modal = document.getElementById("seeMoreModal");

        for(let i = 0; i < seeMore.length; i++){
            seeMore[i].addEventListener("click", function(){
                  if(seeMore[i].value == carContent[random[i]][1]){
                    modal.innerHTML = `<div class="row relative"> <div class="col-12 p-0"> <div id="header1"> <div class="col-12 p-3 d-flex justify-content-between"> <h2>CAR <span>ZONE</span></h2> <button type="button" id="closeSeeMore"><i class="fas fa-times-circle"></i></button> </div></div><div id="body1"> <div class="col-12 p-0"><button type="button" id="levo"><i class="fas fa-angle-left"></i></i></button><button type="button" id="desno"><i class="fas fa-angle-right"></i></button> <div class="owl-carousel another-owl"> <img src="${carContent[random[i]][0]}" class="img-fluid" alt="car"> <img src="${noveSlike[random[i]]}" class="img-fluid" alt="car"></div> </div><div class="col-12 p-2"> <h3 class="text-center">${carContent[random[i]][1]}</h3> <hr class="m-0"> <div class="row m-0 p-0"> <div class="col-6 p-0"> <ul class="d-flex flex-column text-left p-2"> <li> <i class="fas fa-check"></i> Chilled AC </li><li> <i class="fas fa-check"></i> Heated seats </li><li> <i class="fas fa-check"></i> Audio input </li><li> <i class="fas fa-check"></i> Bluetooth </li></ul> </div><div class="col-6 p-0"> <ul class="d-flex flex-column text-left p-2"> <li> <i class="fas fa-check"></i> Manual </li><li> <i class="fas fa-check"></i> Unlimited mileage </li><li> <i class="fas fa-tachometer-alt"></i> ${carContent[random[i]][3]} </li></ul> </div></div></div><div class="row m-0"> <div class="col-12 font-weight-bold euro"> <i class="fas fa-dollar-sign"></i> ${carContent[random[i]][2]}<span>/ per day</span> </div></div></div><div id="footer1" class="text-right"> <button type="button" class="request">Request now!</button> </div></div></div>`
                    modal.style.visibility = "visible";
                    modal.style.opacity = "1"; 
                  }
            var request = document.getElementsByClassName("request");
            var closeSeeMore = document.getElementById("closeSeeMore");

                closeSeeMore.addEventListener("click", function(){
                        modal.style.visibility = "hidden";
                        modal.style.opacity = "0";})

                        for(let i = 0; i < request.length;i++){
                            request[i].addEventListener("click", function(){
                                modal.style.visibility = "hidden";
                                modal.style.opacity = "0";
                            })
                        }
                        //za ponovno pozivanje carousel-a da ne bi pokretao i prethodni pomocu strelica za ovaj
                        $(document).ready(function(){
                            $(".another-owl").owlCarousel({
                                responsiveClass:true,
                                loop: true,
                                nav:false,
                                dots:false,
                                responsive:{
                                0:{
                                    items:1,
                                    autoplay:false,
                                }
                            }
                            });
                            let $owl1 = $(".another-owl");
                            $("#desno").click(function(){
                                $owl1.trigger("next.owl.carousel");
                            })
                            $("#levo").click(function(){
                                $owl1.trigger("prev.owl.carousel");
                            })
                            $(".request").click(function(){
                                $("html,body").animate({
                                    scrollTop: $(".back").offset().top}, 1500)
                                })
                        })
        })
    }
}

function ispisCarContent(){
    generate();
    var div = document.getElementById("showCars");
        // ispisivanje prvih 6 artikala
        for(let i = 0; i < carContent.length - 6; i++){
            div.innerHTML += `<div class="col-lg-4 col-12 col-sm-6 mb-4 scale">
            <div class="imgHolder">
                <img src="${carContent[random[i]][0]}" class="img-fluid" alt="${carContent[random[i]][1]}">
            </div>
            <div class="holder">
            <h5 class="mb-3">${carContent[random[i]][1]}</h5>
            <p><i class="fas fa-dollar-sign"></i> ${carContent[random[i]][2]}/day &nbsp; <i class="fas fa-tachometer-alt"></i> ${carContent[random[i]][3]}</p>
            <button type="button" class="seeMore" value="${carContent[random[i]][1]}">See more</button>
            </div>
        </div>`    
        }
        upisVrednosti()
        
        var click1 = 0;

        document.getElementById("loadMore").addEventListener("click", function(){
            if(click1 == 1){
                document.getElementById("loadMore").style.display = "none";
                
            }
            if(click1 == 0){
                //ispisivanje narednih 3 elemenata iz niza pocev od 6
                for(var i = 6; i < carContent.length - 3; i++){
                    let slide = document.createElement("div");
                    slide.classList.add("slide", "col-lg-4", "mr-auto", "col-12", "col-sm-6", "mb-4", "scale");
                    document.getElementById("showCars").appendChild(slide);
                    slide.innerHTML += `
                    <div class="imgHolder">
                        <img src="${carContent[random[i]][0]}" class="img-fluid" alt="${carContent[random[i]][1]}">
                    </div>
                    <div class="holder">
                    <h5 class="mb-3">${carContent[random[i]][1]}</h5>
                    <p><i class="fas fa-dollar-sign"></i> ${carContent[random[i]][2]}/day &nbsp; <i class="fas fa-tachometer-alt"></i> ${carContent[random[i]][3]}</p>
                    <button type="button" class="seeMore" value="${carContent[random[i]][1]}">See more</button>
                    </div>`;       
                }
                upisVrednosti()
            }
            
            if(click1 > 0){
                //ispisivanje ostatka 
                for(var i = 9; i < carContent.length; i++){
                    document.getElementById("showCars").innerHTML += `<div class="col-lg-4 col-12 col-sm-6 mb-4 slide scale">
                    <div class="imgHolder">
                        <img src="${carContent[random[i]][0]}" class="img-fluid" alt="${carContent[random[i]][1]}">
                    </div>
                    <div class="holder">
                    <h5 class="mb-3">${carContent[random[i]][1]}</h5>
                    <p><i class="fas fa-dollar-sign"></i> ${carContent[random[i]][2]}/day &nbsp; <i class="fas fa-tachometer-alt"></i> ${carContent[random[i]][3]}</p>
                    <button type="button" class="seeMore" value="${carContent[random[i]][1]}">See more</button>
                    </div></div>`;
                }
                upisVrednosti()
            }
            click1++;
        })
       
}
//ispisivanje slika za crossfade efekat
function crossfade(){
    let formCrossfade = ["assets/img/form1.jpg", "assets/img/form3.jpg", "assets/img/form4.jpg"];

    let parent = document.getElementById("absolute");
    for(indeks in formCrossfade){
        let img = document.createElement("img");
        img.setAttribute("src",formCrossfade[indeks]);
        img.className = "slideShow fadeIn fadeOut";
        img.alt="car";
        parent.appendChild(img);
    }
}
// kreiranje crossfade efekta za smooth prelazak sa slike na sliku
var indeks = 0;
var indeksOpacity = 0;
function showImg(){
    var slideShow = document.getElementsByClassName("slideShow");
        for(let i = 0; i < slideShow.length;i++){
            slideShow[i].style.visibility = "hidden";
            slideShow[i].classList.remove("fadeIn");
            slideShow[i].classList.remove("fadeOut");
        }
        indeks++;
        indeksOpacity++;
        if (indeks > slideShow.length) {indeks = 1};
        if(indeksOpacity > slideShow.length - 1){indeksOpacity = 0};
        slideShow[indeks - 1].style.visibility="visible";
        slideShow[indeks - 1].classList.add("fadeOut");
        slideShow[indeksOpacity].style.visibility="visible";
        slideShow[indeksOpacity].classList.add("fadeIn");
        setTimeout(showImg, 15000);
}




    //dohvatanje elemenata
    var fullName = document.getElementById("fullName");
    var mail = document.getElementById("mail");
    var payment = document.getElementsByName("payment");
    var type = document.getElementById("carType");
    var cvv = document.getElementById("cvv"); 
    var model = document.getElementById("carModel");
    var pick = document.getElementById("pick");
    var drop = document.getElementById("drop");

    //dohvatanje greski
    var fullNameError = document.getElementById("fullNameError");
    var mailError = document.getElementById("mailError");
    var paymentError = document.getElementById("paymentError");
    var dateError = document.getElementById("dateError");
    var cvvError = document.getElementById("cvvError"); 
    var brandError = document.getElementById("brandError");

    //regularni izrazi
    var regExFullName = /^[A-ŠĐČĆŽ][a-zšđčćž]{2,14}(\s[A-ZČĆŽŠĐ][a-zšđčćž]{2,19})+$/
    var regExMail = /^[a-z][a-z\.\d-\_]+\@[a-z]+(\.[a-z]+)+$/
    
    var dataArray = [];

function proveraFullName(){
    //full name error
    if(!regExFullName.test(fullName.value)){
        fullNameError.innerHTML = 'Incorrect format <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="e.g. John Doe"></i>'
        fullName.classList.add("greska");
        fullName.classList.remove("correct");
        return false;
    }
    else{
            fullNameError.textContent = "";
            fullName.classList.remove("greska");
            fullName.classList.add("correct");
            return true;
    }
}
function proveraMail(){
    //mail error
    if(!regExMail.test(mail.value)){
        mailError.innerHTML = 'Please enter a valid email address. <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="e.g. johndoe@example.com"></i>';
        mail.classList.add("greska");
        mail.classList.remove("correct");
        return false;
    }
    else{
        mailError.textContent = "";
        mail.classList.remove("greska");
        mail.classList.add("correct");
        return true;
    }
}
function proveraCashCard(){
    //provera da li je izabran metod placanja
    let value;
    let boolean;
    for(let i = 0; i < payment.length; i++){
        if(!payment[i].checked)
        {
            paymentError.innerHTML = "Required";
            boolean = false;
            continue;
        }
        else{
            paymentError.innerHTML = "";
            boolean = true;
            value = payment[i].value;
            break;
        }
    }
    return {value, boolean};
}

    
var from, to , today;
var disabledDate = document.getElementById("drop");
disabledDate.disabled = true;

var proveraPick = function(){
    //provera da li je korisnik izabrao datum
    from = new Date(pick.value);
    to = new Date(drop.value)
    today = new Date();
    if(from > today){
        pickError.innerHTML = ""
        pick.classList.add("correct");
        pick.classList.remove("greska")
        disabledDate.disabled = false;
        return true;
    }
    else if(from < today){
        pickError.innerHTML = "Pick up date is before today's date!"
        pick.classList.add("greska");
        pick.classList.remove("correct")
        return false;
    }
    if(from > to){
        pickError.innerHTML = "Pick up date is after drop off date!"
        pick.classList.add("greska");
        pick.classList.remove("correct")
        return false;
    }
    else if(!(from == undefined && to == undefined)){
        pickError.innerHTML = "Please choose a date for rental"
        pick.classList.add("greska");
        pick.classList.remove("correct")
        return false;
    }
}
var proveraDrop = function(){
    //provera da li je korisnik izabrao datum ------drop off input type date
    from = new Date(pick.value);
    to = new Date(drop.value)
    today = new Date();
 
    if(from > today){
        dropError.innerHTML = ""
        drop.classList.add("correct");
        drop.classList.remove("greska")
        return true;
    }
    else if(from < today){
        dropError.innerHTML = "Pick up date is before today's date!"
        drop.classList.add("greska");
        drop.classList.remove("correct")
        return false;
    }
    if(from > to){
        dropError.innerHTML = "Pick up date is after drop off date!"
        drop.classList.add("greska");
        drop.classList.remove("correct")
        return false;
    }
    else if(!(from == undefined && to == undefined)){
        dropError.innerHTML = "Please choose a date for rental"
        drop.classList.add("greska");
        drop.classList.remove("correct")
        return false;
    }
}
var konacanBroj;
var konacanBool;
pick.onchange = function(){
    proveraPick();
    let provera = proveraPick();
    if(provera){
        miliseconds();
    }
}
drop.onchange = function(){
    proveraDrop();
    let provera = proveraDrop();
    if(provera){
        miliseconds();
    }
}
var konacniDani = 0;
function miliseconds(){
    konacanBool = false;
    //dohvatanje milisekundi
        let miliFrom = from.getTime();
        let miliTo = to.getTime();
    //konvertovanje milisekunde u dane
        let days = (miliTo - miliFrom)/(24*60*60*10*10*10);
        if(days > 30 || days <= 0){
            drop.classList.remove("correct");
            drop.classList.add("greska");
            dropError.innerHTML = "You can't rent a car for the same day or more than 30 days!";
        }
        else{
            konacniDani = days;
        }
        if(to < from){
            drop.classList.remove("correct");
            drop.classList.add("greska");
            dropError.innerHTML = "Drop off date is before pick up date!";
        }
        if(days <= 30 && days > 0){
            konacanBool = true;
        }
}

var cardMade = 0;
//za pravljenje nova 3 polja ako je korisnik izabrao karticu
payment[1].onclick =  function (){
    if(cardMade == 0){
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
    for(let i = 0; i < 2; i++){
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
    for(let i = 0; i < 2; i++){
        var greske = document.createElement("div");
        greske.classList.add("w-50");
        formMore.appendChild(greske);
        var span = document.createElement("span");
        span.setAttribute("id", idGreska[i]);
        span.classList.add("greskaTekst");
        greske.appendChild(span);
    }
    cardMade++;
    parentDiv.appendChild(formMore);
    }
    // za proveru nakon izlaska iz polja za karticu
    document.getElementById("validThru").onchange = function(){
        proveraExpDate();
    }
    document.getElementById("cvv").onchange = function(){
        proveraCvv();
    }
    document.getElementById("cardContent").onchange = function(){
        proveraCardNumber();
    } 
}


//provera da li je korisnik uneo broj kartice
function proveraCardNumber(){
    var regExCardNumber = /^5[0-9]{15}$/;
    var cardNumber = document.getElementById("cardContent");
    var cardNumberError = document.getElementById("cardNumberError");

    if(!regExCardNumber.test(cardNumber.value)){
        cardNumberError.innerHTML = "Format: 5XXXXXXXXXXXXXXX(16 digits)";
        cardNumber.classList.add("greska");
        cardNumber.classList.remove("correct");
        return false;
    }
    else{
        cardNumberError.innerHTML = "";
        cardNumber.classList.remove("greska");
        cardNumber.classList.add("correct");
        return true;
    }
}

function proveraExpDate(){
    // provera da li je kartica validna najmanje 5 godina
    var regExExpDate = /^([0][1-9]|[1-2][0-2])\/(([2][0-6])|([2][0][2-3][0-6]))$/
    var expDate = document.getElementById("validThru");
    var expDateError = document.getElementById("expDateError");

    if(!regExExpDate.test(expDate.value)){
        expDateError.innerHTML = 'Incorrect format <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="e.g. 05/21 OR 05/2021"></i>';
        expDate.classList.add("greska");
        expDate.classList.remove("correct");
        return false
    }
    else{
        expDateError.textContent = "";
        expDate.classList.remove("greska");
        expDate.classList.add("correct");
        return true;
    }
}
//provera da li je unet cvv/cvc
function proveraCvv(){
    var regExCvv = /^[0-9]{3}$/;
    var cvv = document.getElementById("cvv");
    var cvvError = document.getElementById("cvvError"); 
    if(!regExCvv.test(cvv.value)){
        cvvError.innerHTML = 'Incorrect format <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="e.g. 123"></i>';
        cvv.classList.add("greska");
        cvv.classList.remove("correct");
        return false;
    }
    else{
        cvvError.textContent = "";
        cvv.classList.remove("greska");
        cvv.classList.add("correct");
        return true;
    }
}

function proveraType(){
    //provera da li je izabran brend automobila
    if(type.options[type.options.selectedIndex].value != 0){
        brandError.textContent = "";
        return true;
    }
    else{
        brandError.textContent = "You must choose brand!";
        return false;
    }
}
//za promene izlaskom iz polja
fullName.onchange = function(){
    proveraFullName();
}
mail.onchange = function(){
    proveraMail();
}
//za menjanje metoda placanja
payment.forEach(
    selected => selected.onchange = function(){
        proveraCashCard();
    }
)
//ako je korisnik izabrao cash
payment[0].onclick = function(){
    if(cardMade > 0){
        document.querySelector(".cardHolder").remove();
        cardMade--;
    }
}
//provera nakon klika da li su pravilno uneti podaci
document.getElementById("form").onsubmit = function(e){
    e.preventDefault();
    let fullName = proveraFullName();
    let mail = proveraMail();
    let type = proveraType();
    let cashOrCard = proveraCashCard();
    let bool = cashOrCard.boolean;
    let cardValue = cashOrCard.value;
    proveraPick();
    if(cardValue == payment[1].value){
        let exp = proveraExpDate();
        let cvv = proveraCvv();
        let card = proveraCardNumber();
        if(exp && cvv && card){
            celokupnaProvera(fullName, mail, type, bool, konacanBool);
        }
    }
    if(cardValue == payment[0].value){
        celokupnaProvera(fullName, mail, type, bool, konacanBool);
    }
};

function celokupnaProvera(imeProvera, mailProvera,typeProvera, cashCardProvera, dateBool){
    let predajaPodataka = 0;
    //provera svih unetih podataka
    if(imeProvera && mailProvera && typeProvera && cashCardProvera && dateBool){
        if(dataArray.length == 0){
            //upisivanje podataka u niz
            dataArray.push(fullName.value);
            dataArray.push(mail.value);
            let sss = carContent[type.options[type.options]]
            console.log(sss)
            dataArray.push(type.options[type.options.selectedIndex].value);
            dataArray.push(model.options[model.options.selectedIndex].text);
            dataArray.push(konacniDani * izabranAuto);
            predajaPodataka++;
            modal();
        }
}}
//dinamicko kreiranje modala 
function modal(){
    let firstName = dataArray[0].split(" ");
    let modal = document.getElementById("modal");
    let row = document.createElement("div");
    row.classList.add("row", "regenerate");
    let header = document.createElement("div");
    header.setAttribute("id","header");
    header.classList.add("col-12","text-left", "p-3");
    let headerNaslov = document.createElement("h2");
    headerNaslov.innerHTML += "CAR <span>ZONE</span>";
    let body = document.createElement("div");
    body.setAttribute("id", "body");
    body.classList.add("col-12", "p-2");
    let p = document.createElement("p");
    p.innerHTML = `<span>${firstName[0]}</span>, you've successfully sent the request for the <span>${dataArray[2]} ${dataArray[3]}</span>, all other information has been sent to your mail.</br>
    <span>${dataArray[1]}</br></span> <span class="modalTotal"> TOTAL: <i class="fas fa-dollar-sign"></i> ${dataArray[4]}</span>`;
    let footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    footer.classList.add("col-12", "text-right");
    let button = document.createElement("button");
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

    button.onclick = function(){
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    //brisanje prethodnog niza i modala
    dataArray = []
    row.remove();
}}  
//ispisivanje testimonials-a
function testimonials(){
    let testimonials = [["assets/img/test1.png", "During all the years we have rented a car from you, there has never been any problems. We are satisfied with both price and quality of your cars!", "Michael De Santa"],
                        ["assets/img/test2.png", "Thank you all once again for your exceptional service level. The customer experience served by everyone at CarZone is 1st class!", "Trevor Philips"],
                        ["assets/img/test3.png", "Friendly and reliable service on site. The booking went smoothly and was handled quickly. The car was perfect and very new!", "Franklin Clinton"]]
    
    let parent = document.getElementById("testimonials");

    for(let i = 0; i < testimonials.length; i++){
        parent.innerHTML += ` <div class="col-12 col-md-4 mb-3 mb-md-0">
        <div class="col-12 testContent p-3">
            <i class="fas fa-quote-right"></i>
            <div class="d-flex justify-content-center p-2">
                <div class="testImage">
                    <img src="${testimonials[i][0]}" alt="guy">
                </div>
            </div>
            <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            <blockquote class="blockquote text-center">
                <p class="mb-0">${testimonials[i][1]}</p>
                <footer class="blockquote-footer"><cite>${testimonials[i][2]}</cite></footer>
              </blockquote>
        </div>
    </div>`;
    }
}
// Ispisivanje informacije o autoru
function autor(){
    let naziv = "Adam Nikolić";
    let brIndeksa = "101/19";
    let tekst = "Hi. I'm a web developer from Požega, Serbia. Right now I'm studying Internet Technologies at Information and Communication Technologies College in Belgrade and I'm pursuing career in Web programming."
    let parent = document.getElementById("box");
    parent.innerHTML= `<div class="col-12 col-md-5 p-0">
    <img src="assets/img/autor.jpg" class="img-fluid" alt="autor">
</div>
<div class="col-12 col-md-7 p-0 p-lg-5 pb-2 pb-md-0" id="infoAutor">
    <div class="row m-0">
        <div class="col-12 d-flex justify-content-end p-1">
            <button type="button" id="closeAutor"><i class="fas fa-times"></i></button>
        </div>
    </div>
    <div class="row m-0">
        <div class="col-12 p-1 font-weight-bold">
            <h3 class="text-center font-weight-bold">${naziv} <span>${brIndeksa}</span></h3>
            <p>${tekst}
            </p>
        </div>
    </div>
    <div class="row m-0">
        <div class="col-12 d-flex flex-row flex-wrap linkovi justify-content-center">
            <div >
               <a href="https://github.com/adamnik101"><button type="button" class="linkBtn"><i class="fab fa-github-alt"></i></button></a> 
               <a href="https://www.linkedin.com"><button type="button" class="linkBtn"><i class="fab fa-linkedin-in"></i></button></a>
               <a href="https://www.twitter.com"><button type="button" class="linkBtn"><i class="fab fa-twitter"></i></button></a>
               <a href="https://adamnik101.github.io/adamportfolio/index.html"><button type="button" class="linkBtn"><i class="fas fa-address-book"></i></button></a>
            </div>                             
        </div>
    </div>
</div>`
}

// Google maps API
function initMap() {
    const uluru = { lat: 33.992464973409135, lng: -117.72586818553368 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  $(document).ready(function(){
    $(window).on("load",function() {
        $('.preloader').fadeOut('slow');
     });
    //animacija sidenav elemenata liste linkova
    $("#clickSide").click(function (){
        $(".slideIn").each(function(i){
            $(this).delay(200*i).animate({
                left : "0",
                opacity : "1"
            },700)
    })
    $(".slideIn").hover(function(){

    })
    $("#openSide").css("box-shadow", "0 0 0 10000px rgba(0,0,0,.50)");
})
    $("#closeSide").click(function(){
        $(".slideIn").each(function(){
            $(this).animate({
                left : "-250px"
            }).finish();
    })
    $("#openSide").css("box-shadow", "none");
    })
    //tooltip inicijalizacija bootstrap
    $('body').tooltip({
        selector: '.fa-info-circle'
    });
    //canvasTekst animacija sa desno na levo
    $(".canvasTekst").animate({
        right : "0"
    }, 2000)
    //animations card block & btn top
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $(".sectionContent").each(function(i){
                $(this).delay(200 * i).animate({
                    opacity : "1",
                    top: "0"
            }, "slow")})}
        if($(this).scrollTop() > 900){
            $(".featured").animate({
                left : "0",
                opacity : "1"
            })
        }
        if ($(this).scrollTop() > 300) {
            $('#btnTop').fadeIn();
        } else{
            $('#btnTop').fadeOut();
        }
    });
    //glatka animacija nakon klika na dugme za gore i mali delay
    $('#btnTop').click(function(){
        $('html, body').animate({scrollTop : 0},300);
        return false;
    });
    //animacija artikala sa automobilima koji se prikazuju sa animacijom jedan nakon drugog
    $("#loadMore").click(function(){
        $(".slide").each(function(i){
                $(this).delay(450 * i).animate({
                    top : "0",
                    opacity : "1"
                })
        })
        })

    //Skrol do sekcije 
    $("#requestBtn").click(function(){
        $("html,body").animate({
            scrollTop: $(".back").offset().top}, 1500)
        })
    //plugin za carousel aka owl-carousel
    $(".first-owl").owlCarousel({
        responsiveClass:true,
        autoplay: true,
        animateIn:true,
        loop: true,
        nav:false,
        dots:true,
        dotsEach:true,
        responsive:{
        0:{
            items:1,
            autoplay:false,
        },
        850:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
    });
    //dugmad za kontrolu owl-carousel
    let $owl = $(".first-owl");
    $("#btnDesno").click(function(){
        $owl.trigger("next.owl.carousel");
    })
    $("#btnLevo").click(function(){
        $owl.trigger("prev.owl.carousel");
    })
    $(".seeMore").click(function(){
        $(".another-owl").owlCarousel({
            responsiveClass:true,
            loop: true,
            nav:false,
            dots:false,
            responsive:{
            0:{
                items:1,
                autoplay:false,
            }
        }
        });
        let $owl = $(".another-owl");
        $("#desno").click(function(){
            $owl.trigger("next.owl.carousel");
        })
        $("#levo").click(function(){
            $owl.trigger("prev.owl.carousel");
        })
        $(".request").click(function(){
            $("html,body").animate({
                scrollTop: $(".back").offset().top}, 1500)
            })
    })

    //animacija pri prikazivanju modala nakon uspesnog popunjavanja forme
    $("#form").on("submit", function(){
            $("#modal").animate({
                opacity : "1"
            }, 1000)
            $("#modal .row").animate({
                opacity : "1",
                top : "0"
            }, 1000)  
    })
    $("#autorBtn").click(function(){
        autor();
        $("#autor").fadeIn();
        $("#closeAutor").click(function(){
            $("#autor").fadeOut();
        })
    })
    })

    $(document).ready(function(){
        $(window).on("load",function() {
            $('.preloader').fadeOut('slow');
    
         });
        //animacija sidenav elemenata liste linkova
        $("#clickSide").click(function (){
            $(".slideIn").each(function(i){
                $(this).delay(200*i).animate({
                    left : "0",
                    opacity : "1"
                },700)
        })
        $(".slideIn").hover(function(){
    
        })
        $("#openSide").css("box-shadow", "0 0 0 10000px rgba(0,0,0,.50)");
    })
        $("#closeSide").click(function(){
            $(".slideIn").each(function(){
                $(this).animate({
                    left : "-250px"
                }).finish();
        })
        $("#openSide").css("box-shadow", "none");
        })
        //tooltip inicijalizacija bootstrap
        $('body').tooltip({
            selector: '.fa-info-circle'
        });
        //canvasTekst animacija sa desno na levo
        $(".canvasTekst").animate({
            right : "0"
        }, 2000)
        //animations card block & btn top
        $(window).scroll(function(){
            if($(this).scrollTop() > 500){
                $(".sectionContent").each(function(i){
                    $(this).delay(200 * i).animate({
                        opacity : "1",
                        top: "0"
                }, "slow")})}
            if($(this).scrollTop() > 900){
                $(".featured").animate({
                    left : "0",
                    opacity : "1"
                })
            }
            if ($(this).scrollTop() > 300) {
                $('#btnTop').fadeIn();
            } else{
                $('#btnTop').fadeOut();
            }
        });
        //glatka animacija nakon klika na dugme za gore i mali delay
        $('#btnTop').click(function(){
            $('html, body').animate({scrollTop : 0},300);
            return false;
        });
        //animacija artikala sa automobilima koji se prikazuju sa animacijom jedan nakon drugog
        $("#loadMore").click(function(){
            $(".slide").each(function(i){
                    $(this).delay(450 * i).animate({
                        top : "0",
                        opacity : "1"
                    })
            })
            })
    
        //Skrol do sekcije 
        $("#requestBtn").click(function(){
            $("html,body").animate({
                scrollTop: $(".back").offset().top}, 1500)
            })
        //plugin za carousel aka owl-carousel
        $(".first-owl").owlCarousel({
            responsiveClass:true,
            autoplay: true,
            animateIn:true,
            loop: true,
            nav:false,
            dots:true,
            dotsEach:true,
            responsive:{
            0:{
                items:1,
                autoplay:false,
            },
            850:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
        });
        //dugmad za kontrolu owl-carousel
        let $owl = $(".first-owl");
        $("#btnDesno").click(function(){
            $owl.trigger("next.owl.carousel");
        })
        $("#btnLevo").click(function(){
            $owl.trigger("prev.owl.carousel");
        })
    
        //animacija pri prikazivanju modala nakon uspesnog popunjavanja forme
        $("#form").on("submit", function(){
                $("#modal").animate({
                    opacity : "1"
                }, 1000)
                $("#modal .row").animate({
                    opacity : "1",
                    top : "0"
                }, 1000)  
        })
        $("#autorBtn").click(function(){
            autor();
            $("#autor").fadeIn();
            $("#closeAutor").click(function(){
                $("#autor").fadeOut();
            })
        })
        })