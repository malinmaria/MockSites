/*Cookies
==============================*/

$(".cookies").click(function(){
  $("#box").toggle(2000);
});

$(".c-cookie").click(function(){
  $(this).toggleClass('rotate-l');
});
$(".m-cookie").click(function(){
  $(this).toggleClass('rotate-l');
});
$(".s-cookie").click(function(){
  $(this).toggleClass('rotate-r');
});
$(".d-cookie").click(function(){
  $(this).toggleClass('rotate-r');
});

/*Doughnuts
==============================*/

$("input").bind('focus blur', function(){
  $(this).toggleClass('green');
});

$("textarea").bind('focus blur', function(){
  $(this).toggleClass('green');
});

$(".s-submitted").click(function(){
  $(this).text(function(i, text){
    return text === 'Order Now!' ? 'Sending Your Order...' : 'Order Now!';
  });
});

$(".s-submitted").click(function(){
  $(".tiny-dnt").toggleClass('mv-dnt');
  $(".tiny-dnt").fadeOut('slow', function(){
    $(".temp").show();
  });
});

/*Ice Cream
==============================*/

var $overlay = $('<div class="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

$(".icm-wrapper a").click(function(event){
  event.preventDefault();
  var location = $(this).attr('href');
  $image.attr("src", location);
  $overlay.show();
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});
$overlay.click(function(){
  $overlay.hide();
});

/*Cakes
==============================*/

$(".round").click(function(){
  $('.s-cake').hide();
  $('.r-cake').toggle();
  $('.rc-icing').hide();
  $('.sc-icing').hide();
  $('.rv-icing').hide();
  $('.sv-icing').hide();
});
$(".square").click(function(){
  $('.r-cake').hide();
  $('.s-cake').toggle();
  $('.rc-icing').hide();
  $('.sc-icing').hide();
  $('.rv-icing').hide();
  $('.sv-icing').hide();
});
$(".c-icing").click(function(){
  if($('.round[value=round]').is(':checked')){
    $('.r-cake').hide();
    $('.rv-icing').hide();
    $('.rc-icing').toggle();
  }
});
$(".c-icing").click(function(){
  if($('.square[value=square]').is(':checked')){
    $('.s-cake').hide();
    $('.sv-icing').hide();
    $('.sc-icing').toggle();
  }
});
$(".v-icing").click(function(){
  if($('.round[value=round]').is(':checked')){
    $('.r-cake').hide();
    $('.rc-icing').hide();
    $('.rv-icing').toggle();
  }
});
$(".v-icing").click(function(){
  if($('.square[value=square]').is(':checked')){
    $('.s-cake').hide();
    $('.sc-icing').hide();
    $('.sv-icing').toggle();
  }
});
