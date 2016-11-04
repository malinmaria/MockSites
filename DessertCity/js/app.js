$(".warning").hide().show("slow");

    $(".cookies").click(function(){
      $("#box").toggle(2000);
    });

    $(".c-cookie").click(function(){
      $(".c-cookie").toggleClass('rotate-l');
    });
    $(".m-cookie").click(function(){
      $(".m-cookie").toggleClass('rotate-l');
    });
    $(".s-cookie").click(function(){
      $(".s-cookie").toggleClass('rotate-r');
    });
    $(".d-cookie").click(function(){
      $(".d-cookie").toggleClass('rotate-r');
    });
