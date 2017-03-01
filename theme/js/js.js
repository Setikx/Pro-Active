(function ($) {

    $(window).load(function () {
      // changeArrow();
        onClickAroma();
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

    function onClickAroma () {
        var $aroma = $('li.slide-10.slide div.inner div.content div.essence ul li:last-child');
        var $aromaSpeech = $('li.slide-10.slide div.inner div.content div.essence .small-speech');

        $(window).bind('click', function(){
            var $aromaClick = $aroma.onclick();

            if($aromaClick){
                $aromaSpeech.css('visibility', 'visible');
            }else{
                $aromaSpeech.css('visibility', 'hidden');
            }
        });

    }


})(jQuery);

