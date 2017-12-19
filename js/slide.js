$(function(){
	$('.img_reel a').each(function(){
		
	})
	
//	var playSlider=setInterval(showSlide,2000)
	$('.img_reel a').hover(function(){
		clearInterval(playSlider);
	},function(){
		playSlider=setInterval(showSlide,2000)
	})
	$('.next').on('click',function(){
		clearInterval(playSlider);
		showSlide();
		playSlider=setInterval(showSlide,2000)
	})
	$('.prev').on('click',function(){
		clearInterval(playSlider);
		var img_a=$('.img_reel a');
		img_a.removeClass('slide_active');
		img_a.eq(2).stop().fadeOut(500);
		img_a.eq(0).appendTo($('.img_reel')).stop().show(500).addClass('slide_active');
		img_a.eq(2).stop().show(500);
		playSlider=setInterval(showSlide,2000)
	})
	
	$('.page_dot .dots').each(function(index,element){
		$('.page_dot .dots')[index].onclick=function(){
			clearInterval(playSlider);
			$('.page_dot .dots').removeClass('dot_active');
			$(this).addClass('dot_active');
		}
	})
	function showSlide(){
		var img_a=$('.img_reel a');
		img_a.removeClass('slide_active');
		img_a.eq(2).prev().addClass('slide_active');
		img_a.eq(2).stop().fadeOut(500);
		img_a.eq(2).prependTo($('.img_reel')).stop().show(500);
	}
})
