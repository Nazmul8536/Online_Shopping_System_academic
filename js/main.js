$(document).ready(function(){
    // superslidejquerY
    $('#slides').superslides({
        'play':2000,
        'pagination':false,
        'animation':'fade'
    });
    // typeJs plugin
    var typed = new Typed(".typed", {
        // Waits 1000ms after typing "First"
        strings: ["Web Designer.", "Web Developer.","Bitm Courses.","SEIP Courses.","PHP Developer","Laravel Developer","Javascript"],
        'loop':true,
        'smartBackspace':true,
        'backSpeed':70,
        'typeSpeed':70,
        'shuffle':true,
        'showCursor':false
      });
});