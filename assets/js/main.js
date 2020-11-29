
var myBtn = document.getElementById("btnTop");


//pozivanje pri ucitavanju stranice za odredjene delove sajta


window.onload = function(){
    navigacija();
    cars();
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

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('#btnTop').fadeIn();
        } else{
            $('#btnTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#btnTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});




// Dinamicko ispisivanje navigacije


function navigacija(){
    let navigacija = new Array("Home", "Search cars", "About us", "Contact", "Documentation");
    let navigacijaLinkovi = new Array("index.html", "search.html", "about.html", "contact.html", "#");
  
    let navSet = document.createElement("NAV");
    navSet.className = "d-flex align-items-center";

    let navGet = document.getElementById("navigacija");
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

//dinamicko ispisivanje sekcije sa automobilima

    var carName = new Array("Chevrolet", "Dodge", "BMW", "Honda", "Subaru", "Mercedes-Benz");
    var carModel = new Array("Camarro ZL1", "Demon", "420d Coupe", "Civic Type R", "Impreza WRX STi", "CLS 450");
    var carImage = new Array("assets/img/muscle_chevy1.jpg", "assets/img/muscle_demon1.jpeg", "assets/img/sports_bmw1.jpeg", "assets/img/sports_civic1.jpeg", "assets/img/sports_evo.jpeg", "assets/img/sports_benz1.jpeg");
    var carValue = new Array("chevrolet", "dodge", "bmw", "honda", "mercedes")

    function cars(){

    var carSection = document.getElementById("automobili");
    for(let i = 0; i < 3; i++){
        let carArticle = document.createElement("div");
        carArticle.className = "carHolder slide1";
        carSection.appendChild(carArticle);

        let carImg = document.createElement("img");
        carImg.setAttribute("src", `${carImage[i]}`);
        carImg.className = "first";
        carArticle.appendChild(carImg); 

        let carH4 = document.createElement("h4");
        carArticle.appendChild(carH4);
        carH4.className = "name";
        let h4Content = document.createTextNode(carName[i] + " " + carModel[i]);
        carH4.appendChild(h4Content);

        let carBtn = document.createElement("button");
        carArticle.appendChild(carBtn);

        let btnLink = document.createElement("a");
        btnLink.setAttribute("href", "#");
        carBtn.appendChild(btnLink);

        let carBtnFA = document.createElement("i");
        carBtnFA.className = "fa fa-chevron-right";
        btnLink.appendChild(carBtnFA);
     }
     var nextSection = document.getElementById("automobili1");
    for(let i = 3; i < carName.length; i++){
        let carArticle = document.createElement("div");
        carArticle.className = "carHolder1 slide1";
        nextSection.appendChild(carArticle);

        let carImg = document.createElement("img");
        carImg.setAttribute("src", `${carImage[i]}`);
        carImg.className = "first";
        carArticle.appendChild(carImg); 

        let carH4 = document.createElement("h4");
        carArticle.appendChild(carH4);
        carH4.className = "name";
        let h4Content = document.createTextNode(carName[i] + " " + carModel[i]);
        carH4.appendChild(h4Content);

        let carBtn = document.createElement("button");
        carArticle.appendChild(carBtn);

        let btnLink = document.createElement("a");
        btnLink.setAttribute("href", "#");
        btnLink.textContent= ""
        carBtn.appendChild(btnLink);

        let carBtnFA = document.createElement("i");
        carBtnFA.className = "fa fa-chevron-right";
        btnLink.appendChild(carBtnFA);
    }
}


// dinamicko ispisivanje ddl na osnovu prethodno izabranog polja u select-u
var model = document.getElementById("carModel");
model.disabled=true;

var firstOpt = document.createElement("option");
    firstOpt.value = "0";
    firstOpt.textContent = "Choose a model";
    model.appendChild(firstOpt);

var carsAndModels = {};
carsAndModels["Chevrolet"] = ["ZL1", "Stingray"];
carsAndModels["Dodge"] = ["Challenger", "Charger"];
carsAndModels["BMW"] = ["420d Coupe"];
carsAndModels["Subaru"] = ["Impreza WRX STi"];
carsAndModels["Mitsubishi"] = ["EVO X"];
carsAndModels["Honda"] = ["Civic Type R"];
carsAndModels["Toyota"] = ["Supra"];
carsAndModels["Mercedes"] = ["CLS 450"];
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
        car.value = i;
        car.textContent = cars[i];

        model.options.add(car);
        }
    }  
}

