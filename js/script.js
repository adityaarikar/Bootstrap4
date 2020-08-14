$(document).ready(function(){
    $("#reserveBtn").click(function(){
        $("#reserveTable").modal('show');
    });
    $("#cancel-reserve").click(function(){
        $("#reserveTable").modal('hide');
    });
    $("#cancel-reserv-2").click(function(){
        $("#reserveTable").modal('hide');
    });
    
    
    $("#loginBtn").click(function(){
        $("#loginModal").modal('show');
    });
    $("#cancel-login").click(function(){
        $("#loginModal").modal('hide');
    });
    $("#cancel-login-2").click(function(){
        $("#loginModal").modal('hide');
    });

    $('#mycarousel').carousel({ interval: 2000 });
            $("#carouselButton").click(function () {
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')) {
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');
                }
            });
});
