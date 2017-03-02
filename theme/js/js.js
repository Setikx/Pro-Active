(function ($) {
    speechVisible();
    speechCrossClose();
    redTextAnimcount();
    h2oAppear();
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


    function h2oAppear() {
        $(document).ready(function(){
            var $h2o_1 = $('body > div > div > ul.slides > li.slide-12 > div > div.content > div > img.h2o_1');
           var $h2o_2 = $('body > div > div > ul.slides > li.slide-12 > div > div.content > div > img.h2o_2');
            var $h2o_3 = $('body > div > div > ul.slides > li.slide-12 > div > div.content > div > img.h2o_3');
            var $hho = $('body > div > div > ul.slides > li.slide-12 > div > div.content > div > img.hho');
            var $economyBtn = $('body > div > div > ul.slides > li.slide-12 > div > div.footer > a');

            $economyBtn.on('click', function(e){
                e.preventDefault();

                $('.h2o-atom').addClass('appear');

                setTimeout(function(){
                    $('.h2o-atom').removeClass('appear');
                    $('.red-atoms').addClass('hideelem');
                    $('.hho').addClass('appear');
                },5000);

                //$h2o_1.addClass("h2o-disappear");
                //
                //
                //$h2o_2.addClass("h2o_2-appear");
                //$h2o_2.addClass("h2o-disappear");
                //
                //
                //$h2o_3.addClass("h2o_3-appear");
                //$h2o_3.addClass("h2o-disappear");
                //
                //
                //$hho.addClass("hho-appear");


            });
        });

    }


})(jQuery);

