/*
 * @Author: yang fangtao
 * @Date:   2018-12-03 11:10:40
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-05 21:58:37
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

function setInnerText(element,content) {
	// 判断浏览器是否支持innertext
	if (typeof element.innerText ==='string'){
		element.innetText = content;
	} else {
		element.textContent = content;
	}
}


