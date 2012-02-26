$.fn.fancyselect = function() {
    this.each(function(i,select){
        $(select).wrap('<span class="fancyselect" />');
        $(select).before('<span class="arrows" />');
        $(select).focus(function(){
            $(this).parent('span').addClass('focus');
        });
        $(select).blur(function(){
            $(this).parent('span').removeClass('focus');
        });
    });
};