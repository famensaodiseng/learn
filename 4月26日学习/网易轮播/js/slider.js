/* Created by andy on 2015/12/12.
 */
var js_slider = document.getElementById("js_slider");
var slide_block = js_slider.children[0].children[0];
var imgs = slide_block.children;
var slide_ctrl = js_slider.children[1];

    //动态生成6个span

    for(var i=0;i<imgs.length;i++) {
        var span = document.createElement("span");
        span.className = "slider-ctrl-con";
        span.innerHTML = imgs.length - i;
        slide_ctrl.insertBefore(span,slide_ctrl.children[1]);
    }
    // 2. 让我们第一个 span 按钮 变成 蓝色
    slide_ctrl.children[1].className = "slider-ctrl-con current";
    //3
    var sliderWidth = js_slider.offsetWidth;
    for(var i=1;i<imgs.length;i++) {
        imgs[i].style.left = sliderWidth + "px";
    }


    //4点击三个按钮
    var spans = slide_ctrl.children;
    var iNow = 0;
    for(var k in spans) {
        spans[k].onclick = function () {
            if (this.className == "slider-ctrl-prev") {


                animate(imgs[iNow], {left: sliderWidth});
                --iNow < 0 ? iNow = imgs.length - 1 : iNow;
                imgs[iNow].style.left = -sliderWidth + "px";
                animate(imgs[iNow], {left: 0});
                square();


            } else if (this.className == "slider-ctrl-next") {
                autoplay();
            }
            else {
                var that = this.innerHTML - 1;
                if (that > iNow) {
                    animate(imgs[iNow], {left: -sliderWidth});
                    imgs[that].style.left = sliderWidth + "px";
                }
                else if (that < iNow) {
                    animate(imgs[iNow], {left: sliderWidth});
                    imgs[that].style.left = -sliderWidth + "px";
                }
                iNow = that;
                animate(imgs[iNow], {left: 0});
                square();

            }
        }
        function square() {
            for (var i = 1; i < spans.length - 1; i++) {
                spans[i].className = "slider-ctrl-con";
            }
            spans[iNow + 1].className = "slider-ctrl-con current";
        }
    }
        //开始定时器
        var timer = null;
        timer = setInterval(autoplay,2000);
        function autoplay() {
            animate(imgs[iNow], {left: -sliderWidth});
            ++iNow > imgs.length -1 ? iNow = 0 : iNow;
            imgs[iNow].style.left = sliderWidth + "px";
            animate(imgs[iNow], {left: 0});
            square();
        }
        //鼠标经过时就停止定时器
        js_slider.onmouseover = function() {
            clearInterval(timer);
        }
        js_slider.onmouseout = function() {
            timer = setInterval(autoplay, 2000);
        }
