/* Created by admin on 2015/12/13.
 */
function animate(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true;
        for(var k in json) {
            var leader = 0;
            if(k =="opacity") {
                leader = Math.round(getStyle(obj,k) * 100)||100;
            }
            else {
                leader = parseInt(getStyle(obj,k))||0;
            }
            var step = (json[k] - leader ) /10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            if (k == "opacity"){
                obj.style.opacity = leader / 100;
                obj.style.filter = "alpha(opacity = "+leader+")";
            }
            else if( k == "zIndex") {
                obj.style.zIndex = json[k];
            }
            else {
                obj.style[k] = leader + "px";
            }
            if(leader !=json[k]) {
                flag = false;
            }
        }
        if(flag) {
            clearInterval(obj.timer);
            if(fn) {
                fn();
            }
        }
    },30)
}
function getStyle(obj,attr) {
    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    }
    else {
        return window.getComputedStyle(obj,null) [attr];
    }
}
