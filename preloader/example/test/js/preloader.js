$( window ).on( "load", function() {
  //Кemove preloader after full load
  $(".preloader").fadeOut(300, function() {
    $(".spinner").fadeOut(300);
  });
});
