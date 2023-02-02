$(document).ready(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
            $('header h1').css('text-align', 'center');
            $('header h1').css('font-size', '100%');
        }

        else {
            $('header h1').css('text-align', '');
            $('header h1').css('font-size', '');
        }
    });
//     if ($("#viewport").scrollTop() == 2px) {
//         $('h1').css('color', '#fff');
// }
});