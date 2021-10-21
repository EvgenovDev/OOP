'use strict'

const DomElement = function(nameClass, height, width, bg, fontSize, margin1, margin2) {
	this.selector = nameClass,
	this.height = height,
	this.width = width,
	this.bg = bg,
	this.fontSize = fontSize,
	this.marginFirstLine = margin1,
	this.marginSecondLine = margin2;
};

DomElement.prototype.elementCreate = function () {
	if (this.selector[0] == ".") {
		let div = document.createElement("div");
		div.classList = this.selector.slice(1, this.selector.length);
		div.textContent = "Привет,я твой блок";
		this.writeCssText(div);
		document.body.append(div);
	}
};

DomElement.prototype.writeCssText = function(block) {
	block.style.cssText = 
	"height: " + this.height + "em;" + 
	"width: " + this.width + "vw;" +
	"background: " + this.bg + ";" + 
	"font-size: " + this.fontSize + "px;" + 
	"text-align: center;" +
	"font-style: italic;" + 
	"color: white;" +
	"position: absolute;" +
	"top: " + this.marginFirstLine  + "%;" +
	"left: " + this.marginSecondLine + "%;" +
	"line-height: 5em;" + 
	"border-radius: 10px;" +
	"z-index: 1;" +
	"border: solid red 2px;";
};

document.addEventListener("DOMContentLoaded", function() {
	const gradient ="radial-gradient(circle at 50% 50%, #dba02c 0, #e3942a 8.33%, #e9882a 16.67%, #ee792d 25%, #f16831 33.33%, #f35536 41.67%, #f23c3c 50%, #f01544 58.33%, #ed004d 66.67%, #e80059 75%, #e10066 83.33%, #d90075 91.67%, #ce0085 100%);";
	const div = new DomElement(".div", 5, 50, gradient, 60, 25, 25);
	div.elementCreate();

	const moveFunc = function (e, item) {
		switch (e.key) {
			case "ArrowUp":
				if (parseInt(item.style.top) >= 0) {
					item.style.top = parseInt(item.style.top) - 1 + "%";
					break;
				} else {
					break;
				}
			case "ArrowDown":
				if (parseInt(item.style.top) <= 55) {
					item.style.top = parseInt(item.style.top) + 1 + "%"; 
					break;
				} else {
					break;
				}
			case "ArrowLeft":
				if (parseInt(item.style.left) >= 0) {
					item.style.left = parseInt(item.style.left) - 1 + "%"; 
					break;
				} else {
					break;
				}
			case "ArrowRight":
				if (parseInt(item.style.left) < 50) {
					item.style.left = parseInt(item.style.left) + 1 + "%"; 
					console.log(item.style.left);
					break;
				} else {
					break;
				}
		}
	};
	
	const elemForMove = document.querySelector(".div");

	document.addEventListener("keydown", (event) => {
		moveFunc(event, elemForMove);	
	});
 });