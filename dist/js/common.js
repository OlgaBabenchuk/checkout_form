$(document).ready(function() {
 
  /*   open textarea   */
  $(".add-comment").on("click", function() {
    $("textarea").css({'display': 'block'});
    $(".add-comment").css({'display': 'none'});
    return false;
  });

  /* settings for card-tabs */
  $(".order-form__tab").on("click", function(){
    if(!($(this).hasClass(".is-active"))) {
      $(".is-active").removeClass("is-active");
         $(".order-form__body").fadeOut(function() {
      $(".order-form__body").fadeIn("slow");
    });
      $(this).addClass("is-active");  
    } 
  }); 

});


