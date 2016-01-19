
function isInt(n) {
   return n % 1 === 0;
}

function Palette()
{
	this.dim = 100;//px
	this.numberColor = 0;
	this.palette = document.createElement("div");
		this.palette.className = "Palette"
		this.palette.style.width = this.dim + "px";
		this.palette.style.height = this.dim + "px";
	this.boxes = [];
}
/**
 * [addColor description]
 * @param {[string]} color [is the value of the color]
 * @param {[string]} name  [is the name associated with the color, optional]
 */
Palette.prototype.addColor = function(color, name) {
//new element
	var box = document.createElement("div");
//a bit of style
	box.style.backgroundColor = color;
	box.style.width = this.dim + "px";
	box.style.height = this.dim + "px";
	box.className = "box_palette hvr-shrink";
//number of boxes + 1
	this.numberColor++;
//a bit of content
	if(typeof name !== "undefined")
		box.innerHTML = "<h3>"+name+"<h3>";
	else
		box.innerHTML = "<h3>"+color+"<h3>";
//a bit of calcul to have a nice display
	var sqrtSize = this.numberColor != 0 ? Math.sqrt(this.numberColor) : 0,
			sqrtSizeFloor = Math.floor(sqrtSize);
	console.log("sqrtSize",sqrtSize);
	if(sqrtSizeFloor != 0 && this.numberColor != 1)
	{
		if(isInt(sqrtSize))
		{
			this.palette.style.width = sqrtSize*this.dim + "px";
			this.palette.style.height = sqrtSize*this.dim + "px";
		}
		else
		{
			console.log("sqrt rééeeeeel", sqrtSizeFloor);
			var nouvNombre = sqrtSizeFloor;
			while(nouvNombre*sqrtSizeFloor<this.numberColor)
			{
				nouvNombre++;
			}
			this.palette.style.width = nouvNombre*this.dim + "px";
			this.palette.style.height = sqrtSizeFloor*this.dim + "px";
		}
	}
	//--------------
	//add event(s)
	var supthis = this;
	box.addEventListener('click',function(){
		supthis.click(color,name);//allow user to implement his own behavior
		console.log("bob");
	},false);
//append to the palette
	this.palette.appendChild(box);
};

Palette.prototype.appendTo = function(parent) {
	parent.appendChild(this.palette);
};
