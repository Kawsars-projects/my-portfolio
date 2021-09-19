$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");

        }

        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    })

    // typing animation
    var typed = new Typed('.typing', {
        strings: ["Freelancer.", "Web designer.", "web developer.", "Graphic desiger."],
        typeSpeed: 100,
        startDelay: 200,
        backSpeed: 60,
        loop: true,
        backDelay: 500

    });

    var typed = new Typed('.typing-2', {
        strings: ["Freelancer.", "Web designer.", "web developer.", "Graphic desiger."],
        typeSpeed: 100,
        startDely: 40,
        backSpeed: 60,
        loop: true,
        backDely: 40
    });

    // scroll top
    $(".scroll-up-btn").click(function() {
        $("html").animate({ scrollTop: 0 });
    });


    // toggle mennu bar
    $(".menu-bar").click(function() {
        $(".navbar .menu").toggleClass("active");
        $(".menu-bar i").toggleClass("active");
    })

    // carousel script

    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });


});