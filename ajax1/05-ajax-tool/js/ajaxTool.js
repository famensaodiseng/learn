// type:请求方式
// url:请求url
// data:传递给服务器的参数
// callback:客户端的动态结构的渲染方式

// 下面的封装方式的缺点：
// 1.参数数量固定：用户在调用的时候必须传入四个参数
// 2.参数的顺序固定：用户在调用的时候必须按照顺序进行参数的传递
// 3.不方便后期封装功能的扩展与修改
// function ajax(type,url,data,callback){}

// 解决方式：通过传入对象的方式来设置参数
// option是一个对象，它里面包含着相关的属性：如type,url,data,callback
// 不方便后期功能的添加与扩展
// 会造成当前文件中存在着大量的全局变量，会造成全局变量污染
// function ajax(option){}
// function get(option){}
// function post(option){}
// 建议的封装方式：
var $ = {
    // 将{"name":"jack","age":20} 的参数要转换为 ?name=jack&age=20
    getpa:function(data){
        if(data && typeof data == "object"){
            var str = "?";
            for(var key in data){
                str = str + key + "=" + data[key] + "&";
            }
            str = str.substr(0,str.length-1);
        }
        return str;
    },
    // option.type:请求方式
    // option.url:请求的url
    // option.data:当前请求所传递的参数:规定参数必须是以对象的形式传递{"name":"jack","age":20}
    // option.success:渲染方式
    ajax:function(option){
        // 接收用户参数进行相应处理
        var type = option.type || 'get';
        // location.href 可以获取当前文件的路径 
        var url = option.url || location.href;
        // 接收参数:在js中最方便收集的数据类型为对象，所以我们就规定传递的参数必须是对象
        var data = this.getpa(option.data) || "";
        // 响应成功之后的回调
        var success = option.success;

        // 创建异步对象
        var xhr = new XMLHttpRequest();

        // 让异步对象发送请求
        // 请求行
        if(type == "get"){
            // 拼接参数
            url += data;
            data = null;
        }
        xhr.open(type,url);
        // 请求头
        if(type == "post"){
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        }
        // 请求体
        xhr.send(data);

        // 让异步对象接收响应
        xhr.onreadystatechange = function(){
            // 一个成功的响应有两个条件：1.服务器成功响应 2.数据解析完毕可以使用
            if(xhr.status == 200 && xhr.readyState == 4){
                // 接收响应的返回值
                // responseText   responseXML
                var rh = xhr.getResponseHeader("Content-Type");
                // 判断
                if(rh.indexOf("xml") != -1){
                    var result = xhr.responseXML;
                }
                else if(rh.lastIndexOf("json") != -1){
                    var result = JSON.parse(xhr.responseText);
                }else{
                    var result = xhr.responseText;
                }

                // 接收数据之后，调用回调函数
                success && success(result);
            }
        }
    },
    get:function(option){

    },
    post:function(){

    }
}
