$(document).ready(function(){
	VK.Widgets.Group("vkGroupsDesktop", {mode: 3, width: '450'}, 136308348);
	VK.Widgets.Group("vkGroupsTablet", {mode: 3, width: '390'}, 136308348);
	VK.Widgets.Group("vkGroupsMobile", {mode: 3, width: '290'}, 136308348);
/////////////////////////////////////////////////////////////////////////////////
	$('.popup-video').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		/* image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		} */
  	});
/////////////////////////////////////////////////////////////////////////////////
	$('.popup-photo').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		/* image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		} */
  	});
/////////////////////////////////////////////////////////////////////////////////
	$('.popup-example').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		/* image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		} */
  	});
/////////////////////////////////////////////////////////////////////////////////
  $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		/* image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		} */
  });
/////////////////////////////////////////////////////////////////////////////////
$('.popup-gallery-bottom').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
	enabled: true,
	navigateByImgClick: true,
	preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  },
  /* image: {
	tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	titleSrc: function(item) {
	  return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
	}
  } */
});
/////////////////////////////////////////////////////////////////////////////////
  $('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
/////////////////////////////////////////////////////////////////////////////////
  //slider video
  $('.slider-video').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	prevArrow: '.slider-video__button-prev',
	nextArrow: '.slider-video__button-next'
  });

  $(".slider-video").on('afterChange', function(event, slick, currentSlide){
	$("#sliderVideoCount").text(currentSlide + 1);
 });
/////////////////////////////////////////////////////////////////////////////////
  //slider photo
  $('.slider-photo').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	prevArrow: '.slider-photo__button-prev',
	nextArrow: '.slider-photo__button-next'
  });

  $(".slider-photo").on('afterChange', function(event, slick, currentSlide){
	$("#sliderPhotoCount").text(currentSlide + 1);
 });
/////////////////////////////////////////////////////////////////////////////////
	//slider example
	$('.slider-example').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		centerMode: false,
		variableWidth: true,
		prevArrow: '.slider-example__button-prev',
		nextArrow: '.slider-example__button-next'
	  });

	  $(".slider-example").on('afterChange', function(event, slick, currentSlide){
		$("#sliderExampleCount").text(currentSlide + 1);
	 });
/////////////////////////////////////////////////////////////////////////////////
  $('.transition').on('click', function(event) {
	// отменяем стандартное действие
	event.preventDefault();

	var blockToGo = $(this).attr("href"),
		blockPosition = $(blockToGo).offset().top;
	/*
	* blockToGo - в переменную заносим информацию о том, к какому блоку надо перейти
	* blockPosition - определяем положение блока на странице
	*/
	$('html, body').animate({scrollTop: blockPosition}, 700);
	/*
	* 700 скорость перехода в миллисекундах
	*/
  });
  /////////////////////////////////////////////////////////////////////////////////
})
