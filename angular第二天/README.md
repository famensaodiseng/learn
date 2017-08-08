#Angular
   ##Angular VS     jQuery

   -jquery提高了dom操作的效率
   -不推崇dom操作

   -angular。element，使用方式和jquery非常像、
   +可以把angular.element当做jquery的$来用，
   +注意*angluar.element要求传入的参数是一个原生的dom对象，而不是选择器


##回顾并总结angular开发流程
    -1.在html中引入angular.js文件
    -2.在html中加上ng-app指令，这样的指令是告诉angular管理那一部分的代码。
    -3.在js中创建模块 angular.module('myApp',[])给ng-app一个值
    -这个值就是这个模块的模块名：myApp
    -4.在js中创建控制器.xxx.controller('控制器的名字',function(){})
    我们需要在页面上加上Ng-controller指令，指令为控制器的名字
    ng-controller="控制器的名字"
    -5.建模。根据页面的结构能够抽象出具体的js对象。
    -6.通过$scope做一些初始化操作。$scope.userName
    -7.通过ng-model,ng-click-{{}}把$scope的属性页面展示出来。
###MVC只是一种思想，只是约定了我们代码应该如何去组织。
    -让我们代码的每一部分都有一个明确的职业。有利于后期的维护
    -方便后期的维护。并不是提高代码的执行性能。（操作还是原生最快。
###angular中模块的划分方式
    -1.按照项目的功能划分模块，
    -2.按照项目中文件的类型去划分。
    -3.
###angular控制器
    -1.传统的方式1.2.x版本会吧全局的函数当做控制器
    -2.面向对象的方式创建控制器
    //使用的时候需要指定一个当前对象的一个名字。

    --ng-repeat
    -在遍历时会提供以下值，
    +$odd:为true时，表明当前数据是否是第[奇数]条
    +$even:为true时，表明当前数据是否是第[偶数]条
    +first:为true时，表明当前数据是否是第[一]条


    ##ng-clas


    ###ng-if
    -ng-checked     单向数据绑定，界面操作不会影响数据模型
    -ng-selected    也是单向数据绑定
    -ng-blur        失去焦点
    -ng-focus       获得焦点
    -ng-click       单击
    -ng-submit      form表单