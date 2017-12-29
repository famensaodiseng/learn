### 	前端移动端常踩的坑
前端技术日新月异，H5方面也兼容了大部分移动端的浏览器，不少移动端浏览器已经没有太多的兼容问题了，但是有些小问题还是需要我们经常注意。还有移动端一些问题产生的原因大体是因为：
+  浏览器厂商不统一——兼容问题多

+  网络更复杂——弱网络，页面打开慢

+  低端机性能差——页面操作卡顿

+  HTML5新技术多——学习成本不低

+  未知问题——坑多比如ios和安卓，或者我们之前说的移动端的IE，UC浏览器


* 防止手机中网页放大和缩小，这点是最基本的，最为手机网站开发者来说应该都知道的，就是设置meta中的viewport
 ```
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
 ```
* html5调用安卓或者ios的拨号功能<a href="tel:888999,1034">888-810-6999 转 1034</a>

* 禁止复制、选中文本。解决移动设备可选中页面文本(视产品需要而定)

  ```
  	Element {
    -webkit-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
     user-select: none;
  }
  ```
* webkit mask 兼容处理某些低端手机不支持css3 mask，可以选择性的降级处理。
  比如可以使用js判断来引用不同class：

  ```
  if( 'WebkitMask' in document.documentElement.style){
  	alert('支持mask');
  	} else {
  		alert('不支持mask');
  	}
  ```

* 圆角bug(某些Android手机圆角失效)

 ```
	background-clip: padding-box;
 ```
* display:none 导致 transition失效  

 ```
 	使用visibility:visible/hidden  替换display:block/none
    或者
    用-webkit-animation代替transition
 ```
* input 点击出现键盘时 bug
  安卓 点击 input 出现键盘的时候，100%布局的页面的高度会发生变化，导致页面布局错乱

 ```
 	解决办法  
 	1.  .wrapper 加上最小高度  min-height:415; （注意有时候最小高度会失效，对input的最外层position加上绝对定位）
    2.  如果还是有问题 直接对 input的外层加上最小高度
 ```
* 移动端基础框架
 ```
	zepto.js 语法与jquery几乎一样，会jquery基本会zepto~
	iscroll.js 解决页面不支持弹性滚动，不支持fixed引起的问题~ 实现下拉刷新，滑屏，缩放等功能~
	underscore.js 该库提供了一整套函数式编程的实用功能，但是没有扩展任何JavaScript内置对象。
	fastclick 加快移动端点击响应时间
	animate.css CSS3动画效果库
	Normalize.css Normalize.css是一种现代的、CSS reset为HTML5准备的优质替代方案
 ```
* ​点击穿透
 ```
 	问题常见发生场景： 假如页面上有两个元素A和B。B元素在A元素之上。我们在B元素的touchstart事件上注册了一个回调函数，该回调函数的作用是隐藏B元素。我们发现，当我们点击B元素，B元素被隐藏了，随后，A元素触发了click事件。

这是因为在移动端浏览器，事件执行的顺序是touchstart > touchend > click。

而click事件有300ms的延迟，当touchstart事件把B元素隐藏之后，隔了300ms，浏览器触发了click事件，但是此时B元素不见了，所以该事件被派发到了A元素身上。

如果A元素是一个链接，那此时页面就会意外地跳转。

解决思路：

1.不要混用touch和click

2.消耗掉touch之后的click

解决方法：

1.只用touch   把页面内所有click全部换成touch事件（ touchstart 、’touchend’、’tap’），注意：a标签的href也是click，需要换成js的跳转。

2.改动最小——350ms后再隐藏B元素
 ```

* iphone动态生成html元素click失效
 ```
 这个也是神奇的坑，找了很久资料，也没有很原理的解释。

 解决方法：  为绑定click的元素增加css样式   cursor：pointer；
 ```
* 虚拟键盘导致 fixed 元素错位 
 ```
	fixed元素一定会伴随虚拟键盘的出现，但是虚拟键盘只是“贴”在了viewport上，表面上不会对dom产生“任何”影响，但是这个时候fixed元素表现却变得怪异起来，会错位。

解决原理：虚拟键盘弹出时将fixed元素设置为static，虚拟键盘消失时候设置回来。

解决方案：由于虚拟键盘出现并未抛出事件，而检测scroll或者resize事件，皆会有一定延迟，会出现闪烁现象。则当前获取焦点元素为文本元素，就将fixed元素设置为static。
 ```
________________

### 授人以鱼不如授人以渔

面对移动端这么多坑，还有各种各样已经的和未知的坑，时间上也不可能一一讲完，更不可能都已经有解决方案,我们需要学会如何去解决坑:

解决坑首先自己需要有个强有力的执行力，通过不断去尝试来探索未知的问题，那么一般我们会通过哪些方式哪些步骤和技巧来尝试呢？
1.首先我们需要定位问题，我们可以使用下列方法：
A、DOM隔离定位法
不断由大范围到小范围隔离出DOM，从而找出、触发问题的DOM元素
B、样式、JS剔除法
不断剔除一些JS、CSS观察调试检查是否是由部分JS、CSS属性引起问题
C、多运行环境测试法
在多环境中测试，排查是否是由于特定环境引起
D、PC与手机联合调试法
联合PC与手机进行定位，如：通过Mac远程调试iPhone/iPad
2.我们解决问题可以尝试如下的方式：
* 尝试、转思维、绕解决

* 优雅降权、区分处理、沟通

* 搜索与提问......
  和以下的思维：

* 替代

* 绕道

* 分割......


3.在解决问题的过程中我们需要学会利用搜索和沟通资源解决问题：

A、google
B、stackoverflow
C、同事、朋友、QQ群、论坛等
Google和stackoverflow让你更容易更精确的快速搜索出问题相关的资料，同时、朋友QQ群、论坛等让你可以直接的跟人沟通出别人所遇到的问题及解决方案。
4.在发现、解决问题后，更重要的是要学会如何总结问题：
A、总结记录问题产生条件、解决方法和解决过程
B、尽可能分析原理、产生的条件，避免重蹈覆辙
C、分享给更多的人

**无穷无尽的坑，走的人多了，总结分享的多了，坑也就越来越平了。**


