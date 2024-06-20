$(document).ready(function() {

    $('.btnOne').click(function() {
        $(".modalOne").removeClass("marginOne");
        $(".modalOne").addClass("marginTwo")
    });
    
    $('.btnTwo').click(function() {
        $(".modalOne").removeClass("marginTwo");
        $(".modalOne").addClass("marginOne")
    });
});