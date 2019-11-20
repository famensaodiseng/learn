// var a = 10;
// a = "abc";
// console.log(a);

//在flow中想要给一个数据添加类型，可以通过注释的方式进行添加
//@flow
// var b /*: number*/ = 10;
// var a: number = 10;
// b = "ABC";
// console.log(b);


function sum(a: number, b: number) {
    return a + b;
}
sum(1, 4);
console.log(sum(1, 4));