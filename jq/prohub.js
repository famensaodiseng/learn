/*
 * @Author: yang fangtao
 * @Date:   2018-12-03 11:10:40
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-12 15:34:52
 * 
 */

function my$(id) {
	return document.getElementById(id);
}
//处理浏览器兼容
//获取第一个子元素
function getFirstElementChild(element) {
	var node, nodes = element.childNodes.i = 0;
	while (node = nodes[i++]) {
		if (node.nodeType === 1) {
			return node;
		}
	}
	return null;
}
//获取下一个元素。
function getNextElementSibling(element) {
	var el = element;
	while (el = el.nextSibling) {
		if (el.nodeType === 1) {
			return el;
		}
	}
	return null;
}
//设置标签之间的内容，看浏览器是否支持innertext 和textcontent
function setInnerText(element, content) {
	// 判断浏览器是否支持innertext
	if (typeof element.innerText === 'string') {
		element.innetText = content;
	} else {
		element.textContent = content;
	}
}
//处理注册时间的兼容性   //eventName，不带on click mouseover mouseout
function addEventListener(element, eventName, fn) {
	if (element.addEventListener) {
		element.addEventListener(eventName, fn);
	} else if (element.attachEvent) {
		element.attachEvent('on' + eventName, fn);
	} else { //相当于element.onclick = fn;
		element['on' + eventName] = fn;
	}
}
//处理移除事件的兼容性处理。
function removeEventListener(element, eventName, fn) {
	if (element.removeEventListener) {
		element.removeEventListener(eventName, fn);
	} else if (element.detachEvent) {
		element.detachEvent('on' + eventName, fn);
	} else { //相当于element.onclick = fn;
		element['on' + eventName] = null;
	}
}
//获取页面滚动距离的兼容性问题。
function getSroll() {
	var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	return {
		scrollLeft: scrollLeft,
		scrollTop: scrollTop
	}
}
//获取鼠标在页面中的兼容性问题。
function getPage(e) {
	var pageX = e.pageX || e.clientX + getScroll.scrollLeft;
	var pageY = e.pageY || e.clientY + getScroll.scrollTop;
	return {
		pageX: pageX,
		pageY: pageY
	}
}
//格式化日期对象，返回yyyy-MM-dd HH:mm:ss的形式
function formatDate(date) {
	// 判断参数date是否是日期对象
	// instanceof  instance 实例(对象)   of 的
	// console.log(date instanceof Date);
	if (!(date instanceof Date)) {
		console.error('date不是日期对象')
		return;
	}
	var year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		hour = date.getHours(),
		minute = date.getMinutes(),
		second = date.getSeconds();

	month = month < 10 ? '0' + month : month;
	day = day < 10 ? '0' + day : day;
	hour = hour < 10 ? '0' + hour : hour;
	minute = minute < 10 ? '0' + minute : minute;
	second = second < 10 ? '0' + second : second;

	return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

// 获取两个日期的时间差
function getInterval(start, end) {
	// 两个日期对象，相差的毫秒数
	var interval = end - start;
	// 求 相差的天数/小时数/分钟数/秒数
	var day, hour, minute, second;

	// 两个日期对象，相差的秒数
	// interval = interval / 1000;
	interval /= 1000;

	day = Math.round(interval / 60 / 60 / 24);
	hour = Math.round(interval / 60 / 60 % 24);
	minute = Math.round(interval / 60 % 60);
	second = Math.round(interval % 60);

	return {
		day: day,
		hour: hour,
		minute: minute,
		second: second
	}
}
// ——————————————我是华丽的分割线————————————————
//动画函数、

// var timerId = null;			此处不适合设置全局变量。
// 封装动画的函数
function animate(element, target) {
	// 通过判断，保证页面上只有一个定时器在执行动画
	if (element.timerId) {
		clearInterval(element.timerId);
		element.timerId = null;
	}

	element.timerId = setInterval(function () {
		// 步进  每次移动的距离
		var step = 10;
		// 盒子当前的位置
		var current = element.offsetLeft;
		// 当从400 到 800  执行动画
		// 当从800 到 400  不执行动画

		// 判断如果当前位置 > 目标位置 此时的step  要小于0
		if (current > target) {
			step = -Math.abs(step);
		}

		// Math.abs(current - target)   <= Math.abs(step)
		if (Math.abs(current - target) <= Math.abs(step)) {
			// 让定时器停止
			clearInterval(element.timerId);
			// 让盒子到target的位置
			element.style.left = target + 'px';
			return;
		}
		// 移动盒子
		current += step;
		element.style.left = current + 'px';
	}, 5);
}



