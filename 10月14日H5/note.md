# HTML5 基础

> HTML5 肯定不是多了一些标签就完事了
> HTML5 根酷炫没什么关系，更多的职责是功能，而不是外观


*****

## 概要

### WEB技术阶段

1. Web 1.0 内容为主，主要流行HTML和CSS
2. Web 2.0 动态网页，流行AJAX/JavaScript/DOM
3. HTML5 时代，WEB开发回归富客户端

### 什么是HTML5

- 是HTML的超集，不仅仅是HTML，更多的是JavaScript API和CSS的提升，
- 构建 Web 应用程序整体解决方案

> API的概念就是我们编程时所依赖的东西的总称

### 什么是Web Application

- HTML5 前身，由WHATWG组织提出
- 推出的目的主要是提高Web应用程序的功能
- 2007年提交到W3C组织，成了现在我们看到的HTML5

### HTML5应用场景

- 极具表现力的网页
    + 案例非常多
- 网页应用程序
    + PC端：iCloud、百度脑图、Office 365···
    + APP端：淘宝、京东、美团···
    + WeChat端：淘宝、京东、美团···
- 混合式本地应用
    + PC端：网易云音乐、有道词典···
    + APP端：淘宝、京东、美团···
- 简单的游戏

### H5新特性概要

#### HTML

- 标签
    + 更语义化标签
- 智能表单
    + 新的表单类型，如：email,url,number
    + 新增表单功能属性，如：autocomplete，autofocus
    + 虚拟键盘适配，通过表单的类型决定移动端弹出的键盘类型
- 网页多媒体，我们可以在网页中直接通过原生方式播放视频音频
    + 音频
    + 视频
    + 字幕
- 属性，语义化属性
    + 链接关系描述
    + 结构数据标记
    + ARIA
    + 自定义属性
- Canvas，提供网页绘图的可能，后面在Canvas课程会专门去学习
    + 2D 绘图
    + 3D (WebGL)
- SVG

#### JavaScript API

- 核心平台提升，JS在DOM和BOM两个方向上都新增了很多api，便于开发应用程序
    + 新的选择器
    + Element.classList
    + 访问历史API
    + 全屏API
- 网页存储，提供网页中操作客户端本地存储的API
    + Application Cache
    + localStorage
    + sessionStorage
    + WebSQL
    + IndexedDB
- 设备信息访问，JS可以访问硬件的一些信息，我们在移动手机APP的课程中再看
    + 网络状态
    + 硬件访问
    + 设备方向
    + 地理围栏
- 拖放操作
    + 网页内拖放
    + 桌面拖入
- 文件
    + 文件系统API
    + FileReader
- 网络访问
    + XMLHttpRequest
    + fetch
    + WebSocket
- 多线程
- 桌面通知，

#### CSS

- 后面详细讨论

*****

## HTML5 骨架

```html
<!-- HTML5的DOCTYPE声明做了最大简化 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- 在标准的HTML5骨架中charset是直接在meta中设置charset -->
    <!-- 字符编码的设置一定是在head中的第一行 -->
    <title>页面标题</title>
</head>
<body>
    
</body>
</html>
```

- HTML5的DOCTYPE声明做了最大简化
- 在标准的HTML5骨架中charset是直接在meta中设置charset
- 字符编码的设置一定是在head中的第一行，再晚就来不及了

## 语义化标签

### 什么是语义化标签

- HTML5中制定了一系列语义化标签：
    + section：独立的内容节块，一般包含标题和内容
    + article：一种特殊的section，定义文档中的具体的文章内容
    + nav：页面导航的链接组
    + aside：标签用来装载非正文的内容，此标签中的文字权重低
    + header：定义文档的页眉，不仅仅是文档的页头可以使用header，一个独立块的头部也应该使用header
    + footer：定义section或document的页脚
- 我们应该根据内容的性质决定使用特定的标签
- h1一定只能出现一个，不是HTML的约定，页面中最重要的内容

- time标签专门用于时间，
    + datetime应该是一个标准时间格式，
    + pubdate指的是当前时间为article的发布时间 

- 在H5中，主体结构标签默认和DIV都是相同的块级效果，
- 但是DIV没有语义，而以上标签有特定语义

### 为什么要有语义化标签

- 能够便于开发者阅读和写出更优雅的代码，代码如诗
- 同时让浏览器或是网络爬虫可以很好地解析，从而更好分析其中的内容
- 使用语义化标签会具有更好地搜索引擎优化

#### 切记

- HTML的职责是描述一块内容是什么（或其意义）
- 而不是它长的什么样子，它的外观应该由CSS来决定。

*****

## 智能表单

### 新的表单类型

- email - 限定输入内容为邮箱地址，表单提交时会校验格式
- url - 限定输入内容为URL，表单提交时会校验格式
- number - 限定输入内容为数字，表单提交时会校验格式
- range - 数值范围选择器
- Date Pickers - 日期时间选择器
    + 样式不能修改，移动端用的比较多，因为移动端显示的是系统的时间或日期选择器
    + date - 选取日、月、年
    + month - 选取月、年
    + week - 选取周和年
    + time - 选取时间（小时和分钟）
    + datetime - 选取时间、日、月、年，浏览器兼容性不好，效果等同于datetime-local
    + datetime-local - 选取本地时间、日、月、年
- search - 搜索域，语义化，表示定义搜索框

### 新的表单属性

- form
    + autocomplete 设置整个表单是否开启自动完成 on|off
    + novalidate 设置H5的表单校验是否工作 true 不工作  不加该属性代表校验

- input:
    + autocomplete 单独设置每个文本框的自动完成
    + autofocus 设置当前文本域页面加载完了过后自动得到焦点
    + form 属性是让表单外的表单元素也可以跟随表单一起提交
    + form overrides
        * formaction 在submit上重写表单的特定属性，当点击当前submit时会以当前值使用
        * formenctype,
        * formmethod,
        * formnovalidate,
        * formtarget
    + list 作用就是指定当前文本框的自动完成列表的数据 datalist 在界面上是看不见的，只是用于定义数据列表的
    + min / max / step
        * min max 限制值的范围，但是不会再输入时限制，提交时校验，
        * step设置的是每次加减的增量
        * 主要使用在number range datepicker上
    + multiple
        * 文本域的多选
    + pattern
        * 设置文本框的匹配格式（正则）
    + placeholder
        * 文本框占位符
    + required
        * 限制当前input为必须的

### 虚拟键盘适配

- 在移动端中，我们可以通过不同的表单类型控制弹出的键盘类型


### 关于什么时候使用H5的新特性，能不能使用新特性的问题

- 无伤大雅的地方直接用
    + 比如一个文本框，加上placeholder就具备占位文本提示功能，浏览器不支持也不会报错，那就可以直接使用
    + 再比如`<input type="email">`，如果浏览器不支持，默认会显示文本框，那也可以直接用。

*****

## 网页多媒体

### 音频

### 视频

### 多媒体标签属性

### 自定义播放器外观

### 全屏 API

### SVG * 


***** 

## JS 基础 API

### 新选择器

### Element.classList

### 自定义属性 DATA-* !

### 访问历史API *