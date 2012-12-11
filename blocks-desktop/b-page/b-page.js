$(function(){

var animationFlag = false;

    $('.slider__button').live('click',function(){
        if(!animationFlag){
            animationFlag = true;
            slides = $('.slider__slide');
            buttons = $('.slider__button, .slider__button_state_active');            
            indexOfSlide = buttons.index($(this));
            
            $('.slider__slide_state_active').css({
                marginLeft: '-40px'
            });
            $('.slider__slide_state_active').removeClass('slider__slide_state_active').addClass('slider__slide').hide();  
            $('.slider__slide').eq(indexOfSlide).animate({
                marginLeft: '40',            
                opacity: 'toggle'                
            }, 350, function(){
               animationFlag = false;
            })
            $('.slider__slide').eq(indexOfSlide).addClass('slider__slide_state_active');
            $('.slider__button_state_active').removeClass('slider__button_state_active').addClass('slider__button');
            $(this).addClass('slider__button_state_active').removeClass('slider__button');
        }       
    })

    $('.slider__button:first').click();  
  
}) 

