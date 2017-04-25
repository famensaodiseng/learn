/**
 * Created by andy on 2015/12/12.
 */
function animate(obj,json,fn) {
    // 第一参数 动的对象   2  attr  动的那个属性   3   属性值少多少
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true;  //  用来判断是否停止定时器   定时器的里面
        //  每隔 30 毫秒就要运行一次
        for(var k in json) {  // k 属性     json[k] 是属性值
            // 第一 k 是 width
            // 第二 k     height
            //  leader  =  600 -  100
            // leader = leader + (target - leader )  /10 ;
            //  计算步长
            // target 目标位置    leader 不清楚，我们不知道用户改那个属性
            // 检测用户给我们了什么属性，  我们就用这个属性的值 来计算
            // 我们怎么知道用户给我们属性，我们怎么又能得到属性的值呢？
            //  var leader = obj.style[attr];  他只能得到行内式
            var leader = 0;
            // 因为透明度是 小数   取值 0~1 之间    第二个  它没有单位
            if(k == "opacity") {
                // 先解决小数的问题
                leader =  Math.round(getStyle(obj,k) * 100) || 100;
                // 如果没有opacity  默认当 1 看    1* 100  = 100
                // 我们去过来的是  0.3  但是小数不好计算 我们乘以100   30  好计算
            }
            else {
                leader = parseInt(getStyle(obj,k)) || 0;
                // 他本身有单位 所以要去掉    默认的默认是 0
            }
            //去掉px 的方法   parseInt(25px)   25
            /* alert(leader);*/
            var step = (json[k] - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            if( k == "opacity") {   // 记住我们的透明是不加单位的  不要加px
                obj.style.opacity = leader / 100;
//                    opacity: 0.4;
//                    filter: alpha(opacity = 40);     /*不能改只能是 40  不能是 0.4*/
                obj.style.filter = "alpha(opacity = "+leader+")";
            }
            // 设置层级
            else if(k == "zIndex") {
                obj.style.zIndex = json[k];    //  直接给值
            }
            else {
                obj.style[k] = leader + "px";   // 其他的要单位
            }
            if(leader != json[k]) {  //  只要三个属性有一个没有到达，我就取反
                // 这句话要写到 for in 里面   因为有三个属性，所以用 for in 才能遍历
                // 三个都到了 都不执行这句话了
                flag = false;
            }
        }
        // console.log(flag);
        if(flag) {
            clearInterval(obj.timer);
            if(fn){   // 如果有函数传递过来  ， 定时器结束了，说明动画结束  可以执行 回调函数
                fn();   // 执行函数  fn + ();
            }
        }
    },30)
}
function getStyle(obj,attr) {
    if(obj.currentStyle) {
        // 如果支持，返回改属性值
        //  return  obj.style.left    只能得到行内式的
        // return  obj.currentStyle["left"];   // 正确的写法，但是left 是传进来的
        return  obj.currentStyle[attr];
    }
    else
    {
        return window.getComputedStyle(obj,null)[attr];
    }
}
