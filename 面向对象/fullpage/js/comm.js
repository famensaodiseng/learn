/*
             mainClass      滑动父容器类名
             firstClass  第一页的类名
             num                  总页数
        */
       function fullPage(mainClass, firstClass, num) {
        var startX = 0,                //初始横坐标
                startY = 0,                //初始纵坐标
                marginTop = 0,        //上下滑动变量
                touchNum = 0,            //上滑极限，是否可以上滑
                touchFlag = true, //可滑动标志 true 可滑动，false 不可滑
                bodyHeight = document.body.offsetHeight,
                page = document.getElementsByClassName(mainClass)[0],
                pageFirst = document.getElementsByClassName(firstClass)[0];
            
        //获取触摸的初识坐标
        page.addEventListener("touchstart",function(e){
             e.preventDefault();
            startX = e.targetTouches[0].clientX;
            startY = e.targetTouches[0].clientY;
        })
        //重置触摸的坐标值
        page.addEventListener("touchend",function(e){
             e.preventDefault();
            startX = 0;
            startY = 0;
            touchFlag = true;
        })
        
        //监听并实现 上、下 滑动效果
        page.addEventListener("touchmove",function(e){
             e.preventDefault();
            var newX = e.targetTouches[0].clientX,
                    newY = e.targetTouches[0].clientY;
            if (newY - startY > 50) {
                if (touchFlag == true && touchNum > 0) {
                    console.log("下滑");
                    touchFlag = false;
                    marginTop += 1;
                    touchNum -= 1;
                    pageFirst.style.marginTop = marginTop * bodyHeight+"px";
                }
            } else if (newY - startY < -50) {
                if (touchFlag == true && marginTop > -num+1) {
                    console.log("上滑");
                    touchFlag = false;
                    marginTop -= 1;
                    touchNum += 1;
                    pageFirst.style.marginTop = marginTop * bodyHeight+"px";
                }
            }
        })
    }
    
    fullPage("g-fullPage", "f-pageFirst",3);
