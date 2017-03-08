$(document).ready(function(){
  $('.heroSlider').bxSlider({
		mode: 'fade',
		auto: true,
		controls: false,
		speed: 300,
		easing: 'linear',
		pagerCustom: '.home__hero--dots'
  });
});