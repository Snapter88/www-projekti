// Some Jquery

  $(document).ready(function(){
    $(".btn-news").click(function(){
      $(".form-container").show(100);
    });
    $(".cancelbtn").click(function(){
      $(".form-container").hide();
    });
    $(".news-container").click(function(){
      $(".form-container").hide();
    });
  });