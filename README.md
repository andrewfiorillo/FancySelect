# Fancy Select  

Custom select boxes that retain native functionality.

<a href="http://select.andrewfiorillo.com" target="_blank">View Demo</a>
|
<a href="https://github.com/andrewfiorillo/FancySelect/zipball/master" target="_blank">Download</a>


## Features

- Allow fully custom-styled select elements
- Retain (not recreate) native functionality like tabbing, disabled selects, keyboard control, and native dropdown menu
- Support mobile browsers that handle select interaction differently
- Selects without a width set expand to the width of the longest option (as a standard select would)


## Usage

include fancyselect.css, jquery.js, and fancyselect.js
```html
<link rel="stylesheet" href="css/fancyselect.css" type="text/css" />  
<script type="text/javascript" src="js/jquery.js"></script>  
<script type="text/javascript" src="js/fancyselect.js"></script>  
```

Call fancyselect on the selects you want to style
```JavaScript
$(document).ready(function() {
	$("select").fancyselect();
});
```
disable
```JavaScript
$("select").fancyselect('disable');
// disables a select
```
enable
```JavaScript
$("select").fancyselect('enable');
// enables a disabled select
```
destroy
```JavaScript
$("select").fancyselect('destroy');
// removes and unbinds fancyselect
```


## How it works

The plugin adds a bit of markup around each select:
```html
<span class="fancyselect">
	<span class="arrows"></span>
	<span class="selecttext"></span>
	<select></select>
</span>
```				
					
The select is made transparent and set above the other elements, this way it is still clickable. The styles you see are applied the elements below it. This method also allows mobile browsers to handle selects exactly as the usually would (e.g. dialog in Android or ios picker), which would be an issue if we recreated this bit with other html elements and js, simulating a select box.

There are a few pieces of functionality that are converted to javascript though, for maximum cross-browser compatibility:

- The updating of the visible text (since the select is transparent)
- Focus/blur styles (a class is added/removed to the wrapped element for styling)
- Disabling selects (a class is added/removed to the wrapped element for styling)
