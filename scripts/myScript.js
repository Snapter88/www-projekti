// Some Jquery

  $(document).ready(function(){
    $(".btn-news").click(function(){
      $(".news-container").show(100);
    });
    $(".cancelbtn").click(function(){
      $(".news-container").hide();
    });
  });