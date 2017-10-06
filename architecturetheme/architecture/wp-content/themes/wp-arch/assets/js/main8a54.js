jQuery(document).ready(function($) {
	"use strict";

	/* window */
	var window_width, window_height, scroll_top;

	/* admin bar */
	var adminbar = $('#wpadminbar');
	var adminbar_height = 0;

	/* header menu */
	var header = $('#cshero-header');
	var header_top = 0;

	/* scroll status */
	var scroll_status = '';

	/**
	 * window load event.
	 * 
	 * Bind an event handler to the "load" JavaScript event.
	 * @author Fox
	 */
	$(window).on('load', function() {
		/** current scroll */
		scroll_top = $(window).scrollTop();

		/** current window width */
		window_width = $(window).width();

		/** current window height */
		window_height = $(window).height();

		/* get admin bar height */
		adminbar_height = adminbar.length > 0 ? adminbar.outerHeight(true) : 0 ;

		/* get top header menu */
		header_top = header.length > 0 ? header.offset().top - adminbar_height : 0 ;

		/* check sticky menu. */
		cms_stiky_menu();

		cms_enscroll();

		cms_col_sameheight();

		cms_edge_effect();

		cms_side_effect();

		cms_section_offset();

	});

	/**
	 * reload event.
	 * 
	 * Bind an event handler to the "navigate".
	 */
	window.onbeforeunload = function(){
	}
	
	/**
	 * resize event.
	 * 
	 * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
	 * @author Fox
	 */
	$(window).on('resize', function(event, ui) {
		/** current window width */
		window_width = $(event.target).width();

		/** current window height */
		window_height = $(window).height();

		/** current scroll */
		scroll_top = $(window).scrollTop();

		/* check sticky menu. */
		cms_stiky_menu();

		cms_enscroll();

		cms_col_sameheight();

		cms_edge_effect();

		cms_side_effect();

		cms_section_offset();
	});
	
	/**
	 * scroll event.
	 * 
	 * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
	 * @author Fox
	 */
	$(window).on('scroll', function() {
		/** current scroll */
		scroll_top = $(window).scrollTop();

		/* check sticky menu. */
		cms_stiky_menu();

		/* check back to top */
		cms_back_to_top(); 

	});

	/**
	 * Stiky menu
	 *
	 * Show or hide sticky menu.
	 * @author Fox
	 * @since 1.0.0
	 */
	function cms_stiky_menu() {
		if ( $('#cshero-header-inner').hasClass('sticky-desktop') && scroll_top > 1 && window_width > 991) {
			header.addClass('header-fixed');
			$('body').addClass('hd-fixed');
		} else {
			header.removeClass('header-fixed');
			$('body').removeClass('hd-fixed');
		}
	}

	/**
	 * Mobile menu
	 * 
	 * Show or hide mobile menu.
	 * @author Fox
	 * @since 1.0.0
	 */
	

	$("#cshero-menu-mobile").on('click',function(){
		$('#cshero-header-navigation').toggleClass('navigation-open');
    })

    /* User Login */
    $(".cms-login-wrap .button-login span").on('click',function(){
		$('.cms-form-login').toggleClass('open');
    })

    $(".cms-login-wrap .button-register span").on('click',function(){
		$('.cms-form-register').toggleClass('open');
    })


    $(".cms-login-wrap .button-cart span").on('click',function(){
		$('.cms-login-wrap .widget_shopping_cart').toggleClass('open');
    })


	/**
	 * Back To Top
	 * 
	 * @author Fox
	 * @since 1.0.0
	 */
	$('body').on('click', '#back_to_top', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
    });


    /* Show or Hide Buttom  */
	function cms_back_to_top(){
		/* Back To Top */
        if (scroll_top < window_height) {
        	$('#back_to_top').addClass('off').removeClass('on');
        } else {
        	$('#back_to_top').removeClass('off').addClass('on');
        }
	}

	/* Video Light Box */
	$('.cms-button-video').magnificPopup({
		//disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('#sidebar #searchform').find("input[type='text']").each(function(ev) {
	    if(!$(this).val()) { 
	        $(this).attr("placeholder", "Search blog...");
	    }
	});

	$('.wpb_wrapper #searchform').find("input[type='text']").each(function(ev) {
	    if(!$(this).val()) { 
	        $(this).attr("placeholder", "Try Searching Another Page...");
	    }
	});
	/* Scrolling Sidebar */
	function cms_scrolling_sidebar(){
		var offset = $("#sidebar").offset();
	    var topPadding = 60;
	    $(window).scroll(function() {
	        if ($(window).scrollTop() > offset.top) {
	            $("#sidebar").stop().animate({
	                marginTop: $(window).scrollTop() - offset.top + topPadding
	            });
	        } else {
	            $("#sidebar").stop().animate({
	                marginTop: 0
	            });
	        };
	    });
	}

	/**
	 * Enscroll
	 * 
	 * 
	 * @author Fox
	 */
	function cms_enscroll() {
		$('#cshero-header-top .widget_shopping_cart_content ').enscroll();
		$('.cms-recent-post').enscroll();
	}

	function cms_col_sameheight() {
		$('.columns-same .col-same').matchHeight();
	}

	/* Woo Add Class */
	$('.woo-social').on('click', function() {
    	$(this).toggleClass('opened');
    })
    $('.plus').on('click', function(){
    	$(this).parent().find('input[type="number"]').get(0).stepUp();
    });
    $('.minus').on('click', function(){
    	$(this).parent().find('input[type="number"]').get(0).stepDown();
    });

    /* CMS Image Popup */
    $('.cms-images-zoom').magnificPopup({
	  delegate: 'a.z-view', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery: {
	     enabled: true
	  },
	  mainClass: 'mfp-fade',
	  // other options
	});
	$('.cms-image-zoom').magnificPopup({
	  delegate: 'a.z-view', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery: {
	     enabled: false
	  },
	  mainClass: 'mfp-fade',
	  // other options
	});
	/* Hover Effect Location */
	function cms_side_effect() {
		$( ".cms-gallery-content" ).each(function() {
			var gallery_content_h = $(this).height();
			var gallery_content_bottom = gallery_content_h + 65;
			$(this).parents('.cms-gallery-inner').find('.cms-gallery-body').css('bottom',-gallery_content_bottom+'px');
		});
		$( ".side-body" ).each(function() {
			var h_side_body = $(this).height();
			var h_side_title = $(this).children('.side-title').height();
			var h_side_bottom = (h_side_body - 65) - (h_side_title);
			$(this).css('bottom',-h_side_bottom+'px');
		});
	}
	/* Add Class Input Contact Form */

    $(".wpcf7-form-control").focus(function(){
        $('.wpcf7-row-two').removeClass('input-filled-active');
        $(this).parents('.wpcf7-row-two').addClass('input-filled-active');
    })
    $(".wpcf7-form-control").focusout(function(){
        $(this).parents('.wpcf7-row-two').removeClass('input-filled-active');
    });
    var filled = $(".wpcf7-form-control").val();
    if(filled == '') {
        $('.wpcf7-form-control').parents('.wpcf7-row-two').removeClass('input-filled-hold');
    }
    $(".wpcf7-form-control").change(function(){ 
        $(this).parents('.wpcf7-row-two').addClass('input-filled-hold');
    });

    /* Edge Effect */
    function cms_edge_effect() {
    	if($(window).width() > 1200) {
			var w_desktop = $(window).width();
			var w_padding = (w_desktop - 1170)/2;
			$('.cms-edge-wrapper').css('width',w_desktop+'px');
			$('.cms-edge-wrapper').css('left',-w_padding+'px');
		}
		if($(window).width() < 1200) {
			var w_desktop = $(window).width();
			var w_padding = (w_desktop - 970)/2;
			$('.cms-edge-wrapper').css('width',w_desktop+'px');
			$('.cms-edge-wrapper').css('left',-w_padding+'px');
		}
	}
	/* Section Offset */
	function cms_section_offset() {
		if($(window).width() > 768) {
			var w_desktop = $(window).width();
			var w_padding = (w_desktop - 1170)/2;
			$('.section-offset-left').css('padding-left',w_padding+'px');
			$('.section-offset-right').css('padding-right',w_padding+'px');
		}
	}

	$('.tnp-field-email').find("input[type='email']").each(function(ev) {
     	if(!$(this).val()) { 
         	$(this).attr("placeholder", "Enter email address");
     	}
 	});

    // =======
    // Popover
    // =======
    var popover = $(".popover");
    if(popover.length){
      popover.on("click", function(){
        if($(this).hasClass("ready")){
          popover.removeClass("open");
          $(this).toggleClass("open");
          popover.addClass("ready");
          $(this).toggleClass("ready");
        } else {
          popover.removeClass("open");
          popover.addClass("ready");
        }
      });
    }
});