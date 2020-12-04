
var myBtn = document.getElementById("btnTop");


//pozivanje pri ucitavanju stranice za odredjene delove sajta


window.onload = function(){
    navigacija1();
    sideNav();
    ddl();
    info1();
    showImg();
    
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
        ["FREE SUPPORT", "24/7 covered available support to get answers to all your questions", "far fa-comment-dots"],
        ["AFFORDABLE", "Exotic cars that have best deals according to their performance", "fas fa-coins"]
    ];

    document.getElementsByClassName("naslovContent")[0].innerHTML =`<div class="col-12 text-center naslov p-4">
    <h4>${naslov[0]}</h4>
    <span><i class="fas fa-angle-double-down"></i></span>
    <h1><span>${naslov[1]}</span> ${naslov[2]}</h1>
</div>`
    for(let i = 0; i < content.length - 1;i++){
        document.getElementsByClassName("naslovContent")[0].innerHTML +=`
        <div class="col-12 col-sm-6 col-lg-4 text-center"><div class="col-12 sectionContent p-2 mb-3"><i class="${content[i][2]}"></i><h5>${content[i][0]}</h5><p>${content[i][1]}</p></div></div>`
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
        document.getElementById("brandError").textContent = "";
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


// dinamicko i nasumicno ispisivanje automobila u index.html
var carContent = [
    ["assets/img/sports_civic1.jpeg", "Honda Civic Type R", "Manual", "350hp"],
    ["assets/img/sports_supra1.jpeg", "Toyota Supra", "Automatic", "382hp"],
    ["assets/img/sports_subaru1.jpeg","Subaru Impreza WRX", "Manual", "340hp"],
    ["assets/img/muscle_chevy1.jpg","Chevrolet ZL1", "Automatic", "650hp"],
    ["assets/img/muscle_demon1.jpeg","Dodge Challenger", "Automatic", "700hp"],
    ["assets/img/sports_benz1.jpeg","Mercedes 450 CLS", "Manual","375hp"],
    ["assets/img/sports_evo.jpeg","Subaru WRX","Manual", "360hp"],
    ["assets/img/sports_bmw1.jpeg","BMW 420d Coupe","Manual", "310hp"],
    ["assets/img/sports_mitsubishi1.jpg","Mitsubishi EVO X","Automatic", "290hp"],
    ["assets/img/muscle_mustang1.jpeg","Ford Mustang","Automatic", "750hp"],
    ["assets/img/sports_bmw2.jpeg","BMW X5","Automatic", "310hp"],
    ["assets/img/suv_ford1.jpeg","Ford F-150","Automatic", "280hp"]];









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

    function owlCarouselContent(){
        generate();
        let parent = document.getElementById("automobili");
        let child = document.createElement("div");
        child.classList.add("owl-carousel");
        parent.appendChild(child);
        for(let i = 0; i < 6; i++){
            child.innerHTML +=`<div class="slideContent"><img src="${carContent[random[i]][0]}" alt="${carContent[random[i]][1]}"><h5>${carContent[random[i]][1]}</h5>
            <p class="d-flex justify-content-between"><span><i class="fas fa-cube"></i> ${carContent[random[i]][3]}</span><a href="#!"class="d-inline reqBtn">Request now</a></p>
        </div>`
        }
        random=[];
    }   
    owlCarouselContent();


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
            <p><i class="fas fa-cog"></i> ${carContent[random[i]][2]} <i class="fas fa-tachometer-alt"></i> ${carContent[random[i]][3]}</p>
            <a href="#">ORDER NOW</a>
            </div>
        </div>`
        }
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
                    <p><i class="fas fa-cog"></i> ${carContent[random[i]][2]} <i class="fas fa-tachometer-alt"></i> ${carContent[random[i]][3]}</p>
                    <a href="#">ORDER NOW</a>
                    </div>`;
                }
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
                    <p><i class="fas fa-cog"></i> ${carContent[random[i]][2]} <i class="fas fa-tachometer-alt"></i> ${carContent[random[i]][3]}</p>
                    <a href="#">ORDER NOW</a>
                    </div></div>`;
                }
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


crossfade();

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
    var gender = document.getElementsByName("gender");
    var type = document.getElementById("carType");
    var model = document.getElementById("carModel");

    //dohvatanje greski
    var fullNameError = document.getElementById("fullNameError");
    var mailError = document.getElementById("mailError");
    var genderError = document.getElementById("genderError");
    var brandError = document.getElementById("brandError");

    //regularni izrazi
    var regExFullName = /^[A-ŠĐČĆŽ][a-zšđčćž]{2,14}(\s[A-ZČĆŽŠĐ][a-zšđčćž]{2,19})+$/
    var regExMail = /^[a-z][a-z\.\d-\_]+\@[a-z]+(\.[a-z]+)+$/
    
    var dataArray = [];

function proveraFullName(){
    //full name error
    if(!regExFullName.test(fullName.value)){
        fullNameError.innerHTML = 'Incorrect format <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="ex: John Doe"></i>'
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
        mailError.innerHTML = 'Please enter a valid email address. <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="bottom" title="ex: johndoe@example.com"></i>';
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

var checkedGender = "";
function proveraGender(){
    for(let i = 0; i < gender.length; i++){
        if(gender[i].checked){
            genderError.textContent = "";
            checkedGender = gender[i].value;
            return true;
        }
        else{
            genderError.textContent = "U must pick gender!";
            return false;
        }
    }
}


function proveraType(){
    // car choose error
    if(type.options[type.options.selectedIndex].value != 0){
        brandError.textContent = "";
        return true;
    }
    else{
        brandError.textContent = "You must choose brand!";
        return false;
    }
}


fullName.onchange = function(){
    proveraFullName();
}
mail.onchange = function(){
    proveraMail();
}

document.getElementById("searchBtn").addEventListener("click", function(){
    let fullName = proveraFullName();
    let mail = proveraMail();
    let type = proveraType();
    let gender = proveraGender();
    celokupnaProvera(fullName, mail, type, gender);
});


function celokupnaProvera(imeProvera, mailProvera, typeProvera, genderProvera){
    let predajaPodataka = 0;
    //provera svih unetih podataka
    if(imeProvera && mailProvera && typeProvera && genderProvera){
        if(dataArray.length == 0){
            //upisivanje podataka u niz
            dataArray.push(fullName.value);
            var firstName = dataArray[0].split(" ");
            dataArray.push(mail.value);
            dataArray.push(type.options[type.options.selectedIndex].value);
            dataArray.push(model.options[model.options.selectedIndex].text);
            dataArray.push(checkedGender);
            predajaPodataka++;
           console.log(predajaPodataka);
        }
        //dinamicko kreiranje modala 
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
            <span>${dataArray[1]}</span>`;
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

            button.addEventListener("click", function(){
                modal.style.visibility = "hidden";
                //brisanje prethodnog niza i modala
                dataArray = []
                row.remove();
        })}
}   
 
$(document).ready(function(){
    $('body').tooltip({
        selector: '.fa-info-circle'
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 500){
            $(".sectionContent").each(function(i){
                $(this).delay(200 * i).animate({
                    opacity : "1",
                    top: "0"
            }, "slow")})}
        if($(window).scrollTop() > 900){
            $(".featured").animate({
                left : "0",
                opacity : "1"
            })
        }
        })

    ispisCarContent();

    $("#loadMore").click(function(){
        $(".slide").each(function(i){
                $(this).delay(450 * i).animate({
                    top : "0",
                    opacity : "1"
                })
        })
        })

    $("#requestBtn").click(function(){
        $("html,body").animate({
            scrollTop: $(".back").offset().top}, 1500)
        })

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


