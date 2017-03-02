(function ($) {
    speechVisible();
    speechCrossClose();
    redTextAnimcount();
    economyBtn();


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
            $('.slide div.small-speech').css('visibility', 'visible');

        });
    });
}

    function speechCrossClose () {
        $(document).ready(function () {
            var $cross = $('body div.wrapper div.flexslider.with-red-arrow ul.slides li.slide div.inner div.content div.essence div.small-speech div.cross');
            $cross.on('click', function () {
                $('.slide div.small-speech').css('visibility', 'hidden');

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


function economyBtn () {
    $(document).ready(function () {
       var $economy = $('body > div > div > ul.slides > li.slide-6 > div > div.footer');
        $economy.on('click', function () {
           $economy.append('<p class="title">Экономия: <strong>бесценно!</strong></p>');
        });
    });
}




})(jQuery);

