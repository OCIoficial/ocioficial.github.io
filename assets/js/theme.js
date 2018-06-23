jQuery(document).ready(function($){

    var jumptopageof = $('#jumptopageof');  
    if (jumptopageof.length) {
        $('body,html').animate({ scrollTop: $(jumptopageof).offset().top  - 0 }, 800);
    }

});
