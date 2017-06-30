/**
 * JS基础面试题
 */
console.log("===============变量===============");
//第0题：
//var name;
function setName(){
	name="张三";
}
setName();
console.log(name);

//第1题：
//考点：1、变量声明提升 2、变量搜索机制
var a=1;
function test(){
	console.log(a);//这里面输出其实是一个局部变量a
	var a=1;
}
test();

function test(){
	var a;
	console.log(a);//此时由于a并咩有被赋值，所以也就是undefined
    a=1;

}

//第2题：任何通过附加在window上的变量都相当于声明一个全局变量，
	//或者是给全局变量赋值
var b=2;
function test2(){
	window.b=3;
	console.log(b);//就是全局变量b 值为3
}
test2();

//第3题：
c=5;//声明一个全局变量c 
function test3(){
	var c;
	window.c=3;//改变全局变量c的值
	console.log(c);//由于此时的c是一个局部变量c，并且没有被赋值 c就是undefined
	//var c;
	console.log(window.c);//此时的c就是一个全局变量c，也就是值为3
}
test3();



console.log("===============数组===============");
var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr[10] = 'c';
alert(arr.length);


console.log("===============运算符===============");
//第一题：
var a=1;
console.log(a++);
console.log(++a);
//第二题：
console.log(null==undefined);
console.log("1"==1);
console.log("1"===1);



console.log("===============数据类型检测===============");
typeof 1;
typeof "hello";
typeof /[0-9]/;
typeof {};
typeof null;
typeof undefined;
typeof [1,2,3];
typeof function(){};

console.log("===============数据类型转换===============");
parseInt(3.14);
parseFloat("3asdf");
parseInt("1.23abc456");



console.log("===============函数===============");
//第1题：
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    //var foo = 11;
}
alert(typeof bar());//"function"

//第2题：
var foo = 1;
function bar() {
	foo = 10;//局部变量foo
    return;
    function foo() {}
}
bar();//没有任何返回值
alert(foo);

//第3题：


console.log(a);//是一个函数
var a = 3;
function a(){}
console.log(a);////3

//相当于
var a;
function a(){}
console.log(a);//是一个函数
a=3;
console.log(a)//3


console.log("===============函数参数===============");
//第1题：
function foo(a) {
    arguments[0] = 2;
    alert(a);
}
foo(1);

//第2题：
function foo(a) {
    alert(arguments.length);
}
foo(1, 2, 3);



console.log("===============函数表达式===============");
//此时的bar不会作为函数的名称，所以不能使用bar()来调用函数
var foo = function bar(name) {
	console.log("hello"+name);
};
//alert(typeof bar);
foo("world");//"hello"
//console.log(bar);//undefined
console.log(foo.toString());
//bar();//报错


//setTimeout
function test(){
	console.log("test函数");
}
setTimeout(function(){
	console.log("定时器回调函数");
}, 0)
test();


function foo(){
	var name="hello";

}


bar();//报错
var  bar=function(){

}
//相当于：
var bar;
bar();
bar=function(){};

function a(){

}
var a;
console.log(typeof a);
