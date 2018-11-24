$(document).on('click', '#myModal', function() {
    jQuery("iframe").each(function() {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
});
$(document).on('click', '.arrow-button', function() {
    if ($("header").attr('class')=='back1') $("header").attr('class','back2');
    else $("header").attr('class','back1');
});
$(document).on('click', '.navbar-toggler', function() {
    if (!$('.hidden-menu').hasClass('show-menu')) $('.hidden-menu').addClass('show-menu');
    else $('.hidden-menu').removeClass('show-menu');
});
$(document).ready(function(){
    var HeaderTop = $('.carousel').offset().top;
    $(window).scroll(function(){
        if( $(window).scrollTop() > HeaderTop ) {
            $('.nav-f').addClass('fixednav');
        } else {
            $('.navbar-collapse').removeClass('show');    
            $('.nav-f').removeClass('fixednav');            
        }
    });
});