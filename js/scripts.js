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



    $('#lawsons-btn').click(function(){
        $('.overlay, #lawsons').css('display', 'block');
    
    });

    $('.player-mask').click(function(){
        $('.overlay, #lawsons').css('display', 'none');
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



$('#bazaar-btn').click(function(){
    $('.overlay, #bazaar').css('display', 'block');

});

$('.player-mask').click(function(){
    $('.overlay, #bazaar').css('display', 'none');
});



$('#vogue-btn').click(function(){
    $('.overlay, #vogue').css('display', 'block');

});

$('.player-mask').click(function(){
    $('.overlay, #vogue').css('display', 'none');
});



$('#noquarter-btn').click(function(){
    $('.overlay, #noquarter').css('display', 'block');

});

$('.player-mask').click(function(){
    $('.overlay, #noquarter').css('display', 'none');
});



$('#jal-btn').click(function(){
    $('.overlay, #jal').css('display', 'block');

});

$('.player-mask').click(function(){
    $('.overlay, #jal').css('display', 'none');
});
});
/*******
 * end document ready
 *****/