$(function() {

    // carousel script
    $('#salonCarousel').carousel({
        interval: 5000,
        touch: true,
    });
    // end carousel script

    // gallery touch
    $('#galleryCarousel').carousel({
        interval: 5000,
        touch: true,
    });
    //end gallery touch

    // hours of operation get day
    $('.opening-hours li').eq(new Date().getDay()).addClass('today');
    // end get day script

});