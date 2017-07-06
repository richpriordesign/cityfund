$(document).ready(function(){
	
	/*** SLIDE OUT CARD CONTENT ON MOBILE ***/
	$('.time-bullet, .timeline-link').on('click', function(event){
		event.preventDefault();
		$(this).parent().parent().find('.timeline-children').slideToggle("fast");
		console.log('hi there');
	});

	$('.timeline-toggle').on('click', function(event){
		event.preventDefault();
		$(this).closest('div').find('.time-bullet').toggleClass('active-child');
	});



	$('.timeline-toggle-child').on('click', function(event){
		// event.preventDefault();
		$('.time-bullet-child').removeClass('active-child');
		$(this).children().closest('.time-bullet-child').toggleClass('active-child');
	});

	$('.timeline-master-bullet').on('click', function(event){
		event.preventDefault();
		$('.timeline-container').toggleClass('show');
		$('.timeline-module').toggleClass('bullet-show');
		$(this).toggleClass('bullet-bottom')
	});

	$('.time-bullet-child').on('click', function(event){
		event.preventDefault();
		$('.timeline-module').removeClass('bullet-show');
		$('.timeline-container').removeClass('show');

	})

	//1930s
	$('.one937').on('click', function(event){
		event.preventDefault();
		$('.timeline-info-txt').removeClass('show');
		$('.one937-txt').addClass('show');
	});

	$('.one938').on('click', function(event){
		event.preventDefault();
		$('.timeline-info-txt').removeClass('show');
		$('.one938-txt').addClass('show');
	});

	$('.one939').on('click', function(event){
		event.preventDefault();
		$('.timeline-info-txt').removeClass('show');
		$('.one939-txt').addClass('show');
	});

	//1940s

	$('.one940').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one940-txt').addClass('show');
	});

	$('.one941').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one941-txt').addClass('show');
	});

	$('.one942').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one942-txt').addClass('show');
	});


	$('.one943').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one943-txt').addClass('show');
	});


	$('.one944').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one944-txt').addClass('show');
	});

	$('.one945').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one945-txt').addClass('show');
	});

	$('.one946').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one946-txt').addClass('show');
	});

	$('.one947').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one947-txt').addClass('show');
	});

	$('.one948').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one948-txt').addClass('show');
	});

	$('.one949').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one949-txt').addClass('show');
	});

	//1950s

	$('.one950').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one950-txt').addClass('show');
	});

	$('.one951').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one951-txt').addClass('show');
	});

	$('.one952').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one952-txt').addClass('show');
	});

	$('.one953').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one953-txt').addClass('show');
	});

	$('.one954').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one954-txt').addClass('show');
	});

	$('.one955').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one955-txt').addClass('show');
	});

	$('.one956').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one956-txt').addClass('show');
	});

	$('.one957').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one957-txt').addClass('show');
	});

	$('.one958').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one958-txt').addClass('show');
	});

	$('.one959').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one959-txt').addClass('show');
	});

	//1960s
	$('.one960').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one960-txt').addClass('show');
	});

	$('.one961').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one961-txt').addClass('show');
	});

	$('.one962').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one962-txt').addClass('show');
	});

	$('.one963').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one963-txt').addClass('show');
	});

	$('.one964').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one964-txt').addClass('show');
	});

	$('.one965').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one965-txt').addClass('show');
	});

	$('.one966').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one966-txt').addClass('show');
	});

	$('.one967').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one967-txt').addClass('show');
	});

	$('.one968').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one968-txt').addClass('show');
	});

	$('.one969').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one969-txt').addClass('show');
	});

	//1970s
	$('.one970').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one970-txt').addClass('show');
	});

	$('.one971').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one971-txt').addClass('show');
	});

	$('.one972').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one972-txt').addClass('show');
	});

	$('.one973').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one973-txt').addClass('show');
	});

	$('.one974').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one974-txt').addClass('show');
	});

	$('.one975').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one975-txt').addClass('show');
	});

	$('.one976').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one976-txt').addClass('show');
	});

	$('.one977').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one977-txt').addClass('show');
	});

	$('.one978').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one978-txt').addClass('show');
	});

	$('.one979').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one979-txt').addClass('show');
	});

	//1980s
	$('.one980').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one980-txt').addClass('show');
	});

	$('.one981').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one981-txt').addClass('show');
	});

	$('.one982').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one982-txt').addClass('show');
	});

	$('.one983').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one983-txt').addClass('show');
	});

	$('.one984').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one984-txt').addClass('show');
	});

	$('.one985').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one985-txt').addClass('show');
	});

	$('.one986').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one986-txt').addClass('show');
	});

	$('.one987').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one987-txt').addClass('show');
	});

	$('.one988').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one988-txt').addClass('show');
	});

	$('.one989').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one989-txt').addClass('show');
	});



//1990s
	$('.one990').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one990-txt').addClass('show');
	});

	$('.one991').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one991-txt').addClass('show');
	});

	$('.one992').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one992-txt').addClass('show');
	});

	$('.one993').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one993-txt').addClass('show');
	});

	$('.one994').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one994-txt').addClass('show');
	});

	$('.one995').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one995-txt').addClass('show');
	});

	$('.one996').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one996-txt').addClass('show');
	});

	$('.one997').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one997-txt').addClass('show');
	});

	$('.one998').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one998-txt').addClass('show');
	});

	$('.one999').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.one999-txt').addClass('show');
	});


	//2000s
	$('.two000').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two000-txt').addClass('show');
	});

	$('.two001').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two001-txt').addClass('show');
	});

	$('.two002').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two002-txt').addClass('show');
	});

	$('.two003').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two003-txt').addClass('show');
	});

	$('.two004').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two004-txt').addClass('show');
	});

	$('.two005').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two005-txt').addClass('show');
	});

	$('.two006').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two006-txt').addClass('show');
	});

	$('.two007').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two007-txt').addClass('show');
	});

	$('.two008').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two008-txt').addClass('show');
	});

	$('.two009').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two009-txt').addClass('show');
	});

	//2010s
	$('.two010').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two010-txt').addClass('show');
	});

	$('.two011').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two011-txt').addClass('show');
	});

	$('.two012').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two012-txt').addClass('show');
	});

	$('.two013').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two013-txt').addClass('show');
	});

	$('.two014').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two014-txt').addClass('show');
	});

	$('.two015').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two015-txt').addClass('show');
	});

	$('.two016').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two016-txt').addClass('show');
	});

	$('.two017').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two017-txt').addClass('show');
	});

	$('.two018').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two018-txt').addClass('show');
	});

	$('.two019').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two019-txt').addClass('show');
	});

	//2020s
	$('.two020').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two020-txt').addClass('show');
	});

	$('.two021').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two021-txt').addClass('show');
	});

	$('.two022').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two022-txt').addClass('show');
	});

	$('.two023').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two023-txt').addClass('show');
	});

	$('.two024').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two024-txt').addClass('show');
	});

	$('.two025').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two025-txt').addClass('show');
	});

	$('.two026').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two026-txt').addClass('show');
	});

	$('.two027').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two027-txt').addClass('show');
	});

	$('.two028').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two028-txt').addClass('show');
	});

	$('.two029').on('click', function(event){
		
		$('.timeline-info-txt').removeClass('show');
		$('.two029-txt').addClass('show');
	});



});