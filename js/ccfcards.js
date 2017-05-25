$(document).ready(function(){
	
	/*** SLIDE OUT CARD CONTENT ON MOBILE ***/
	$('.mobile-icon').on('click', function(event){
		event.preventDefault();
		$(this).parent().parent().find('.card-bottom').slideToggle();
		console.log('hi there');
	});

	/*** HIDE OR SHOW CARD CONTENT ON RESPONSIVE WINDOW RESIZE ***/
	$(window).resize(function() {
		if ($(window).width() < 768){
		  $('.card-bottom').css('display','none'); //Resets card to be hidden if opened on mobile, resized on Desktop and brough back down to mobile
		}else{
			$('.card-bottom').css('display','block'); //Prevents the card content from being invisible if resizing on Dekstop
		}
	});
});



/**** icon-bar:first-of-type{
	transform:rotate(45deg);
}

icon-bar:last-of-type{
	transform:rotate(-45deg);
	top:-10px;
	margin-top:-3px;
	margin-left:0px
}

.icon-bar .middle-bar{
	display:none
}
****/