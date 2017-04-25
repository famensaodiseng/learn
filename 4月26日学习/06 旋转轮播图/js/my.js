/**
 * Created by andy on 2015/12/12.
 */
window.onload = function() {
    var arrow = document.getElementById("arrow");  // 三角
    var wrap = document.getElementById("wrap");   // 大盒子
    var slide = document.getElementById("slide");
    var lis = slide.children[0].children;   // 获得所有的li
    var json = [  //  包含了5张图片里面所有的样式
        {   //  1
            width:400,
            top:20,
            left:50,
            opacity:20,
            z:2
        },
        {  // 2
            width:600,
            top:70,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4
            width:600,
            top:70,
            left:600,
            opacity:80,
            z:3
        },
        {   //5
            width:400,
            top:20,
            left:750,
            opacity:20,
            z:2
        }
    ];
    wrap.onmouseover = function() {   // 鼠标经过显示 三角
        animate(arrow,{opacity:100});
    }
    wrap.onmouseout = function() {  // 鼠标离开 隐藏三角
        animate(arrow,{opacity:0});
    }
    move(); // 页面执行也调用一次
    // 两个按钮
    var flag = true;   // 用于函数节流
    var as = arrow.children;   // 2 个 a
    for(var k in as) {
        as[k].onclick = function() {
            // 当俺们点击的时候， 只做一件事情  ---- 交换json
            if(this.className == "prev") {  // 左侧按钮
                //  alert(11);
                if(flag == true) {   // 实现按钮只能点击一次
                    move(true);
                    flag = false;
                }
            }
            else
            {
              /*  当我们点击了 右侧按钮  ：
    把 数组里面的第一个值删掉 ，然后把这个值追加到 数组的最后面。
     json.push(json.shift());*/
                // alert(22);   // 右侧按钮
               if(flag == true) {   // 实现按钮只能点击一次
                   move(false);
                   flag = false;
               }
            }
        }
    }
    function move(x) {
        if(x != undefined) {   // 如果没有值传递过来，就应该  不执行 里面的语句直接遍历json
            if(x) {
                // 交换 反向json   左侧
                json.unshift(json.pop())
            }else {
                // 正向 json
                json.push(json.shift());
            }
        }
        // 交换完毕 json 之后，就要 循环执行一次
        for(var i=0;i<json.length;i++) {
            animate(lis[i],{
                width: json[i].width,
                top: json[i].top,
                left: json[i].left,
                opacity: json[i].opacity,
                zIndex: json[i].z
            },function(){ flag = true; })
        }
    }

    // go
      /*  width:400,
        top:20,
        left:750,
        opacity:20,
        z:2*/
   /* // 给每个图片 5个 json
    for(var i=0;i<json.length;i++) {
        animate(lis[i],{
            width: json[i].width,
            top: json[i].top,
            left: json[i].left,
            opacity: json[i].opacity,
            zIndex: json[i].z
        })
    }*/


}