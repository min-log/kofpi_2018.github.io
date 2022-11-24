/*jquery 시작*/ /*jquery=$,function*/
$(function(){


    /*네비게이션*/
/*    $('.gnb_2').hide();
    $('.gnb_bg').hide();*/

    $('.gnb_1>li').bind('mouseenter focusin',function(){
        $('.gnb_2').stop().animate({height:'555px'},300);
        $('.gnb_bg').stop().animate({height:'555px'},300);
        /*2탭스 효과*/
        $('.gnb_1>li').removeClass('on');
        $(this).addClass('on');
    }).mouseleave(function(){
        $('.gnb_2').stop().animate({height:'0'},300);
        $('.gnb_bg').stop().animate({height:'0'},300);
        /*2탭스 효과*/
        $('.gnb_1>li').removeClass('on');
    });
    
    /*포커스*/
    $('.gnb_1>li').focusout(function(){
        $('.gnb_2').stop().animate({height:'0'},300);
        $('.gnb_bg').stop().animate({height:'0'},300);
        /*2탭스 효과*/
        $('.gnb_1>li').removeClass('on');
    });
    
    
      
 
    
    
});

/*jquery 종료*/ 