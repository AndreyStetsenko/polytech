
$(document).ready(function(){
	$('.dropdown-menu > li > .dropdown-menu').parent().addClass('dropdown-submenu').find(' > .dropdown-item').attr('href', 'javascript:;').addClass('dropdown-toggle');
	$('.dropdown-submenu > a').on("click", function(e) {
	var dropdown = $(this).parent().find(' > .show');
		$('.dropdown-submenu .dropdown-menu').not(dropdown).removeClass('show');
		$(this).next('.dropdown-menu').toggleClass('show');
		e.stopPropagation();
	});
	$('.dropdown').on("hidden.bs.dropdown", function() {
		$('.dropdown-menu.show').removeClass('show');
	});
});


$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
});


$('.owl-prime').owlCarousel({
		items:3,
		loop:true,
		autoplay:true,
		autoplayTimeout:3000,
		nav: true,
		center:true,
		margin:10,
		URLhashListener:true,
		autoplayHoverPause:true,
		startPosition: 'URLHash',
    responsive:{
      600:{
          items:1
      },
      1000:{
          items:3
      }
    },
		navText: [
			'<i class="owl-nav-icon fas fa-chevron-left"></i>',
			'<i class="owl-nav-icon fas fa-chevron-right"></i>'
		]
})

$(window).resize(function() {
  if(document.documentElement.clientWidth < 992) {
		$('.owl-prime-tabs').owlCarousel({
				items:5,
				loop:true,
				autoplay:true,
				autoplayTimeout:3000,
				nav: true,
				center:true,
				margin:10,
				URLhashListener:true,
				autoplayHoverPause:true,
				startPosition: 'URLHash',
		    responsive:{
					0:{
							items:1
					},
					600:{
							items:1
					},
					1000:{
							items:5
					}
		    },
				navText: [
					'<i class="owl-nav-icon fas fa-chevron-left"></i>',
					'<i class="owl-nav-icon fas fa-chevron-right"></i>'
				]
		})
  }
  else {
     if(document.documentElement.clientWidth > 992) {
			 $('.owl-prime-tabs').owlCarousel({
					 items:5,
					 loop:true,
					 autoplay:true,
					 autoplayTimeout:3000,
					 nav: true,
					 center:true,
					 margin:10,
					 URLhashListener:true,
					 autoplayHoverPause:true,
					 startPosition: 'URLHash',
					 responsive:{
						 0:{
								 items:1
						 },
						 600:{
								 items:1
						 },
						 1000:{
								 items:5
						 }
					 },
					 navText: [
						 '<i class="owl-nav-icon fas fa-chevron-left"></i>',
						 '<i class="owl-nav-icon fas fa-chevron-right"></i>'
					 ]
			 })
     }
  }
});


	$('.nav-method .nav-item').click(function() {
		$('.nav-method .nav-item').removeClass("active");
		$(this).addClass("active");
	});


	$('#left').click(function(){
	    $('.fl-table-tbody tr').css("transform","translateX(10%)");

	})
	$('#right').click(function(){
	    $('.fl-table-tbody tr').css("transform","translateX(-10%)");

	})

	$('.form-dop').click(function() {
		$('.form-group-dop').slideToggle();
		$(this).toggle();
	})
