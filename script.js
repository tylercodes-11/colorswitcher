const colorSwitch = $('.colors li');//button

colorSwitch.on ('click', function() {
    $('.colors > li').removeClass('active-color');
    $(this).addClass('active-color');
    let newColor = $(this).attr('data-color');
    $('body').css('background-color', newColor);
});