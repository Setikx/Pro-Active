(function ($) {

    $(window).load(function () {
      // changeArrow();
        });

    function changeArrow() {
        $(".slide-4 .flex-direction-nav a").hasClass(".with-red-arrow");
    }


    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "fade",
            controlNav: false,
            slideshow: false
        });
    });


})(jQuery);

