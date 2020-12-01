
var myBtn = document.getElementById("btnTop");


//pozivanje pri ucitavanju stranice za odredjene delove sajta


window.onload = function(){
    navigacija1();
    sideNav();
    ddl();
    info1();
/*     cars(); */
}
 window.onscroll = function(){
    scrollUp1()
};

function scrollUp1(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        myBtn.style.visibility = "visible";
    }
    else {
        myBtn.style.visibility = "hidden";
    }
} 
//JQUERY SCROLL TOP
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('#btnTop').fadeIn();
        } else{
            $('#btnTop').fadeOut();
        }
    });

    $('#btnTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});

function info1(){
    let naslov = ["WELCOME TO OUR SITE","CAR", "ZONE"];
    let content = [
        ["BRANDS","We got latest and most popular brands from automotive industry", "fas fa-car"],
        ["FREE SUPPORT", "24/7 covered available support to get answers all your questions", "far fa-comment-dots"],
        ["AFFORDABLE", "Popular and exotic cars that have best deals according to their performance", "fas fa-coins"]
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
// Dinamicko ispisivanje navigacije i sidenav

var navigacija = new Array("Home", "Cars", "About", "Contact", "Documentation");
var navigacijaLinkovi = new Array("index.html", "search.html", "about.html", "contact.html", "#");

function navigacija1(){
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
        aList.textContent = `${navigacija[indeks]}`;
    }
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
        sideUl.appendChild(sideLi);

        let sideA = document.createElement("a");
        sideLi.appendChild(sideA);
        sideA.setAttribute("href", `${navigacijaLinkovi[indeks]}`);
        sideA.textContent = `${navigacija[indeks]}`;
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

// dinamicko ispisivanje ddl na osnovu prethodno izabranog polja u select-u
function ddl(){
var model = document.getElementById("carModel");
model.disabled=true;

var firstOpt = document.createElement("option");
    firstOpt.setAttribute("value","0");
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
console.log(carsAndModels)
document.getElementById("carType").onchange = function(){
    model.disabled = this.value == '0'
    var selCar = this.options[this.selectedIndex].value;

    model.appendChild(firstOpt);
    while (model.options.length) {
        model.remove(0);
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
        }
    }  
}

console.log(Object.values(carsAndModels)[1][1])

function ispisivanjeOpt(){
    var type = document.getElementById("carType");
    for(let i = 0; i < Object.keys(carsAndModels).length; i++){
        
        var opt = document.createElement("option");
        opt.setAttribute("value", Object.keys(carsAndModels)[i]);
        var text = document.createTextNode(Object.keys(carsAndModels)[i]);
        opt.appendChild(text);
        type.appendChild(opt);
    }
}
ispisivanjeOpt();
}

// ispisivanje prvih 6 artikala
function ispisprvih6(){
    var div = document.getElementById("showCars");
    var prvih6 = [
        ["assets/img/sports_civic1.jpeg", "Honda Civic Type R", "Manual", "350hp"],
        ["assets/img/sports_supra1.jpeg", "Toyota Supra", "Automatic", "382hp"],
        ["assets/img/sports_subaru1.jpeg","Subaru Impreza WRX", "Manual", "340hp"],
        ["assets/img/muscle_chevy1.jpg","Chevrolet ZL1", "Automatic", "650hp"],
        ["assets/img/muscle_demon1.jpeg","Dodge Challenger", "Automatic", "700hp"],
        ["assets/img/sports_benz1.jpeg","Mercedes 450 CLS", "Manual","375hp"]];
        var random = [];
        // funkcija za random ispisivanje iz niza
        function generate(){
            var max = 6;
            for (var i = 0; i < max; i++){
                var trenutni = Math.floor(Math.random() * 6);
                if(random.indexOf(trenutni) == -1){
                    random.push(trenutni);
                }
                else i--;
            }
        }
        generate();
        for(let i = 0; i < prvih6.length; i++){
            div.innerHTML += `<div class="col-lg-4 col-12 col-sm-6 mb-4">
            <div class="imgHolder">
                <img src="${prvih6[random[i]][0]}" class="img-fluid" alt="${prvih6[random[i]][1]}">
            </div>
            <div class="holder">
            <h5 class="mb-3">${prvih6[random[i]][1]}</h5>
            <p><i class="fas fa-cog"></i> ${prvih6[random[i]][2]} <i class="fas fa-tachometer-alt"></i> ${prvih6[random[i]][3]}</p>
            <a href="#">ORDER NOW</a>
            </div>
        </div>`
        }
}


var carIspis1 = [
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
            document.getElementById("showCars").innerHTML += `<div class="col-lg-4 mr-auto col-12 col-sm-6 mb-4">
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
    click1++;
})

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




function provera(){
    var objNewUsed, objBy, objType, objModel, arrayData, errors;

    objNewUsed = document.getElementsByName("newUsed");

    objBy = document.getElementsByName("by");

    objType = document.querySelector("#carType");
    
    objModel = document.querySelector("#carModel");

    arrayData = [];
    errors = [];


//////////////////////////////////////////////////
    if(objType.options[objType.options.selectedIndex].value == 0){
        errors.push("You must first choose brand");
    }
    else{
        arrayData.push(objType.options[objType.options.selectedIndex].value);
        console.log(arrayData);
    }
    var ispis = "<ul class='list-group'>";

    if(errors.length != 0){
        for(let greska of errors){
            ispis += `<li class="list-group-item">${greska}</li>`
        }
    }
    ispis +="</ul>"
    if(objType.options[objType.options.selectedIndex].value != 0){
        document.getElementById("greska1").innerHTML -= ispis;
    }
    document.getElementById("greska1").innerHTML = ispis;
}
document.getElementById("searchBtn").addEventListener("click", provera);

$(document).ready(function(){
    ispisprvih6();
    $(".owl-carousel").owlCarousel({
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
    var owl = $(".owl-carousel");
    $("#btnDesno").click(function(){
        owl.trigger("next.owl.carousel");
    })
    $("#btnLevo").click(function(){
        owl.trigger("prev.owl.carousel");
    })
    })
    
$(window).ready(function(){
    $(".searchForm").slideDown("slow");
})


