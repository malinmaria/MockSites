$(".warning").hide().show("slow");

    $(".cookies").click(function(){
      $("#box").toggle(2000);
    });

    $(".c-cookie").click(function(){
      $(".c-cookie").animate({
        right: '250px'
      });
    });

    $(".m-cookie").click(function(){
      $(".m-cookie").animate({
        right: '250px'
      });
    });
    
