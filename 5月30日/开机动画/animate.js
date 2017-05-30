function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//true��ʾ��������
        for (var k in json) {
            //k:v
            //k:json[k]
            //������:����Ŀ��ֵ
            if (k == "opacity") {
                var leader = getStyle(obj, k) * 100;
                //��ȻgetStyle��ȡ�������ַ������� ���ǲ����������Զ�ת��
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
                flag = false;//���߱�� �����ֵ��û�ﵽ��Ҫ����
            }

        }
        //�������֮���ټ��
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
