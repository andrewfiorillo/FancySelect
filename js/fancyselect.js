$.fn.fancyselect = function() {

	var browser = "";
	if ($.browser.webkit) browser = "webkit";

	this.each(function(i,select){		
		$(select).wrap('<span class="fancyselect ' + browser + '" />');
		$(select).before('<span class="arrows" />');
		$(select).focus(function(){ $(this).parent('span').addClass('focus') });
		$(select).blur(function(){ $(this).parent('span').removeClass('focus') });				
		if(browser != "webkit") {
			$(select).fadeTo(0,0).before('<span class="selecttext" />');
			$(select).bind("change keyup", function() { $(this).siblings(".selecttext").text($(select).val()) });
			$(this).siblings(".selecttext").text($(select).val());
		}
	});

};