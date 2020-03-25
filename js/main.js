
function changeCircleLogo(redInBlack = false) {
    if (redInBlack){
        $('#logoSvg .circle-left').attr("fill", "#BD241F");
        $('#logoSvg .circle-right').attr("fill", "black");
    }
    else {
        $('#logoSvg .circle-left').attr("fill", "black");
        $('#logoSvg .circle-right').attr("fill", "#BD241F");
    }
}

function changeColorMenuBtn (){
    var menu = $(".btn-nav, .btn-nav:after"),
    logo = $("#logoSvg");
    let topDarkBlock = $('.background-section-questions').offset().top;
    var top = $(this).scrollTop() + 60;
    if ( top >= topDarkBlock ) {
        menu.addClass("btn-nav-white");
        logo.addClass("logoSvgColor");
    } else if ( top <= topDarkBlock ) {
        menu.removeClass("btn-nav-white");
        logo.removeClass("logoSvgColor");
    }
}

$(document).ready(function(){
    $('.open-menu').removeAttr('disabled');	
    $('header').on('click','.open-menu',function(){
        $(this).addClass('close-menu').removeClass('open-menu').attr('disabled','disabled');
        $('.container').addClass('blur');
        setTimeout(function(){
            $('.close-menu').removeAttr('disabled');
        },1100);
        $('.float-nav').show();
        setTimeout(function(){
            $('.float-nav').addClass('active');
            changeCircleLogo(true);
            $('.btn-nav').addClass("btn-nav-white");
            $("#logoSvg").addClass("logoSvgColor")
        },100);
    });
    function fechaMenu(){
        changeCircleLogo(false);
        changeColorMenuBtn()
        $('.close-menu').removeClass('close-menu').addClass('open-menu').attr('disabled','disabled');
        $('.float-nav').removeClass('active');
        setTimeout(function(){
        $('.float-nav').hide();	
        $('.open-menu').removeAttr('disabled');		
        },1100);
    }
    $('header').on('click','.close-menu',function(){
        fechaMenu();
    });

    $('.float-nav ul li').on('click','a',function(){
        fechaMenu();
    });
    $('.collapsible').collapsible({
        onOpenStart: function (object){
            $($(object).children()[0].children[1]).addClass("rotate");
        },
        onCloseStart: function (object){
            $($(object).children()[0].children[1]).removeClass("rotate");
        }
    });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
    });
    $(window).scroll(function() {
        changeColorMenuBtn();
    });
});