/**
 * Created by Andrey on 24.05.2017.
 */

//BG images
// Fill-Box
$(document).ready(function () {
	(function ($, window, document) {
		$.fn.fillBox = function () {
			this.each(function () {
				var el = $(this),
				src = el.attr('src'),
				parent = el.parent();
				parent.addClass('filled');
				parent.css({
					'background-image': 'url(' + src + ')',
					'background-size': 'cover',
					'background-position': 'center'
				});
				el.hide();
			});
		};
	}(jQuery, window, document));

	$('.fill-box').fillBox();


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

	// $('.scroll-content').scrollspy({ target: '#navbarMain' })

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

    // TYPOGRAF
    $(document).ready(function () {
    	var tp = new Typograf({locale: ['ru', 'en-US']});
    	$( ".typographed" ).each(function() {
    		$(this).html(tp.execute($(this).html()));
    	});
    });
    
});