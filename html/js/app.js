/**
 * Created by Andrey on 24.05.2017.
 */


//BG images
$(document).ready(function () {

    //Smooth scroll
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });

    //BG Images
    $('.fill-box').fillBox();


    //Parallax
    $(function() {
        // init controller
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "180%"}});

        // .main.faq
        new ScrollMagic.Scene({triggerElement: "#wins"})
            .setTween("#wins > .bcg", {y: "40%", ease: Linear.easeNone})
                //.addIndicators()
            .addTo(controller);

    });


});

