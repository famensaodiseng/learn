// 获取元素
var newsT = document.getElementById('newsT');
// 红色的线
var flag = document.getElementById('flag');
// 详细内容的容器
var newsContainer = document.getElementById('newsContainer');
//1 获取到a标签注册事件
for (var i = 0; i < 2; i++) {
  var link = newsT.children[i];
  link.onmouseover = linkMouseover;
  // 设置a标签的自定义属性，记录索引
  link.setAttribute('index', i);
}

function linkMouseover() {
  //2 当触发a标签的mouseover，让红色的线执行动画，显示对应的详细内容
  // 让红色的线执行动画
  // 获取当前触发事件的a标签的位置
  var offsetLeft = this.offsetLeft;
  animate(flag, offsetLeft - 3, 30);

  // 显示对应的详细内容
  // 让所有的详细内容隐藏
  for (var i = 0, len = newsContainer.children.length; i < len; i++) {
    var div = newsContainer.children[i];
    // 判断类样式中是否已经有hide
    if (div.className.indexOf('hide') === -1) {
      div.className = 'news-b hide';
    }
  }
  // 当前对应的详细内容显示
  var index = parseInt(this.getAttribute('index'));
  newsContainer.children[index].className = 'news-b show';
}


