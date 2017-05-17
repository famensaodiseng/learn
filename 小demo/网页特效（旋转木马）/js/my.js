window.onload = function () {
    var b = document.getElementById("wrap");
    var e = document.getElementById("slide");
    var f = e.children[0];
    var i = f.children;
    var h = document.getElementById("arrow");
    var a = document.getElementById("arrRight");
    var d = document.getElementById("arrLeft");
    var c = [{width: 400, top: 20, left: 50, opacity: 0.2, zIndex: 2}, {
        width: 600,
        top: 70,
        left: 0,
        opacity: 0.8,
        zIndex: 3
    }, {width: 800, top: 100, left: 200, opacity: 1, zIndex: 4}, {
        width: 600,
        top: 70,
        left: 600,
        opacity: 0.8,
        zIndex: 3
    }, {width: 400, top: 20, left: 750, opacity: 0.2, zIndex: 2}];
    b.onmouseover = function () {
        animate(h, {"opacity": 1})
    };
    b.onmouseout = function () {
        animate(h, {"opacity": 0})
    };
    function j() {
        for (var k = 0; k < i.length; k++) {
            animate(i[k], c[k], function () {
                g = true
            })
        }
    }

    var g = true;
    j();
    a.onclick = function () {
        g = false;
        c.push(c.shift());
        j()
    };
    d.onclick = function () {
        g = false;
        c.unshift(c.pop());
        j()
    }
};