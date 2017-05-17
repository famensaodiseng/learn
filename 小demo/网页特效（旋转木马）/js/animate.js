function animate(c, a, b) {
    clearInterval(c.timer);
    c.timer = setInterval(function () {
        var d = true;
        for (var e in a) {
            if (e == "opacity") {
                var g = getStyle(c, e) * 100;
                var h = a[e] * 100;
                var f = (h - g) / 10;
                f = f > 0 ? Math.ceil(f) : Math.floor(f);
                g = g + f;
                c.style[e] = g / 100
            } else {
                if (e == "zIndex") {
                    c.style[e] = a[e]
                } else {
                    var g = parseInt(getStyle(c, e)) || 0;
                    var h = a[e];
                    var f = (h - g) / 10;
                    f = f > 0 ? Math.ceil(f) : Math.floor(f);
                    g = g + f;
                    c.style[e] = g + "px"
                }
            }
            console.log("target: " + h + "leader: " + g + "step: " + f);
            if (g != h) {
                d = false
            }
        }
        if (d) {
            clearInterval(c.timer);
            if (b) {
                b()
            }
        }
    }, 15)
}
function getStyle(b, a) {
    if (b.currentStyle) {
        return b.currentStyle[a]
    } else {
        return window.getComputedStyle(b, null)[a]
    }
};