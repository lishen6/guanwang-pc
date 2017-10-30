$(function(){
	//回到顶部
	$(document).scroll(function(){
		console.log(888888);
		 var top=$(document).scrollTop();  
            if(top<300){  
                $('.gotop').hide();  
            }  
            else{  
                $('.gotop').show();  
            } 
	});
	$('.gotop').on('click',function(){
		$('body,html').animate({scrollTop:0},300); 
	})
	var mySwiper1 = new Swiper ('#swiper-container1', {
		loop: true,
    	pagination : '#pagination1',
    	paginationClickable :true,
//      autoplay: 5000,
        prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next'
    })
	var mySwiper2 = new Swiper ('#swiper-container2', {
		loop: true,
//  	pagination : '#pagination1',
//  	paginationClickable :true,
//      autoplay: 5000,
        prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next'
    })
    
	

})
