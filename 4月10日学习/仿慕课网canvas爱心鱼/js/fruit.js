//果实

var fruitObj = function()
{
	this.alive = [];//bool
	this.x = [];
	this.y = [];
	this.l = [];
	this.aneNo = [];
	this.spd = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
}

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function()
{
	for(var i = 0;i < this.num;i++){
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.aneNo[i] = 0;
		this.spd[i] = Math.random() * 0.017 + 0.003;//[0.003,0,02)
		this.fruitType[i] = "";
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
}

fruitObj.prototype.draw = function()
{
	for(var i = 0;i < this.num;i++){
		//darw
		//find an ane, grow, fly up
		if(this.alive[i]){
			//根据果实颜色类型选择资源图片
			if(this.fruitType[i] == "blue"){
				var pic = this.blue;
			}else{
				var pic = this.orange;
			}
			//控制果实大小变化或者向上漂浮
			if(this.l[i] <= 14){
				var No = this.aneNo[i];
				this.x[i] = ane.headx[No];
				this.y[i] = ane.heady[No];
				this.l[i] += this.spd[i] * deltaTime;
				ctx2.drawImage(pic, this.x[i]-this.l[i]*0.5, this.y[i]-this.l[i]*0.5, this.l[i], this.l[i]);
			}else{
				this.y[i] -= this.spd[i] * 7 * deltaTime;
				ctx2.drawImage(pic, this.x[i]-this.l[i]*0.5, this.y[i]-this.l[i]*0.5, this.l[i], this.l[i]);
			}
			//当果实飘出窗外的时候放回资源池中
			if(this.y[i] < 10){
				this.alive[i] = false;
			}
		}
	}
}

//果实被吃
fruitObj.prototype.dead = function(i)
{
	this.alive[i] = false;
}

//控制果实的出生
fruitObj.prototype.born = function(i)
{
	this.aneNo[i] = Math.floor(Math.random()*ane.num);
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if(ran < 0.13){
		this.fruitType[i] = "blue";
	}else{
		this.fruitType[i] = "orange";
	}
}

function fruitMonitor()
{
	var num = 0;
	for(var i = 0;i < fruit.num;i++){
		if(fruit.alive[i]) num++;
	}
	if(num < 13){
		sendFruit();
		return;
	}
}

function sendFruit()
{
	for(var i = 0;i < fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return ;
		}
	}
}