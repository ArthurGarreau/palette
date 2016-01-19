# README

Palette is a little script that allow you to dynamically build a color palette in any HTML page.

## How to use it ?

To start using palette, you just need to :

### Add the links to your HTML page

style.css

	<link rel="stylesheet" type="text/css" href="./style.css">

palette.js

	<script src="./palette.js"></script>

### Write a little script

Palette is a javascript class, in order to use it you need to create an instance :

	var palette = new Palette();

Now you can add the colors you want, using the method

	palette.addColor(color,name)

Where :

* `color` is a string corresponding to the value of the color (ex : `"rgb(23,34,45)"`, `"red"`)
* `name` is the name associated with the color, `name` is optionnal and, if it is not defined `color` will be used

example :

	palette.addColor("rgb(24,34,245)","blue");

Finally, you can insert it into any element (`parent`) in the document using :

	palette.prototype.appendTo(parent)

Note that parent is a DOM object.

### On click

You can manage the way react Palette when the user click on a color. You only have to implement the following method :

	Palette.prototype.click = function(color,name) {
		// your code here
	};

### Dimension of the boxes

You can modify the size of the boxes by modifying the value of :

	this.dim = 100;

## Demo

For more information, just look at the demo `palette.html` (or the code).
