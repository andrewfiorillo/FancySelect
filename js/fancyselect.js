$.fn.fancyselect = function() {

	var browser = "";
	if($.browser.webkit) browser = "webkit";
	else if ($.browser.mozilla) browser = "mozilla";
	else if ($.browser.msie) browser = "msie";
	else if ($.browser.opera) browser = "opera";

    this.each(function(i,select){		
        $(select).wrap('<span class="fancyselect ' + browser + ' ' + navigator.platform + '" />');
        $(select).before('<span class="arrows" />');
        $(select).focus(function(){
            $(this).parent('span').addClass('focus');
        });
        $(select).blur(function(){
            $(this).parent('span').removeClass('focus');
        });
    });
};