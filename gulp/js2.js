  setIndicator(index);
        setTimeout(function(){
            isEnd=true;
            /*清除之前添加的定时器*/
            clearInterval(timerId);
            //重新开启定时器
            startTime();},100);
