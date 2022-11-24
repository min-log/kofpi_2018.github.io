

$(function(){
/*slick 슬라이드 ex-9부터 사용가능*/   
    /*메인슬라이드*/
/*   
    var mainSlider;
    mainSlider = $('.visaul_box').slick({
            dots:true,
            appendDots:'.visual .built',
            arrows:true,
            infinite:true,
            slidesToShow:1,
            slidesToScroll:1,
            autoplay: true,
            autoplaySpeed: 4000,
            speed:300,
            prevArrow:'.visual .prev',
            nextArrow:'.visual .next'
    });
*/        
    /*book 슬라이드*/
/*   
    var bookSlider;
    bookSlider = $('.book_list_box').slick({
        dots:false,
            infinite:true,
            slidesToShow:3,
            slidesToScroll:1,
            speed:300,
            prevArrow:'.book .prev',
            nextArrow:'.book .next'
    });
*/
    /*hot 슬라이드*/
/*    
    var hotSlider;
    hotSlider = $('.hot_box').slick({
        dots:false,
        infinite:true,
        slidesToShow:6,
        slidesToScroll:1,
        speed:300,
        centerMode:true,
        variableWidth:true,
        prevArrow:'.sect05_top .prev',
        nextArrow:'.sect05_top .next'
    });
*/

    /*메인슬라이드*/
    var majorSlider = $('.visaul_box').bxSlider({
		auto: true,
		pager: true,
        moveSlides: 1,
        autoControls: false,
        infiniteLoop: true,
		prevSelector: '.visual .prev',  
		nextSelector: '.visual .next',  
        pagerSelector: '.visual .built_box .built',
		startText: '메인배너 자동넘김 시작', 
		stopText: '메인배너 자동넘김 정지',        
		preloadImages: 'all',      
		onSliderLoad: function(currentIndex){
		    var itemSize = $('.visaul_box div').not('.bx-clone').length;
		   /*	 var autoControlsPosition = itemSize * 31;
	    if( itemSize > 1 ) {
	        $('.visual_pause_play').css('marginLeft', '-'+(autoControlsPosition+30)+'px');
	    } else {
	        $('.visual_pause_play').hide();
	        $('.visual_pager').hide();    
	    }*/
		    $('.visaul_box').find('.bx-clone a').attr('tabindex', -1);
		    $('.visaul_box').find('li').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex){
		    $('.majorSlider').find('.bx-clone a').attr('tabindex', -1);
		    $('.majorSlider').find('li').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
		}
	}); 
    
    
    
    /*주요사업*/
    
    var majorSlider1 = $('.book_list_box').bxSlider({
		auto: false,
		autoControls: false,
		pager: false,
		moveSlideQty: 1,
		minSlides: 1, 
		maxSlides: 9,
		slideMargin: 30,  
		moveSlides: 1,
		prevSelector: '.book .prev',  
		nextSelector: '.book .next',  
		startText: '메인배너 자동넘김 시작', 
		stopText: '메인배너 자동넘김 정지',        
		preloadImages: 'all',      
		onSliderLoad: function(currentIndex){
		    var itemSize = $('.book_list_box div').not('.bx-clone').length;
		   /*	 var autoControlsPosition = itemSize * 31;
	    if( itemSize > 1 ) {
	        $('.visual_pause_play').css('marginLeft', '-'+(autoControlsPosition+30)+'px');
	    } else {
	        $('.visual_pause_play').hide();
	        $('.visual_pager').hide();    
	    }*/
            $('.book_list_box').find('.book_list').attr('tabindex', -1);
            $('.book_list_box').find('.book_list').not('.bx-clone').attr('tabindex', 0);
		    $('.book_list_box').find('.bx-clone a').attr('tabindex', -1);
		    $('.book_list_box').find('.book_list').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);
            
            /*book슬라이드 오버&포커스 .on*/
            $('.book_list').bind("mouseenter focusin",function(){
                $('.book_list').removeClass('on');
                $(this).addClass('on');
            }).mouseleave(function(){
                $('.book_list').removeClass('on');
            });
            /*더보기에서 나왔을때 focusout*/
            $('.book_list>a.book_link').focusout(function(){
                 $('.book_list').removeClass('on');
            });
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex){
            $('.book_list_box').find('.book_list').attr('tabindex', -1);
            $('.book_list_box').find('.book_list').not('.bx-clone').attr('tabindex', 0);
		    $('.book_list_box').find('.bx-clone a').attr('tabindex', -1);
		    $('.book_list_box').find('.book_list').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
		}
	}); 
    
    
    /*hot_box 임업서비스*/
    
    var majorSlider2 = $('.hot_box').bxSlider({
		auto: false,
		autoControls: false,
		pager: false,
		moveSlideQty: 1,
		minSlides: 1, 
		maxSlides: 9,
		//slideMargin: 5,  
		moveSlides: 1,
		prevSelector: '.sect05_top .prev',  
		nextSelector: '.sect05_top .next',  
        /*pagerSelector: '.visual .built_box .built',*/
		startText: '메인배너 자동넘김 시작', 
		stopText: '메인배너 자동넘김 정지',        
		preloadImages: 'all',      
		onSliderLoad: function(currentIndex){
		    var itemSize = $('.hot_box div').not('.bx-clone').length;
		   /*	 var autoControlsPosition = itemSize * 31;
	    if( itemSize > 1 ) {
	        $('.visual_pause_play').css('marginLeft', '-'+(autoControlsPosition+30)+'px');
	    } else {
	        $('.visual_pause_play').hide();
	        $('.visual_pager').hide();    
	    }*/
		    $('.hot_box').find('.bx-clone a').attr('tabindex', -1);
		    $('.hot_box').find('li').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);
            
            /*hot 슬라이드 오버&포커스 .on*/
            $('.hot_list').bind("mouseenter focusin", function(){
                $('.hot_list').removeClass('on');
                $(this).addClass('on');
            }).bind("mouseleave focusout", function(){
                 $('.hot_list').removeClass('on');
            });
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex){
		    $('.hot_box').find('.bx-clone a').attr('tabindex', -1);
		    $('.hot_box').find('li').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
		}
	});
    
    
    
    /*--------------------------------------------------*/


    /*탭클릭*/

    $('.tap_box>div>ul>li>a').bind("click",function(e){
        var target = $(e.currentTarget);
        cusMouseenterEvent(target);
    });
    
    function cusMouseenterEvent(e) {
		e.parent().siblings().removeClass('tap_on');
		e.parent().addClass('tap_on');
	}
	function cusMouseleaveEvent(e) {
		e.parent().removeClass('tap_on');
	}
    
    
    /*sect03_tap 탭 클릭*/
    $('.sect03_tap>ul>li>a').bind("click",function(e){
        var target = $(e.currentTarget);
        cusMouseenterEvent(target);
    });
    
      

    
    /* 팝업존 */
    var popupSlider = $('.popupSlider').bxSlider({
        auto: true,
        autoControls: true,
        moveSlides: 1,
        pause: 7000,
        pager: false,
        displaySlideQty: 1, 
        moveSlideQty: 1, 
        //minSlides: 1,  
        //maxSlides: 12,
        //slideMargin: 18,
        //autoControlsSelector:'.popup_pause_play',
        moveSlides: 1,	 	 	   
        prevSelector: '.popup_control',  
        nextSelector: '.popup_control',    
        startText: '메인배너 자동넘김 시작', 
        stopText: '메인배너 자동넘김 정지',
        preloadImages: 'all',      
        onSliderLoad: function(currentIndex){
            var itemSize = $('.popupSlider li').not('.bx-clone').length;
            $('.popupSlider').find('a').attr('tabindex', -1);
            $('.popupSlider').find('li').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);
        },
        onSlideBefore: function($slideElement, oldIndex, newIndex){
            $('.popupSlider').find('a').attr('tabindex', -1);
            $('.popupSlider').find('li').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
        }
    }); 
    
    /* 팝업존 재생 정지버튼 */
    $(".popZone .bx-controls-auto .bx-controls-auto-item a").click(function(){
        $(".popZone .bx-controls-auto .bx-controls-auto-item a").parent().removeClass('on');
        $(this).parent().siblings().addClass('on');
        if($(this).hasClass("bx-start")){
           popupSlider.startAuto();
        }
        else{
           popupSlider.stopAuto();
        }
    });
    
    
   
    /*메인퀵메뉴-------------------*/
    var c=0 //각 콘텐츠 순서번호
    $('.pullpage_scroll ul li').eq(c).addClass('on'); /*블릿버튼 처음스타일*/
    
    /*버튼 클릭*/
    $('.pullpage_scroll ul li').click(function(){
        c = $(this).index(); /*클릭한 li가 몇번째인지 알려주기*/
        var h_top = $('.content>div').eq(c).offset().top;
        /*화면 기준 높이 구하기(.offset()) top-50은 패딩 주었던것 빼주기 */

        if($(this).index()==0){
            h_top=0;
        }


        /*화면 이동을 하려면 스크롤바를 위에서 구한 높이로 바꿔주기*/
        $('html, body').animate({
            scrollTop : h_top 
        },800);         
    });
    
    /*높이에 따른 탭*/
    var offset =700;

    /*윈도우 창, 스크롤이 이동할때마다 검사를 하게*/
    $(window).scroll(function(){
        var st = $(this).scrollTop(); /*창의 이동값*/
        if(st<offset){
            $('.pullpage_scroll ul').addClass('color').fadeIn(800);/*시간0.5*/

        }else{
             $('.pullpage_scroll ul').removeClass('color').fadeIn(800);/*시간0.5*/
        }
        
        /*블릿버튼 스타일*/
        $('.content> div').each(function(){
            /*스크롤의 높이*/
            var i = $(this).index();

            if($(this).offset().top-246<=st){
                /*블릿버튼*/
                $('.pullpage_scroll ul li').removeClass('on');
                $('.pullpage_scroll ul li').eq(i).addClass('on');     
            }
        });
    });//scroll버튼 보여주기 끝
    
    /*메인슬라이드영역 마우스 이미지 스크롤 스윙*/
    function swing() {
        $('.scroll>ul>li>p>span').animate({'top':'7px'},700).animate({'top':'26px'},700, swing); /*$('.scroll>ul>li>p').animate({'bottom':'-15px'},600).animate({'bottom':'-20spx'},600, swing);*/
    }
    swing();
    
     /*메인퀵메뉴 화면 사이즈에 따른 조정*/
    var quick_on; // mb0,pc1
    
    $(window).width(function(){
            if($(this).width()<=1500){
               $('.pullpage_scroll').css('display','none');
                quick_on = 0 ;
                
            }else if($(this).width()>1500){
                $('.pullpage_scroll').css('display','block');
                quick_on = 1 ;
            }
      });

    $(window).resize(function(){
        
            if($(this).width()<=1500 && quick_on == 1){
               $('.pullpage_scroll').css('display','none');
                quick_on = 0 ;
            }else if($(this).width()>1500 && quick_on == 0){
                $('.pullpage_scroll').css('display','block');
                quick_on = 1 ;
            }
      });

    /*컨텐츠 이동*/
   /* var next_sect = $('.content>div').eq(1).offset().top; //두번째 컨텐츠
    $('.scroll>ul>li>a').click(function(){
            $('html, body').animate({
                scrollTop: next_sect
            },800);
            return false;
    });*/
    
    
    /*탭인덱스*/
    $('.tab_idx').attr('tabindex','0');
   
    
    /* 하단 퀵 슬라이드 스크립트 */
    var quickSlider = "";
    $(function(){
        quickSlider = $('.quickSlider').bxSlider({
            auto: true,
            autoControls: true,
            pause: 7000,	
            pager: false,  
            displaySlideQty: 9,
            moveSlideQty: 1,
            minSlides: 1,
            maxSlides: 9,  
            moveSlides: 1,
            autoControlsSelector:'.quick_pause_play',	 	     
            prevSelector: '.quick_control',  
            nextSelector: '.quick_control',    
            startText: '메인배너 자동넘김 시작', 
            stopText: '메인배너 자동넘김 정지',         
            preloadImages: 'all',        
            onSliderLoad: function(currentIndex){
                var itemSize = $('.quickSlider li').not('.bx-clone').length;
                $('.quickSlider').find('.bx-clone a').attr('tabindex', -1);
                $('.quickSlider').find('li').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);
            },
            onSlideBefore: function($slideElement, oldIndex, newIndex){
                $('.quickSlider').find('.bx-clone a').attr('tabindex', -1);
                $('.quickSlider').find('li').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
            }
        }); 
        $( ".quickSlider li" ).keyup(function() {

            var currentNum = $(this).index();
        //console.log(currentNum);
            quickSlider.goToSlide(currentNum)

        });
        sliderTemp = false;
        $('body').keydown(function() {

            if(!sliderTemp){
            //quickSlider.destroySlider()
            quickSlider.reloadSlider({
                auto: true,
                autoControls: true,
                pause: 7000,	
                pager: false,  
                displaySlideQty: 9,
                moveSlideQty: 1,
                minSlides: 1,
                maxSlides: 9,  
                moveSlides: 1,
                autoControlsSelector:'.quick_pause_play',	 	     
                prevSelector: '.quick_control',  
                nextSelector: '.quick_control',    
                startText: '메인배너 자동넘김 시작', 
                stopText: '메인배너 자동넘김 정지',         
                preloadImages: 'all',        
                onSliderLoad: function(currentIndex){
                    var itemSize = $('.quickSlider li').not('.bx-clone').length;
                    $('.quickSlider').find('.bx-clone a').attr('tabindex', -1);
                    $('.quickSlider').find('li').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);
                },
                onSlideBefore: function($slideElement, oldIndex, newIndex){
                    $('.quickSlider').find('.bx-clone a').attr('tabindex', -1);
                    $('.quickSlider').find('li').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
                }
            });

            quickSlider.goToSlide(0)
            sliderTemp = true;
            }

        });

        /* 퀵슬라이드 재생 정지버튼 */
        $(".quick .quick_pause_play .bx-controls-auto-item a").click(function(){
            if($(this).hasClass("bx-start")){
               popupSlider.startAuto();
            }
            else{
               popupSlider.stopAuto();
            }
        });
    });
    
    
    
   

});


