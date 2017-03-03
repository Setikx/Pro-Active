(function ($) {
    speechVisible();
    speechCrossClose();
    redTextAnimcount();
    h2oAppear();
    redBoxOnScroll();


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
            $('.slide div.small-speech')
                .addClass("small-speech-fadeIn")
                .addClass("animated")
                .removeClass("small-speech-fadeOut");


        });
    });
}

    function speechCrossClose () {
        $(document).ready(function () {
            var $cross = $('body div.wrapper div.flexslider.with-red-arrow ul.slides li.slide div.inner div.content div.essence div.small-speech div.cross');
            $cross.on('click', function () {
                $('.slide div.small-speech')
                    .addClass("small-speech-fadeOut")
                    .addClass("animated")
                    .removeClass("small-speech-fadeIn");

            });
        });
    }

    function redTextAnimcount () {
        $(document).ready(function () {
            var $cross = $('body div.wrapper div.flexslider.with-red-arrow ul.slides li.slide-12 div.inner div.footer p.description strong');
            $cross.on('click', function () {
                $cross
                    .addClass("flashing")
                    .addClass("animated");

            });
        });
    }


    function h2oAppear() {
        $(document).ready(function(){
            var $economyBtn = $('body > div > div > ul.slides > li.slide-12 > div > div.footer > a');

            $economyBtn.on('click', function(e){
                e.preventDefault();

                $('.h2o-atom').addClass('appear');
                $('.hho').removeClass('appear');

                setTimeout(function(){
                    $('.h2o-atom').removeClass('appear');
                    $('.hho').addClass('appear');
                },5000);
            });
        });

    }

function redBoxOnScroll () {
    $(window).ready(function () {
        var $redBox = $('body > div > div > ul.slides > li.slide-1 > div > div > div > div > div.speech-bubble'),
         $btn = $('body > div > div > ul.slides > li.slide-1 > div > div > div > div.scrl-btn');


        $btn.on('click', function(){

            if ($btn.hasClass('scrl-btn_rotate')) {
                    $redBox.scrollTop(0);
                    $btn.removeClass('scrl-btn_rotate');

            }
            else {
                    $redBox.scrollTop(400);
                    $btn.addClass('scrl-btn_rotate');

            }
        });

    });
}



})(jQuery);

