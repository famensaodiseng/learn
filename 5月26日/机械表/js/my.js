window.onload = function() {
	var hh = document.getElementById("h");//时针
    var mm = document.getElementById("m");//分针
    var ss = document.getElementById("s");//秒针
    //封装一个获取当前时间 并设置表针旋转角度的函数
    function clock() {
        var d = new Date();
        var ms = d.getMilliseconds();
        var s = d.getSeconds() + ms / 1000;//秒钟
        //60秒 转一圈 360度 一秒6度
        ss.style.transform = "rotate(" + (s * 6) + "deg)";
        var m = d.getMinutes() + s / 60;//分钟
        //60分 转一圈 360度 一分钟6度
        mm.style.transform = "rotate(" + (m * 6) + "deg)";
        var h = d.getHours() + m / 60;//小时
        //12小时 转一圈 360度 30度
        hh.style.transform = "rotate(" + (h * 30) + "deg)";
    }
    //clock();
    setInterval(clock, 100);

}