(function($){
	
	$.fn.fancyselect = function() {

		this.each(function(i,select) {	
			$(select)
				.wrap('<span class="fancyselect" />')
				.before('<span class="arrows" />')
				.before('<span class="selecttext" />')
				.fadeTo(0,0)
				.focus(function() { $(this).parent('span').addClass('focus'); })
				.blur(function() { $(this).parent('span').removeClass('focus'); })
				.on("change keyup", function() { $(this).prev(".selecttext").text($(select).val()); })
				.siblings(".selecttext").text($(select).val());
				
			select.disable = function() {
				$(this).attr("disabled", "disabled");
				$(this).parent().addClass('disabled');
			};
			
			select.enable = function() {
				$(this).removeAttr('disabled');
				$(this).parent().removeClass('disabled');
			};
			
			if ($(select).attr("disabled")) select.disable();
			
		});

	};

})( jQuery );