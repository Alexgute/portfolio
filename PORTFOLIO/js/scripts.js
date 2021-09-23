$(document).ready(function(){

/****************
 * MENU FUNCTIONS
 ***************/

    $('.menu').click(function(){
        $('.menu').toggleClass('active')
        $('.menu-bar').toggleClass('active')
    });

    $('#about-btn').click(function(){
        $('.about-mask, .profile').css('display', 'block');
    });

    $('.about-mask').click(function(){
        $('.about-mask, .profile').css('display', 'none');
    });

/****************
 * CONTENT FUNCTIONS - INDEX
 ***************/

    $('#qantas-btn').click(function(){
        $('.overlay, #qantas').css('display', 'block');
    
    });

    $('.player-mask').click(function(){
        $('.overlay, #qantas').css('display', 'none');
    });



    $('#rugby-btn').click(function(){
        $('.overlay, #rugby').css('display', 'block');
    
    });

    $('.player-mask').click(function(){
        $('.overlay, #rugby').css('display', 'none');
    });



    $('#doritos-btn').click(function(){
        $('.overlay, #doritos').css('display', 'block');
    
    });

    $('.player-mask').click(function(){
        $('.overlay, #doritos').css('display', 'none');
    });



    $('#cetaphil-btn').click(function(){
        $('.overlay, #cetaphil').css('display', 'block');
    
    });

    $('.player-mask').click(function(){
        $('.overlay, #cetaphil').css('display', 'none');
    });



    $('#smiths-btn').click(function(){
        $('.overlay, #smiths').css('display', 'block');
    
    });

    $('.player-mask').click(function(){
        $('.overlay, #smiths').css('display', 'none');
    });

    /****************
 * CONTENT FUNCTIONS - CONTENT
 ***************/

$('#vskills-btn').click(function(){
    $('.overlay, #vskills').css('display', 'block');

});

$('.player-mask').click(function(){
    $('.overlay, #vskills').css('display', 'none');
});



$('#hellofresh-btn').click(function(){
    $('.overlay, #hellofresh').css('display', 'block');

});

$('.player-mask').click(function(){
    $('.overlay, #hellofresh').css('display', 'none');
});



$('#jalbg-btn').click(function(){
    $('.overlay, #jalbg').css('display', 'block');

});

$('.player-mask').click(function(){
    $('.overlay, #jalbg').css('display', 'none');
});



$('#noquarter-btn').click(function(){
    $('.overlay, #noquarter').css('display', 'block');

});

$('.player-mask').click(function(){
    $('.overlay, #noquarter').css('display', 'none');
});



$('#crossingpaths-btn').click(function(){
    $('.overlay, #crossingpaths').css('display', 'block');

});

$('.player-mask').click(function(){
    $('.overlay, #crossingpaths').css('display', 'none');
});
});
/*******
 * end document ready
 *****/