"use strict";

$(window).on("load", function () {
  $('.preloader').fadeOut('slow');
});
$(document).ready(function () {
  //animacija sidenav elemenata liste linkova
  $("#clickSide").click(function () {
    $(".slideIn").each(function (i) {
      $(this).delay(200 * i).animate({
        left: "0",
        opacity: "1"
      }, 700);
    });
    $(".slideIn").hover(function () {});
    $("#openSide").css("box-shadow", "0 0 0 10000px rgba(0,0,0,.50)");
  });
  $("#closeSide").click(function () {
    $(".slideIn").each(function () {
      $(this).animate({
        left: "-250px"
      }).finish();
    });
    $("#openSide").css("box-shadow", "none");
  }); //tooltip inicijalizacija bootstrap

  $('body').tooltip({
    selector: '.fa-info-circle'
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
    }, 300);
    return false;
  }); //animacija artikala sa automobilima koji se prikazuju sa animacijom jedan nakon drugog

  $("#loadMore").click(function () {
    $(".slide").each(function (i) {
      $(this).delay(450 * i).animate({
        top: "0",
        opacity: "1"
      });
    });
  }); //Skrol do sekcije 

  $("#requestBtn").click(function () {
    $("html,body").animate({
      scrollTop: $(".back").offset().top
    }, 1500);
  }); //plugin za carousel aka owl-carousel

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
  }); //dugmad za kontrolu owl-carousel

  var $owl = $(".first-owl");
  $("#btnDesno").click(function () {
    $owl.trigger("next.owl.carousel");
  });
  $("#btnLevo").click(function () {
    $owl.trigger("prev.owl.carousel");
  });
  $(".seeMore").click(function () {
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
    autor();
    $("#autor").fadeIn();
    $("#closeAutor").click(function () {
      $("#autor").fadeOut();
    });
  });
});