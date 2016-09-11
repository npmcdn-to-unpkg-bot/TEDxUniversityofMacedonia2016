
//run the svg animation for 5000 miliseconds
// Wait for window load
 $(window).load(function() {
    // Animate loader off screen
    $(".loading").fadeOut(2000);
    $('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
});
    $('#allbtn').trigger('click');
  });