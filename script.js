'use strict'

const DomElement = function(nameClass, height, width, bg, fontSize) {
	this.selector = nameClass,
	this.height = height,
	this.width = width,
	this.bg = bg,
	this.fontSize = fontSize;
};

DomElement.prototype.elementCreate = function () {
	if (this.selector[0] == ".") {
		let div = document.createElement("div");
		div.classList = this.selector.slice(1, this.selector.length);
		div.textContent = "Привет,я новый блок";
		div.style.cssText = 
		"height: " + this.height + "em;" + 
		"width: " + this.width + "vw;" +
		"background: " + this.bg + ";" + 
		"font-size: " + this.fontSize + "px;" + 
		"text-align: center;" +
		"font-style: italic;" + 
		"color: white;" +
		"position: absolute;" +
		"top: 30%;" +
		"left: 40%;" +
		"line-height: 5em;" + 
		"border-radius: 10px;" +
		"z-index: 1;" +
		"border: solid red 2px;";
		document.body.append(div);

	}	else if (this.selector[0] == "#") {
		let p = document.createElement("p");
		p.id = this.selector.slice(1, this.selector.length);
		p.textContent = "А я новый параграф";
		p.style.cssText = 
		"height: " + this.height + "em;" + 
		"width: " + this.width + "vw;" +
		"background: " + this.bg + ";" + 
		"font-size: " + this.fontSize + "px;" +
		"border-radius: 10px;" +
		"border: solid blue 2px;" +
		"color: white;" +
		"text-align: center;" +
		"line-height: 5em;" +
		"position: absolute;" +
		"top: 5%;" +
		"z-index: 0;" +
		"left: 5%;";
		document.body.append(p);
	}
};

const gradient ="radial-gradient(circle at 50% 50%, #dba02c 0, #e3942a 8.33%, #e9882a 16.67%, #ee792d 25%, #f16831 33.33%, #f35536 41.67%, #f23c3c 50%, #f01544 58.33%, #ed004d 66.67%, #e80059 75%, #e10066 83.33%, #d90075 91.67%, #ce0085 100%);";
const gradient1 = "linear-gradient(90deg, rgba(10,10,159,1) 15%, rgba(97,93,156,1) 50%, rgba(0,212,255,1) 85%);";

const div = new DomElement(".div", 5, 50, gradient, 60);
const p = new DomElement ("#p", 5, 50, gradient1, 36);
div.elementCreate();
p.elementCreate();