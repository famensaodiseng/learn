/**
 * Created by Administrator on 2017/7/29.
 */
//这里通过define定义模块、
//
// define(function () {
//
// });
define(function (require,exports,module) {
    function student() {
        this.name = "张三";
        this.age = "10";
        this.mark = 0;

    }
    student.prototype.showMark = function () {
        console.log(this.name + "考了"+this.mark+"分");
    }
    module.exports =new student();
});