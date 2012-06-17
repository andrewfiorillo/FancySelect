(function($){
	
	var methods = {
		init: function() {
			return this.each(function(i,el) {
				$(el).wrap('<span class="fancyselect" />')
					.before('<span class="arrows" />')
					.before('<span class="selecttext" />')
					.fadeTo(0,0)
					.focus(function() { $(el).parent('span').addClass('focus'); })
					.blur(function() { $(el).parent('span').removeClass('focus'); })
					.on("change keydown keyup", function() { $(el).fancyselect('update'); })
					.fancyselect('update');
				if ($(el).attr("disabled")) $(el).fancyselect('disable');
			});
		},
		destroy: function() {
			return this.each(function(i,el) {
				$(el).siblings('span').remove();
				$(el).unwrap().fadeTo(0,1).unbind('focus blur change keydown keyup');
			});
		},
		enable: function() {
			return this.each(function(i,el) {
				$(el).removeAttr('disabled').parent().removeClass('disabled');
			});
		},
		disable: function() {
			return this.each(function(i,el) {
				$(el).attr("disabled", "disabled").parent().addClass('disabled');
			});
		},
		update: function() {
			return this.each(function(i,el) {
				$(el).prev(".selecttext").text($(el).children('option:selected').text());
			});
		}
	};
	
	$.fn.fancyselect = function(method) {
  		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		}
		else {
			$.error('Method ' + method + ' does not exist for .fancyselect()');
		}
	};

})( jQuery );