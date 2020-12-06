$(function() {

    // carousel script
    $('#myCarousel').carousel({
    interval: 3000,
    });
    // end carousel script

    // hours of operation get day
    $('.opening-hours li').eq(new Date().getDay()).addClass('today');
    // end get day script

});