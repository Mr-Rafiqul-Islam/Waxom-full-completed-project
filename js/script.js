//  Sticky Header  
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
        
    if(scrolling > 600){
            $('.navbar').addClass('sticky_header');
    }
        else {
             $('.navbar').removeClass('sticky_header');
    }
    });  