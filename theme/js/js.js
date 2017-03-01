(function ($) {
    speechVisible();
    speechCrossClose();


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


})(jQuery);

