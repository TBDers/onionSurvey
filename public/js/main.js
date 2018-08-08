//On Scroll Nav
$(document).on("scroll", function (event) {
    $("#logo").attr("src", "images/logo_main2.png");
});
$(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height <= 50) {
        $("#logo").attr("src", "images/logo_main.png");
    }
});


// Slider 

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, { 'height': 600, 'indicators': true });
});

//Survey Collapsibles

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, { 'accordion': true });
});

//Modal for Login
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, { 'opacity': .5 });
});

//account creation page
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, { 'classes': '' });
});

//side nav in survey creation page
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, { 'edge': 'right' });
});



//Questions and logic for survey preview

var questions = ["How happy are you working at Example Inc?"];


$("#add1").on("click", function (event) {
    event.preventDefault();
    $("#slideContainer").append(questions[0]);
});