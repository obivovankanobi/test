$(function(){
    var slides = $('.slider');    
    var buttons = $('.slider__button, .slider__button_state_active');  
    var indexOfSlide,topOffset,animationFlag = false, anwrs=[
    'Матюха Владимир Петрович.',
    '1990.',
    'Ялта.',
    'Ялтинский филиал Европейского университета, информационных систем и тахнологий, информационные управляющие системы и технологии, программист-инженер.',
    '2013.',
    'Могу кое-как переписываться, читать документацию.',
    'Прежде всего прокачать знания, заполнить пробелы и освоить что-то новое.',
    'Узнал от друзей.',
    'По возможности всё.',
    'Занимался разработкой и поддержкой сайтов на WP, так же аутсорсил для яндекса (пару мелких промо сайтов), ещё немного участвовал в разработке десктопного сервиса Яндекс.Такси(фиксил баги вёрстки). Ну и само собой всякие сайты для курсовых и дипломной работы.',
    'Wordpress API, javascript(jquery), ajax, немного xml и xsl, php(обычно процедурный подход, но обучался и ООП), для разработки дипломной работы использовал twitter bootstrap и api Яндекс.Карт( приложение забирает с изображения exif данные и создаёт отметку на карте, где было сделано фото), bem( bemjson, самую малость bemhtml).',
    'Начинал с Dreamveawer, потом notepad ++, phpstorm/webstorm, в настоящее время sublime text 2(лёгкий, плагины, модный, молодёжный).',
    'Windows Xp/7/8, минимально с mac и ubuntu. Windows как нестранно для работы так как на убунту нету фотошопа, а на mac не насобирал ещё.',
    'Только с Git.',
    'Mantis, Мегаплан, Jira.',
    '<ol class="menu-list"><li class="menu-list__item"><a class="link" href="http://css-tricks.com">css-tricks.com</a></li><li class="menu-list__item"><a class="link" href="http://www.smashingmagazine.com/">smashingmagazine.com</a></li><li class="menu-list__item"><a class="link" href="http://htmlbook.ru/">htmlbook.ru</a></li><li class="menu-list__item"><a class="link" href="http://caniuse.com/">caniuse.com</a></li></ol>',
    'В студии tadatuta. Вёрстка, js, разработка тем для wordpress и поддержка существующих сайтов. Есть опыт разработки в команде.'];

   $('.slider__button').live('click',function(){      
        if(!animationFlag){
    
            animationFlag = true;
            
                      
            indexOfSlide = buttons.index($(this));
            
            var that = $(this).offset();
            topOffset = that.top;
            
            if ( indexOfSlide == buttons.length-1 || indexOfSlide == buttons.length-2 ){
                topOffset = topOffset - 60;                 
            }           
            
            $('.slider').css({
                marginLeft: '-40px'
            });

            $('.slider').hide().html(anwrs[indexOfSlide]).animate({
                marginLeft: '40',
                marginTop: topOffset,                      
                opacity: 'toggle'                
            }, 300, function(){
               animationFlag = false;               
            });            
            $('.slider__button_state_active').removeClass('slider__button_state_active').addClass('slider__button');
            $(this).addClass('slider__button_state_active').removeClass('slider__button');
        }       
    })
    $('.slider__button:first').click();

    $(window).resize(function (event) {
        var currentButtonTopOffset = $('.slider__button_state_active').offset().top;
        console.log(currentButtonTopOffset);

        if ( indexOfSlide == buttons.length-1 || indexOfSlide == buttons.length-2 ){
                currentButtonTopOffset = currentButtonTopOffset - 60;                 
        }  

        $('.slider').css({
            marginTop: currentButtonTopOffset
        })

    }); 

}) 