console.log(Object.values(carsAndModels)[1][1])

function ispisivanjeOpt(){
    var type = document.getElementById("carType");
    for(let i = 0; i < Object.keys(carsAndModels).length; i++){
        
        var opt = document.createElement("option");
        opt.value = Object.keys(carsAndModels)[i];
        opt.textContent = Object.keys(carsAndModels)[i];
        type.appendChild(opt);
    }
}
ispisivanjeOpt();

function ispisprvih6(){
    var div = document.getElementById("showCars");
    var prvih6 = [
        ["assets/img/sports_civic1.jpeg", "Honda Civic Type R", "Manual", "350hp"],
        ["assets/img/sports_supra1.jpeg", "Toyota Supra", "Automatic", "382hp"],
        ["assets/img/sports_subaru1.jpeg","Subaru Impreza WRX STi", "Manual", "340hp"],
        ["assets/img/muscle_chevy1.jpg","Chevrolet ZL1", "Automatic", "650hp"],
        ["assets/img/muscle_demon1.jpeg","Dodge Challenger", "Automatic", "700hp"],
        ["assets/img/sports_benz1.jpeg","Mercedes Benz 450 CLS", "Manual","375hp"]];

        for(let i = 0; i < prvih6.length; i++){
            div.innerHTML += `<div class="col-4 mb-4">
            <div class="imgHolder">
                <img src="${prvih6[i][0]}" class="img-fluid" alt="${prvih6[i][1]}">
            </div>
            <div class="holder">
            <h5 class="mb-3">${prvih6[i][1]}</h5>
            <p><i class="fas fa-cog"></i> ${prvih6[i][2]} <i class="fas fa-tachometer-alt"></i> ${prvih6[i][3]}</p>
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

var ispis3Brojac = 0;
var click1 = 1;
function ispis3(){
    if(ispis3Brojac == 1){
        document.getElementById("loadMore").style.display = "none";
    }
    if(click1 == 1){
        for(var i = 0; i < carIspis1.length; i++){
            document.getElementById("showCars").innerHTML += `<div class="col-4 mb-4">
            <div class="imgHolder">
                <img src="${carIspis1[i][0]}" class="img-fluid" alt="${carIspis1[i][1]}">
            </div>
            <div class="holder">
            <h5 class="mb-3">${carIspis1[i][1]}</h5>
            <p><i class="fas fa-cog"></i> ${carIspis1[i][2]} <i class="fas fa-tachometer-alt"></i> ${carIspis1[i][3]}</p>
            <a href="#">ORDER NOW</a>
            </div></div>`;
        }
        click1++;
    }
    ispis3Brojac++;
}
    document.getElementById("loadMore").addEventListener("click", function(){
        if(click1 > 1){
            for(var i = 0; i < carIspis2.length; i++){
                document.getElementById("showCars").innerHTML += `<div class="col-4 mb-4">
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
    })




function provera(){
    var objNewUsed, objBy, objType, objModel, arrayData, errors;

    objNewUsed = document.getElementsByName("newUsed");

    objBy = document.getElementsByName("by");

    objType = document.querySelector("#carType");
    
    objModel = document.querySelector("#carModel");

    arrayData = [];
    errors = [];


//////////////////////////////////////////////////
    if(objModel.disabled == true){
        let p = document.createElement("p");
        p.className = "alert alert-danger";
        p.textContent = "You must choose brand!";
        let parent = document.getElementById("greska1");
        parent.appendChild(p);
        errors.push("You must first choose brand");
    }
    console.log(errors)
}
var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", provera);


var leftBtn = document.getElementById("btnLevo");
var rightBtn = document.getElementById("btnDesno");
rightBtn.disabled = true;

leftBtn.addEventListener("click", function(){
    this.disabled = true;
    rightBtn.disabled = false;
});
rightBtn.addEventListener("click", function(){
    this.disabled = true;
    leftBtn.disabled = false;
})
    


//pozivanje funkcija

$(document).ready(function(){
    ispisprvih6();
    $("#loadMore").click(ispis3);
})
// animation jquery search form

$(window).ready(function(){
    $(".searchForm").slideDown("slow");
})
$("#btnDesno").click(function(){
    $(".carHolder").animate({
        left:"0%"
    }, (700));
    $("#automobili1").animate({
        left:"-50%"
    }, (700))
})


$("#btnLevo").click(function(){
   
    $(".carHolder").animate({
        left:"100%"
    }, (1000));
    $("#automobili1").animate({
        left:"25%"
    }, (1000))
})



