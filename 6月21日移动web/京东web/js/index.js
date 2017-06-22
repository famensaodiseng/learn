/**
 * Created by Administrator on 2017/6/22.
 */
window.onload=function(){
    searchEffect();
    bannerEffect();
    // timeBack();
}

/*头部的js效果*/
function searchEffect(){
    /*头部搜索块的js效果*/
    /*1.获取当前banner的高度*/
    var banner =document.querySelector(".jd_banner");
    var bannerHeight=banner.offsetHeight;
    /*获取header搜索块*/
    var search=document.querySelector(".jd_search");
    /*2.获取当前屏幕滚动时，banner滚动出屏幕的距离*/
    window.onscroll=function(){
        var offsetTop=document.body.scrollTop;
        /*3.计算比例值，获取透明度，设置背景颜色的样式*/
        var opacity=0;
        /*判断，如果当banner还没有完全 滚出屏幕，那么才有必要计算透明度和设置透明度*/
        if(offsetTop < bannerHeight){
            opacity=offsetTop/bannerHeight;
            /*设置样式*/
            search.style.backgroundColor="rgba(233,35,34,"+opacity+")";
        }
    }
}

/*倒计时效果*/
function timeBack(){
    /*1.获取用于展示时间的span*/
    var spans=document.querySelector(".jd_sk_time").querySelectorAll("span");
    /*2.设置初始的倒计时时间,以秒做为单位*/
    var totalTime=3700; //1*60*60   3700%3600=100 /60
    /*3.开启定时器*/
    var timerId=setInterval(function(){
        totalTime--;
        /*判断倒计时时间是否已经完成*/
        if(totalTime < 0){
            /*清除时钟*/
            clearInterval(timerId);
            return;
        }
        /*得到剩余时间中的  时  分  秒*/
        /*获取时*/
        var hour=Math.floor(totalTime/3600);
        /*获取分*/
        var minute=Math.floor(totalTime%3600/60);
        /*获取秒*/
        var second=Math.floor(totalTime%60);
        /*赋值，将时间填充到span中  12*/
        spans[0].innerHTML=Math.floor(hour/10);
        spans[1].innerHTML=Math.floor(hour%10);

        spans[3].innerHTML=Math.floor(minute/10);
        spans[4].innerHTML=Math.floor(minute%10);

        spans[6].innerHTML=Math.floor(second/10);
        spans[7].innerHTML=Math.floor(second%10);
    },1000);
}

// 轮播图
function bannerEffect(){
    var banner = document.querySelector(".jd_banner");
    var bannerHeight = banner.offsetHeight(".ul:first-of-type");
    var first = imgBox.querySelector(".li:first-of-type");
    var last = imgBox.querySelector(",li:last-of-type");
    // 首尾各加两个图片
    imgBox.appendChild(first,cloneNode(true));
    imgBox.insertBefore(last,cloneNode(true),imgBox,firstChild);



}