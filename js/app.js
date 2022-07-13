$(document).ready(function () {
  // new WOW().init();
  $('[data-toggle="tooltip"]').tooltip();

  $(".navbar-toggler").click(function () {
    $(".helper-task").toggleClass("overflow");
  });

  $(".scrolltop").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrolltop").fadeIn();
    } else {
      $(".scrolltop").fadeOut();
    }
  });
  $(".scrolltop").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });
});

$(window).scroll(function () {
  var nav = $(".bg-scroll");
  var top = 20;
  if ($(window).scrollTop() >= top) {
    nav.addClass("bg-black");
  } else {
    nav.removeClass("bg-black");
  }
});

$(".chevron,.click-scroll,.ontop__scroll").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#first").offset().top - 0,
    },
    500
  );
});

$(".hero__slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "60px",
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".tested").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "60px",
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".campaign").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "60px",
        adaptiveHeight: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$.ajax({
  url: "/lasertech/js/data.json",
  type: "GET",
  success: function (response) {
    console.log(response);
    var a;
    for (a = 0; a < response.length; a++) {
      $(".thepartner").append(`
                <div class="col-md-4">
                    <div class="logo-partner" data-toggle="modal" data-target="#logo" data-help="${
                      response[a].id - 1
                    }">
                        <img src="${response[a].img}" alt="">
                    </div>
                </div>
            `);
    }

    $("#logo .modal-body").html("");
    $(".logo-partner[data-target='#logo']").on("click", function () {
      var data = $(this).attr("data-help");

      $("#logo .modal-content").html(`
                    <div class="modal-body">
                        <h3 class="title-purple font-bold text-center">${response[data].title}</h3>
                        <div>
                            <div class="font-bold title-purple">The Challange</div>
                            <p>${response[data].challange}</p>
                        </div>
                        <div>
                            <div class="font-bold title-purple">The Strategy</div>
                            <ul class="lala">
                            </ul>
                        </div>
                        <button type="button" class="btn btn-secondary float-right" data-dismiss="modal">Close</button>
                    </div>
                `);

      var length = response[data].strategy;
      var a;
      for (a = 0; a < length.length; a++) {
        var value = length[a];
        // console.log(value);
        $(".lala").append("<li>" + value + "</li>");
      }
    });
  },
});
