#Fancy Select  

Custom select boxes that retain native functionality. Very much a work in progress.  

<a href="http://www.stuffmadeofthings.com/fancyselect/" target="_blank">View Demo &rarr;</a>


##Premise

- Allow full custom-styled select elements, primarily through CSS
- Minimal additional markup
- Minimal js needed
- Retain (not recreate) native functionality like tabbing, keyboard control, and native dropdown menu
- Degrade gracefully for browsers that don't support (IE6 and IE7)


##Usage

include fancyselect.css, jquery.js, and fancyselect.js:

```html
<link rel="stylesheet" href="css/fancyselect.css" type="text/css" />  
<script type="text/javascript" src="js/jquery.js"></script>  
<script type="text/javascript" src="js/fancyselect.js"></script>  
```

Call fancyselect on the selects you want to style:

```JavaScript
$(document).ready(function() {
	$("#wrapper select").fancyselect();
});
```


##Still to do
- Cross-browser fixes
- Smarter plugin implementation
- Testing, testing testing 

