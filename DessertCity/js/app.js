$(".warning").hide().show("slow");

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
