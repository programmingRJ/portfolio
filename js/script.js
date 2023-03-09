(function($) {
    
    "use strict";

    /* ----- Preloader ----- */
    function preloaderLoad() {
        if($('.preloader').length){
            $('.preloader').delay(200).fadeOut(300);
        }
        $(".preloader_disabler").on('click', function() {
            $("#preloader").hide();
        });
    }

    /* ----- Navbar Scroll To Fixed ----- */
    function navbarScrollfixed() {
        $('.navbar-scrolltofixed').scrollToFixed();
        var summaries = $('.summary');
        summaries.each(function(i) {
            var summary = $(summaries[i]);
            var next = summaries[i + 1];
            summary.scrollToFixed({
                marginTop: $('.navbar-scrolltofixed').outerHeight(true) + 10,
                limit: function() {
                    var limit = 0;
                    if (next) {
                        limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                    } else {
                        limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
                    }
                    return limit;
                },
                zIndex: 999
            });
        });
    }
    
    /* ----- fact-counter ----- */
    function counterNumber() {
        $('div.timer').counterUp({
            delay: 5,
            time: 2000
        });
    }

    /* ----- Particles Js ----- */
    if($('#particles2-effect').length){
        $("#particles2-effect").jParticle({
            background: "#023368",
            color: "#fff"
        });
    }

    /* ----- Mobile Nav ----- */
    $(function() {
        $('nav#menu').mmenu();
    });

    /* ----- MASONRY ISOTOP GALLERY ----- */
    // $(document).on("ready",function() {
    //     $('#grid').isotope({
    //       itemSelector: '.isotope-item',
    //     });

    //     // filter items on button click
    //     $('.masonry-filter').on('click', 'li', function() {
    //       var filterValue = $(this).attr('data-filter');
    //       $('#grid').isotope({ filter: filterValue });
    //       $('.masonry-filter li').removeClass('active');
    //       $(this).addClass('active');
    //     });
    // })
    function UDMasonry_isotop() {
        if($('.masonry-isotop').length){
            var winDow = $(window);
            // Needed variables
            var $UD_mscontainer=$('.masonry-isotop .masonry-gallery');
            var $UD_filter=$('.masonry-filter');
            $UD_mscontainer.isotope({
                filter:'*',
                 masonry: {
                    columnWidth : '.masonry-item.item-grid'
                 },
                animationOptions:{
                    duration:600,
                    easing:'linear'
                }
            });
            // Isotope Filter 
            $UD_filter.find('li').on('click', function(){
                var selector = $(this).attr('data-filter'); 
                try {
                    $UD_mscontainer.isotope({ 
                        filter  : selector,
                        animationOptions: {
                            duration: 600,
                            easing  : 'linear',
                            queue   : false
                        }
                    });
                } catch(err) {
                }
                return false;
            });
            winDow.on('resize', function(){
                var selector = $UD_filter.find('li.active').attr('data-filter');
                $UD_mscontainer.isotope({ 
                    filter  : selector,
                    animationOptions: {
                        duration: 600,
                        easing  : 'linear',
                        queue   : false
                    }
                });
            });
            var filterItem  = $('.masonry-filter li');  
            filterItem.on('click', function(){
                var $this = $(this);
                if ( !$this.hasClass('active')) {
                    filterItem.removeClass('active');
                    $this.addClass('active');
                }
            });
        }
    }   
    UDMasonry_isotop();

    /* ----- LighvtBox / Fancybox ----- */
    if($('.lightbox-image').length) {
      $('.lightbox-image').fancybox();
    }

    /* ----- MagnificPopup ----- */
    if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
        $(".popup-img").magnificPopup({
            type:"image",
            gallery: {
                enabled: true,
            }
        });
        $(".popup-img-single").magnificPopup({
            type:"image",
            gallery: {
                enabled: false,
            }
        });
        $('.popup-iframe').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            preloader: false,
            fixedContentPos: false
        });
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
    };

    /* ----- Progress Bar ----- */
    if($('.progress-levels .progress-box .bar-fill').length){
        $(".progress-box .bar-fill").each(function() {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
            $(this).children('.percent').html(progressWidth+'%');
        });
    }

    /* ----- Background Parallax ----- */
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    jQuery(document).on("ready",function(){
        jQuery(window).stellar({ 
            horizontalScrolling: false,
            hideDistantElements: true,
            verticalScrolling: !isMobile.any(),
            scrollProperty: 'scroll',
            responsive: true
        });          
    });


    /* ----- YTplayer ----- */
    if($('.player').length) {
        $(".player").mb_YTPlayer();
    }

    /* ----- fitVids ----- */
    if($('.body').length) {
        $('.body').fitVids();
    }

    /* ----- Wow animation ----- */
    function wowAnimation() {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true, // trigger animations on mobile devices (default is true)
            offset:       0
        });
        wow.init();
    }

    /* ----- FLIP CLOCK ----- */
    function flip_Clock() {
        var clock;    
        var clock;
        clock = $('.clock').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            callbacks: {
                stop: function() {
                    $('.message').html('The clock has stopped!')
                }
            }
        });
                
        clock.setTime(8220880);
        clock.setCountdown(true);
        clock.start();
    }

    /* ----- FULL CALENDAR ----- */
    if($('.calendar').length){
        $('.calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2018-05-22',
            navLinks: true, // can click day/week names to navigate views
            selectable: true,
            selectHelper: true,
            select: function(start, end) {
                var title = prompt('Event Title:');
                var eventData;
                if (title) {
                    eventData = {
                        title: title,
                        start: start,
                        end: end
                    };
                    $('.calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
                }
                $('.calendar').fullCalendar('unselect');
            },
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    title: 'All Day Event',
                    start: '2018-05-01'
                },
                {
                    title: 'Long Event',
                    start: '2018-05-07',
                    end: '2018-05-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2018-05-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2018-05-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2018-05-11',
                    end: '2018-05-13'
                },
                {
                    title: 'Meeting',
                    start: '2018-05-12T10:30:00',
                    end: '2018-05-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2018-05-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2018-05-12T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2018-05-12T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: '2018-05-12T20:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2018-05-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2018-05-28'
                }
            ]
        });        
    }

    if($('#calendar').length){
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'listDay,listWeek,month'
            },

            // customize the button names,
            // otherwise they'd all just say "list"
            views: {
                listDay: { buttonText: 'list day' },
                listWeek: { buttonText: 'list week' }
            },

            defaultView: 'listWeek',
            defaultDate: '2018-05-12',
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    title: 'All Day Event',
                    start: '2018-05-01'
                },
                {
                    title: 'Long Event',
                    start: '2018-05-07',
                    end: '2018-05-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2018-05-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2018-05-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2018-05-11',
                    end: '2018-05-13'
                },
                {
                    title: 'Meeting',
                    start: '2018-05-12T10:30:00',
                    end: '2018-05-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2018-05-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2018-05-12T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2018-05-12T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: '2018-05-12T20:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2018-05-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2018-05-28'
                }
            ]
        });
    }

    /* ----- Date & time Picker ----- */
    if($('.datepicker').length){
        $('.datepicker').datetimepicker();
    }

    /* ----- Full Page Slider & PG Slider ----- */
    // if($('#js-main-slider').length){
    //     $('#js-main-slider').pogoSlider({
    //         autoplay: true,
    //         autoplayTimeout: 5000,
    //         displayProgess: true,
    //         preserveTargetSize: true,
    //         targetWidth: 1000,
    //         targetHeight: 300,
    //         responsive: true
    //     }).data('plugin_pogoSlider');
    // }
    
    if($('#fullpage').length){
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'right',
            sectionsColor: ['#F0F2F4', '#fafafa', '#F0F2F4', 'whitesmoke', '#f9f9f9']
        });
    }

    /*  Owl-Testimonial-carousel  */
    if($('.testimonial-carousel').length){
        $('.testimonial-carousel').bxSlider({
          auto: true,
          infiniteLoop: true,
          mode: 'vertical',
          nextSelector: '#slider-next',
          prevSelector: '#slider-prev',
          pager: false,
          slideMargin: 5,
          speed: 3000
        });
    }

    /* ----- Google Map Settings ----- */
    if($('#map-location').length){
        var map;
        map = new GMaps({
            el: '#map-location',
            zoom: 14,
            scrollwheel:false,
            //Set Latitude and Longitude Here
            lat: 39.768403,
            lng: -86.158068
        });
    }

    /* ----- FLICEKR FEED ----- */
    if($('.flickr-photo').length){
        $('.flickr-photo').jflickrfeed({
            limit: 9,
            qstrings: {
                id: '44802888@N04'
            },
            itemTemplate: 
            '<li>' +
                '<a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a>' +
            '</li>'
        });
    }

    /* ----- FLICEKR FEED ----- */
    function twitterFeed() {
        $('.twitter').twittie({
            dateFormat: '%b. %d, %Y',
            template: '{{tweet}} <div class="date">{{date}}</div> <a href="{{url}}" target="_blank">Details</a>',
            count: 3,
            hideReplies: true
        });
    }

    /* ----- Scroll To top ----- */
    function scrollToTop() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 600) {
                $('.scrollToHome').fadeIn();
            } else {
                $('.scrollToHome').fadeOut();
            }
        });
        
        //Click event to scroll to top
        $('.scrollToHome').on('click',function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    }

    $(window).scroll(function() {
      if ($(this).scrollTop() > 600) {
        $(".scrollToHome").fadeIn();
      } else {
        $(".scrollToHome").fadeOut();
      }
    })
    $(".scrollToHome").click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    })

    // Owl-main-slider-carousel-With-Data-Attribute
    function UD_OwlDA () {
        if ($('.unlock-main-slider').length) {
          $('.unlock-main-slider').each(function () {
            var Self                        = jQuery(this);
            var ud_data_Autoplay            = Self.data('autoplay'); // = true/false
            var ud_data_center              = Self.data('center'); // = true/false
            var ud_data_Dots                = Self.data('dots'); // = true/false
            var ud_data_Active              = Self.data('active'); // = true/false
            var ud_data_Nav                 = Self.data('nav'); // = true/false
            var ud_data_Margin              = Self.data('margin'); // = true/false
            var ud_data_Items               = Self.data('items'); // = true/false
            var ud_data_Loop                = Self.data('loop'); // = true/false
            var ud_data_RTL                 = Self.data('rtl'); // = true/false
            var ud_data_Smartspeed          = Self.data('smartSpeed'); // = Custome Speed like "2000"
            var ud_data_singleItem          = Self.data('singleItem'); // = true/false

            //var myCarousel = $('.unlock-main-slider');
            var myCarousel = Self;
            var singleItem = '.banner-slide';
            var nextBtn = $('.banner-carousel-btn .left-btn');
            var prevBtn = $('.banner-carousel-btn .right-btn');
            var textCountWrap = $('.carousel-number-count');

            // dynamic count for carousel
            myCarousel.on('initialize.owl.carousel changed.owl.carousel', function(e) {
              var idx = e.item.index;
              var carouselCount = e.item.count;

              if (!e.namespace) {
                return;
              }
              var carousel = e.relatedTarget;
              var text =  '<span class="current-number">'+ '0' + ( carousel.relative(carousel.current()) + 1 ) +'</span>' +  '<span class="sep">/</span>' + '<span class="counted-number">'+ '0'+carousel.items().length +'</span>';
              textCountWrap.html(text);
            }).owlCarousel({
              active: ud_data_Active,
              center: ud_data_center,
              dots: ud_data_Dots,
              items: ud_data_Items,
              loop: ud_data_Loop,
              margin: ud_data_Margin,
              nav: ud_data_Nav,
              navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
              ],
              rtl: ud_data_RTL,
              singleItem: ud_data_singleItem,
              smartSpeed: ud_data_Smartspeed,
              autoplay: ud_data_Autoplay
            });

            nextBtn.on('click', function() {
              myCarousel.trigger('next.owl.carousel', [300]);
              return false;
            });
            prevBtn.on('click', function() {
              myCarousel.trigger('prev.owl.carousel', [300]);
              return false;
            });

            // making thumbnail to owl dots
            var thumbCount = myCarousel.find('.owl-dot').length;
            for (var i = 0; i < thumbCount; i++) {
              var newIdx = i + 2;
              var itemThumb = myCarousel.find(singleItem).eq(newIdx).data('thumb');
              myCarousel.find('.owl-dot').eq(i).find('span').css('background-image', 'url(' + itemThumb + ')');
            }
          });
        }
        
        if ($(".banner-style-one").length) {
            $('.banner-style-one').each(function () {
                var Self                        = jQuery(this);
                var ud_data_Autoplay            = Self.data('autoplay'); // = true/false
                var ud_data_center              = Self.data('center'); // = true/false
                var ud_data_Dots                = Self.data('dots'); // = true/false
                var ud_data_Active              = Self.data('active'); // = true/false
                var ud_data_Nav                 = Self.data('nav'); // = true/false
                var ud_data_Margin              = Self.data('margin'); // = true/false
                var ud_data_Items               = Self.data('items'); // = true/false
                var ud_data_Loop                = Self.data('loop'); // = true/false
                var ud_data_RTL                 = Self.data('rtl'); // = true/false
                var ud_data_Smartspeed          = Self.data('smartSpeed'); // = Custome Speed like "2000"
                var ud_data_singleItem          = Self.data('singleItem'); // = true/false
                Self.owlCarousel({
                    active: ud_data_Active,
                    animateOut: "slideOutDown",
                    animateIn: "fadeIn",
                    center: ud_data_center,
                    dots: ud_data_Dots,
                    items: ud_data_Items,
                    loop: ud_data_Loop,
                    margin: ud_data_Margin,
                    nav: ud_data_Nav,
                    navText: [
                      '<i class="flaticon-left-arrow"></i>',
                      '<i class="flaticon-right-arrow"></i>'
                    ],
                    rtl: ud_data_RTL,
                    smartSpeed: ud_data_Smartspeed,
                    singleItem: ud_data_singleItem,
                    autoplay: ud_data_Autoplay
                });
                $(".banner-carousel-btn .left-btn").on("click", function() {
                    Self.trigger("next.owl.carousel");
                    return false;
                });
                $(".banner-carousel-btn .right-btn").on("click", function() {
                    Self.trigger("prev.owl.carousel");
                    return false;
                });
            });
        }


        if ($('.home1_slider').length) {
            $('.home1_slider').each(function () {
                // grabbing all values
                var Self                        = jQuery(this);
                var ud_data_Autoplay            = Self.data('autoplay'); // = true/false
                var ud_data_center              = Self.data('center'); // = true/false
                var ud_data_autowidth           = Self.data('autoWidth'); // = true/false
                var ud_data_Hoverpause          = Self.data('autoplayHoverPause'); // = true/false
                var ud_data_Loop                = Self.data('loop'); // = true/false
                var ud_data_Margin              = Self.data('margin'); // = Custome like 10
                var ud_data_Nav                 = Self.data('nav'); // = true/false
                var ud_data_Dots                = Self.data('dots'); // = true/false
                var ud_data_RTL                 = Self.data('rtl'); // = true/false
                var ud_data_Smartspeed          = Self.data('smartSpeed'); // = Custome Speed like "2000"
                var ud_data_singleItem          = Self.data('singleItem'); // = Custome Speed like "2000"
                Self.owlCarousel({
                    autoplay: ud_data_Autoplay,
                    autoHeight: true,
                    autoWidth: ud_data_autowidth,
                    autoplayHoverPause: ud_data_Hoverpause,
                    center: ud_data_center,
                    loop: ud_data_Loop,
                    margin: ud_data_Margin,
                    nav: ud_data_Nav,
                    navText: [
                      '<i class="flaticon-left-arrow"></i>',
                      '<i class="flaticon-right-arrow"></i>'
                    ],
                    dots: ud_data_Dots,
                    rtl: ud_data_RTL,
                    smartSpeed: ud_data_Smartspeed,
                    singleItem: ud_data_singleItem,
                    responsive: {
                        320:{
                            items: 1,
                            center: false
                        },
                        480:{
                            items: 1,
                            center: false
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 1
                        },
                        1200: {
                            items: 1
                        }
                    }
                });
            });
        }
        
        if ($('.one-grid-slider').length) {
            $('.one-grid-slider').each(function () {
                // grabbing all values
                var Self                        = jQuery(this);
                var ud_data_Animation           = Self.data('animateIn'); // = WOw Animatin wise
                var ud_data_Autoplay            = Self.data('autoplay'); // = true/false
                var ud_data_center              = Self.data('center'); // = true/false
                var ud_data_Loop                = Self.data('loop'); // = true/false
                var ud_data_Margin              = Self.data('margin'); // = Custome like 10
                var ud_data_Nav                 = Self.data('nav'); // = true/false
                var ud_data_Dots                = Self.data('dots'); // = true/false
                var ud_data_Hoverpause          = Self.data('autoplayHoverPause'); // = true/false
                var ud_data_autowidth           = Self.data('autoWidth'); // = true/false
                var ud_data_RTL                 = Self.data('rtl'); // = true/false
                var ud_data_Smartspeed          = Self.data('smartspeed'); // = Custome Speed like "2000"
                var ud_data_singleItem          = Self.data('singleItem'); // = true/false
                Self.owlCarousel({
                    animateIn: ud_data_Animation,
                    autoplay: ud_data_Autoplay,
                    autoHeight: true,
                    autoplayHoverPause: ud_data_Hoverpause,
                    autoWidth: ud_data_autowidth,
                    center: ud_data_center,
                    loop: ud_data_Loop,
                    margin: ud_data_Margin,
                    nav: ud_data_Nav,
                    navText: [
                      '<i class="flaticon-left-arrow"></i>',
                      '<i class="flaticon-right-arrow"></i>'
                    ],
                    dots: ud_data_Dots,
                    rtl: ud_data_RTL,
                    smartSpeed: ud_data_Smartspeed,
                    singleItem: ud_data_singleItem,
                    responsive: {
                        320:{
                            items: 1,
                            center: false
                        },
                        480:{
                            items: 1,
                            center: false
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 1
                        },
                        1200: {
                            items: 1
                        }
                    }
                });
            });
        }
        if ($('.two-grid-slider').length) {
            $('.two-grid-slider').each(function () {
                // grabbing all values
                var Self                        = jQuery(this);
                var ud_data_Animation           = Self.data('animateIn'); // = WOw Animatin wise
                var ud_data_Autoplay            = Self.data('autoplay'); // = true/false
                var ud_data_center              = Self.data('center'); // = true/false
                var ud_data_Item                = Self.data('items'); // = 1/2/3/4/5
                var ud_data_Loop                = Self.data('loop'); // = true/false
                var ud_data_Margin              = Self.data('margin'); // = Custome like 10
                var ud_data_Nav                 = Self.data('nav'); // = true/false
                var ud_data_Dots                = Self.data('dots'); // = true/false
                var ud_data_Hoverpause          = Self.data('autoplayHoverPause'); // = true/false
                var ud_data_autowidth           = Self.data('autoWidth'); // = true/false
                var ud_data_RTL                 = Self.data('rtl'); // = true/false
                var ud_data_Smartspeed          = Self.data('smartSpeed'); // = Custome Speed like "2000"
                var ud_data_singleItem          = Self.data('singleItem'); // = true/false
                Self.owlCarousel({
                    animateIn: ud_data_Animation,
                    autoplay: ud_data_Autoplay,
                    autoHeight: true,
                    autoplayHoverPause: ud_data_Hoverpause,
                    autoWidth: ud_data_autowidth,
                    center: ud_data_center,
                    items: ud_data_Item,
                    loop: ud_data_Loop,
                    margin: ud_data_Margin,
                    nav: ud_data_Nav,
                    navText: [
                      '<i class="flaticon-left-arrow"></i>',
                      '<i class="flaticon-right-arrow"></i>'
                    ],
                    dots: ud_data_Dots,
                    rtl: ud_data_RTL,
                    smartSpeed: ud_data_Smartspeed,
                    singleItem: ud_data_singleItem,
                    responsive: {
                        320:{
                            items: 1,
                            center: false
                        },
                        480:{
                            items: 1,
                            center: false
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 2
                        },
                        1200: {
                            items: 2
                        }
                    }
                });
            });
        }
        if ($('.three-grid-slider').length) {
            $('.three-grid-slider').each(function () {
                // grabbing all values
                var Self                        = jQuery(this);
                var ud_data_Animation           = Self.data('animateIn'); // = WOw Animatin wise
                var ud_data_Autoplay            = Self.data('autoplay'); // = true/false
                var ud_data_center              = Self.data('center'); // = true/false
                var ud_data_Item                = Self.data('items'); // = 1/2/3/4/5
                var ud_data_Loop                = Self.data('loop'); // = true/false
                var ud_data_Margin              = Self.data('margin'); // = Custome like 10
                var ud_data_Nav                 = Self.data('nav'); // = true/false
                var ud_data_Dots                = Self.data('dots'); // = true/false
                var ud_data_Hoverpause          = Self.data('autoplayHoverPause'); // = true/false
                var ud_data_autowidth           = Self.data('autoWidth'); // = true/false
                var ud_data_RTL                 = Self.data('rtl'); // = true/false
                var ud_data_Smartspeed          = Self.data('smartSpeed'); // = Custome Speed like "2000"
                var ud_data_singleItem          = Self.data('singleItem'); // = true/false
                Self.owlCarousel({
                    animateIn: ud_data_Animation,
                    autoplay: ud_data_Autoplay,
                    autoHeight: true,
                    autoplayHoverPause: ud_data_Hoverpause,
                    autoWidth: ud_data_autowidth,
                    center: ud_data_center,
                    items: ud_data_Item,
                    loop: ud_data_Loop,
                    margin: ud_data_Margin,
                    nav: ud_data_Nav,
                    navText: [
                      '<i class="flaticon-left-arrow"></i>',
                      '<i class="flaticon-right-arrow"></i>'
                    ],
                    dots: ud_data_Dots,
                    rtl: ud_data_RTL,
                    smartSpeed: ud_data_Smartspeed,
                    singleItem: ud_data_singleItem,
                    responsive: {
                        0: {
                            items: 1,
                            center: false
                        },
                        520:{
                            items:1,
                            center: false
                        },
                        767: {
                            items: 1,
                            center: false
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: 3
                        }
                    }
                });
            });
        }
        if ($('.four-grid-slider').length) {
            $('.four-grid-slider').each(function () {
                // grabbing all values
                var Self                        = jQuery(this);
                var ud_data_Animation           = Self.data('animateIn'); // = WOw Animatin wise
                var ud_data_Autoplay            = Self.data('autoplay'); // = true/false
                var ud_data_center              = Self.data('center'); // = true/false
                var ud_data_Item                = Self.data('items'); // = 1/2/3/4/5
                var ud_data_Loop                = Self.data('loop'); // = true/false
                var ud_data_Margin              = Self.data('margin'); // = Custome like 10
                var ud_data_Nav                 = Self.data('nav'); // = true/false
                var ud_data_Dots                = Self.data('dots'); // = true/false
                var ud_data_Hoverpause          = Self.data('autoplayHoverPause'); // = true/false
                var ud_data_autowidth           = Self.data('autoWidth'); // = true/false
                var ud_data_RTL                 = Self.data('rtl'); // = true/false
                var ud_data_Smartspeed          = Self.data('smartSpeed'); // = Custome Speed like "2000"
                var ud_data_singleItem          = Self.data('singleItem'); // = true/false
                Self.owlCarousel({
                    animateIn: ud_data_Animation,
                    autoplay: ud_data_Autoplay,
                    autoHeight: true,
                    autoplayHoverPause: ud_data_Hoverpause,
                    autoWidth: ud_data_autowidth,
                    center: ud_data_center,
                    items: ud_data_Item,
                    loop: ud_data_Loop,
                    margin: ud_data_Margin,
                    nav: ud_data_Nav,
                    navText: [
                      '<i class="flaticon-left-arrow"></i>',
                      '<i class="flaticon-right-arrow"></i>'
                    ],
                    dots: ud_data_Dots,
                    rtl: ud_data_RTL,
                    smartSpeed: ud_data_Smartspeed,
                    singleItem: ud_data_singleItem,
                    responsive: {
                        0: {
                            items: 1,
                            center: false
                        },
                        480:{
                            items:1,
                            center: false
                        },
                        600: {
                            items: 1,
                            center: false
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: 4
                        }
                    }
                });
            });
        }
        if ($('.five-grid-slider').length) {
            $('.five-grid-slider').each(function () {
                // grabbing all values
                var Self                        = jQuery(this);
                var ud_data_Animation           = Self.data('animateIn'); // = WOw Animatin wise
                var ud_data_Autoplay            = Self.data('autoplay'); // = true/false
                var ud_data_center              = Self.data('center'); // = true/false
                var ud_data_Item                = Self.data('items'); // = 1/2/3/4/5
                var ud_data_Loop                = Self.data('loop'); // = true/false
                var ud_data_Margin              = Self.data('margin'); // = Custome like 10
                var ud_data_Nav                 = Self.data('nav'); // = true/false
                var ud_data_Dots                = Self.data('dots'); // = true/false
                var ud_data_Hoverpause          = Self.data('autoplayHoverPause'); // = true/false
                var ud_data_autowidth           = Self.data('autoWidth'); // = true/false
                var ud_data_RTL                 = Self.data('rtl'); // = true/false
                var ud_data_Smartspeed          = Self.data('smartSpeed'); // = Custome Speed like "2000"
                var ud_data_singleItem          = Self.data('singleItem'); // = true/false
                Self.owlCarousel({
                    animateIn: ud_data_Animation,
                    autoplay: ud_data_Autoplay,
                    autoHeight: true,
                    autoplayHoverPause: ud_data_Hoverpause,
                    autoWidth: ud_data_autowidth,
                    center: ud_data_center,
                    items: ud_data_Item,
                    loop: ud_data_Loop,
                    margin: ud_data_Margin,
                    nav: ud_data_Nav,
                    navText: [
                      '<i class="flaticon-left-arrow"></i>',
                      '<i class="flaticon-right-arrow"></i>'
                    ],
                    dots: ud_data_Dots,
                    rtl: ud_data_RTL,
                    smartSpeed: ud_data_Smartspeed,
                    singleItem: ud_data_singleItem,
                    responsive: {
                        0: {
                            items: 1,
                            center: false
                        },
                        480:{
                            items:1,
                            center: false
                        },
                        600: {
                            items: 1,
                            center: false
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 4
                        },
                        1200: {
                            items: 5
                        }
                    }
                });
            });
        }
    }

/* ======
   When document is ready, do
   ====== */
    $(document).on('ready', function() {
        // add your functions
        navbarScrollfixed();
        scrollToTop();
        wowAnimation();
        flip_Clock();
        twitterFeed();
        UD_OwlDA();
    });
    
/* ======
   When document is loading, do
   ====== */
    // window on Load function
    $(window).on('load', function() {
        // add your functions
        preloaderLoad();
        counterNumber();
    });


})(window.jQuery);