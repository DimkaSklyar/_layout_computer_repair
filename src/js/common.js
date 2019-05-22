function AjaxFormRequest(result_id, formMain, url) {
  jQuery.ajax({
    url: url,
    type: "POST",
    dataType: "html",
    data: jQuery("#" + formMain).serialize(),
    success: function (response) {
      $(':input', '#' + formMain)
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
      setTimeout(() => {
        $("#message").hide();
      }, 5000);
    },
    error: function (response) {
      var par = document.getElementById(result_id);
      var error = document.createElement('p');
      error.classList.add("mt-3");
      error.innerHTML = "Возникла ошибка при отправке формы.";
      par.appendChild(error);
      setTimeout(func, 1000);
    }
  });
}


$('#form-subscribe').submit(function(e){
  e.preventDefault();
  AjaxFormRequest('rezult','form-subscribe','./subscribe.php');
});

$('#order').submit(function (e) {
  e.preventDefault();
  AjaxFormRequest('message-rezult', 'order', './order.php');
});

function func() {
  $("p.mt-3").detach();
}


$(document).ready(function () {

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

  $('.slick').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});

$(function(){
  $("a[href^='#S']").click(function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+30+"px"});
          return false;
  });
});

$(".repeirs-usluga").click(function () { 
  $("#usluga").val($(this).find("h3").text());
});

$(".btn-table").click(function () { 
  $("#usluga").val($(this).closest("tr").find("td:first").text());
});

$(".mobile-menu").click(function (e) { 
  $(".top-navigation-wrapper").slideToggle("menu-active");
});

function mask(event) {
  var matrix = "+7 (___) ___ __ __",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  if (def.length >= val.length) val = def;
  this.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
  });
  if (event.type == "blur") {
    if (this.value.length == 2) this.value = ""
  } else setCursorPosition(this.value.length, this)
};

var input = document.querySelector("#phone");
input.addEventListener("input", mask, false);
input.addEventListener("focus", mask, false);
input.addEventListener("blur", mask, false);