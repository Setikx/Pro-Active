(function ($) {
    speechVisible();
    speechCrossClose();
    redTextAnimcount();
  //  economyBtn();



    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "fade",
            controlNav: false,
            slideshow: false,
            mousewheel: true

        });
        });


function speechVisible () {
    $(document).ready(function () {
        var $aroma = $('body div.wrapper div.flexslider.with-red-arrow ul.slides li.slide div.inner div.footer p.description strong');
        $aroma.on('click', function () {
            $('.slide div.small-speech').addClass("small-speech-fadeIn");
            $('.slide div.small-speech').addClass("animated");
            $('.slide div.small-speech').removeClass("small-speech-fadeOut");

        });
    });
}

    function speechCrossClose () {
        $(document).ready(function () {
            var $cross = $('body div.wrapper div.flexslider.with-red-arrow ul.slides li.slide div.inner div.content div.essence div.small-speech div.cross');
            $cross.on('click', function () {
                $('.slide div.small-speech').addClass("small-speech-fadeOut");
                $('.slide div.small-speech').addClass("animated");
                $('.slide div.small-speech').removeClass("small-speech-fadeIn");


            });
        });
    }

    function redTextAnimcount () {
        $(document).ready(function () {
            var $cross = $('body div.wrapper div.flexslider.with-red-arrow ul.slides li.slide-12 div.inner div.footer p.description strong');
            $cross.on('click', function () {
                $cross.addClass("flashing");
                $cross.addClass("animated");
            });
        });
    }



})(jQuery);

