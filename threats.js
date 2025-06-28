$(document).ready(function() {
    // Inicializar Slick Slider
    $('.historical-attacks-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // Interactividad para las tarjetas de amenazas
    $('.bg-white').click(function() {
        const threatTitle = $(this).find('h3').text();
        bootbox.alert(`Has seleccionado ${threatTitle}. ¡Aprende más sobre cómo protegerte!`);
    });
});