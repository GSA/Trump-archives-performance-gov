$(function() {
	// Active isotope with jQuery code:
	if(".main-iso") {
		$('.main-iso').isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows'
		});
		// Isotope click function
		$('.iso-nav ul li').click(function(){
			$('.iso-nav ul li').removeClass('active');
			$(this).addClass('active');

			var selector = $(this).attr('data-filter');
			$('.main-iso').isotope({
				filter: selector
			});
			return false;
		});

		$('.main-iso').on( 'arrangeComplete', function( event, filteredItems ) {
			  //console.log( filteredItems.length );
			  if(filteredItems.height == 0){
				  $(".no-results").show();
			  }else{
				  $(".no-results").hide();
			  }
		});

	}

	//SMOOTH accordion
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
		links.on('keypress', {el: this.el, multiple: this.multiple}, this.dropdown);
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion'), false);
});

//smooth accordion 2//

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link-1');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
		links.on('keypress', {el: this.el, multiple: this.multiple}, this.dropdown);
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu-1').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion-1'), false);
});
