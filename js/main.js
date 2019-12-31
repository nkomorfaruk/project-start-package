(function ($) {
"use strict";

    // webpage loading 
	$(window).load(function() {
		$("#loading").fadeOut(1000);
	})

    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });

    // progress bar 

    $(document).ready(function(){
        $('#bar1').barfiller({barColor: "#155bc5", duration: 1000});
        $('#bar2').barfiller({barColor: "#155bc5", duration: 1000});
        $('#bar3').barfiller({barColor: "#155bc5", duration: 1000});
        $('#bar4').barfiller({barColor: "#155bc5", duration: 1000});
        $('#bar5').barfiller({barColor: "#155bc5", duration: 1000});
    });

    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });

    // scroll sticky header 
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });

    // slick slider  slider-active
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            fade: false,
            prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
			arrows: true,
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    // testimonial-active
    $('.testimonial-active').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '60px',
        dots: true,
        arrows: false,
        prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
        slidesToShow: 1,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
        ]
    });

     // brand-active
     $('.brand-active').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: false,
        centerPadding: '60px',
        dots: false,
        prevArrow:false,
        nextArrow:false,
        slidesToShow: 5,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow:2
            }
        }
        ]
    });
     
    // burger menu responsive 
	var nav = document.getElementById('xxx');
	var menu = document.getElementById('burger');
	burger.addEventListener('click', function(){
		nav.classList.toggle('cross');
	});

	$('.burger').click(function(){
		$('.main-menu').slideToggle(200); 
	});
     
    
    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
        enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });


    // isotop
    $('.grid').imagesLoaded( function() {
        // init Isotope
        var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item',
        }
        });
    });

    // filter items on button click
    $('.portfolio-menu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    // counter up 

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // WOW active
    new WOW().init();


})(jQuery);