$(document).ready(function() {
    $('.normal1').removeClass('up1');
    
    var $content = $('.normal');
    $('.modal').modal();
    $(document).on('scroll', function() {
        $content.each(function(index) {
            if ($(document).scrollTop() > $(this).offset().top/2 && $(this).hasClass('up')) {
                $(this).removeClass('up');
            }
        });
        if ($(document).scrollTop() > $('.normal2').offset().top - 600) {
            $('.normal2').removeClass('move1');
            $('.normal2').removeClass('move2');
            $('.normal2').removeClass('move3');
            $('.normal2').removeClass('move4');
        }
        if($(window).scrollTop() > 5) {
            $('.scrollTop').css('transform', 'scale(1, 1)');
        } else {
            $('.scrollTop').css('transform', 'scale(0, 0)');
        }
    });
    
    $('.iconCont').hover(function() {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.8)');
        $('i', this).addClass('bright');
    }, function() {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.6)');
        $('i', this).removeClass('bright');
    });
    
    $(".scrollTop").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    
    $show = 0;
    $("#innovation").on('click', function() {
        if ($show == 0) {
            $show = 1;
            $(".dropdown-ul").css('display', 'block');   
        } else {
            $show = 0;
            $(".dropdown-ul").css('display', 'none');
        }
    });
    $(".button-collapse").sideNav();
});