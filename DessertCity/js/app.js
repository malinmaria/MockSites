// $(".warning").hide().show("slow");

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
  // $(this).toggleClass('mv-dnt');
});

$(".s-submitted").click(function(){
  $(".tiny-dnt").toggleClass('mv-dnt');
  $(".tiny-dnt").fadeOut('slow', function(){
    $(".temp").show();
  });
});

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

$(".round").click(function(){
  $('.base').toggle();
  $('.icing').hide();
});
$(".c-icing").click(function(){
  $('.base').hide();
  $('.icing').toggle();
});
