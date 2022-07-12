const colorSwitch = $('.colors li');//button

colorSwitch.on ('click', function() {
    $('.colors > li').removeClass('active-color');
    $(this).addClass('active-color'); // new active background color
    let newColor = $(this).attr('data-color'); //NEW COLORS HEX CODE
    $('body').css('background-color', newColor); //CHANGING BACKGROUND
});