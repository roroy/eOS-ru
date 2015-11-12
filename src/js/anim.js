$( document ).ready(function() {	
	$('.header__video--watch').click(function() {
	  $('header, .header__navigation, .header-info>h1, .header-info>p, .header-info>.btn-download, .header__video--watch').addClass('active-video');
		return false;
	});
	$('.header__video--watch').click(function() {
		setTimeout(function () {
			$('.header__youtube').addClass('active-video');
		}, 1300)
	});

	$('.header__video--close').click(function() {
	  $('header, .header__youtube, .header__navigation, .header-info>h1, .header-info>p, .header-info>.btn-download, .header__video--watch').removeClass('active-video');    
	})
});
