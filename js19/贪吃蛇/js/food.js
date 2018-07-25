/*
* @Author: yang fangtao
* @Date:   2018-07-19 14:22:50
* @Last Modified by:   famensaodiseng
* @Last Modified time: 2018-07-19 14:49:05
*/
function Food(options) {
	options = options ||{};
	this.x = options.x ||0;
	this.y = options.y ||0;
	this.width = options.width || 20;
	this.height = options.height || 20;
	this.color = options.color ||'green';

	Food.prototype.render  = function(map){
		var div = document.createElement('div');
    	map.appendChild(div);

		elements.push(div);
		div.style.position = position;
		div.style.left = this.x + 'px';
		div.style.top = this.y + 'px';
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.backgroundColor = this.color;
	}
}

var map =document.getElementById('map');
var food = new Food();
food.render(map);






