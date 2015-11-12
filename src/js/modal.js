    var overlay = $('.slider__modal--overlay'); 
    var open_modal = $('.slider__modal--open'); 
    var close = $('.slider__modal--close, .slider__modal--overlay'); 
    var modal = $('.modal__images'); 

     open_modal.click( function(event){ 
         event.preventDefault(); 
         var div = $(this).attr('href'); 
         overlay.fadeIn(400, 
             function(){ 
                 $(div) 
                     .css('display', 'block') 
                     .animate({opacity: '1'}, 200); 
         });
     });

     close.click( function(event){
        event.preventDefault(); 
            modal.animate({opacity: '0'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); 
                 }
             );
     });