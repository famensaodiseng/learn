function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//true表示可以清理
        for (var k in json) {
            //k:v
            //k:json[k]
            //属性名:属性目标值
            if (k == "opacity") {
                var leader = getStyle(obj, k) * 100;
                //虽然getStyle获取到的是字符串类型 但是参与运算后会自动转换
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = (leader + step) / 100;
            } else if (k == "zIndex") {
                obj.style[k] == json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = leader + step + "px";
            }
            if (leader != target) {
                flag = false;//告诉标记 我这个值还没达到不要清理
            }

        }
        //遍历完成之后再检查
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15)
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}
