
$('#navbar a, .btn').on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			const hash = this.hash;
			$('html,body').animate(
				{
					scrollTop: $(hash).offset().top - 80
				},
				800
			);
		}
	});

	const responsive = {
		0: {
			items: 1
		},
	
		320: {
			items: 1
		},
		560: {
			items: 2
		},
		960: {
			items: 3
		}
	};
	// owl carousel for blog
	$('.owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		dots: false,
		nav: true,
		navText: [ $('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next') ],
		responsive: responsive
	});

	

	// Animation on scroll AOS Instance
	AOS.init();
