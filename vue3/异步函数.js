async function fn() {
    throw '发生了错误';
    return 123;
}
console.log(fn());
fn().then(function (data) {
    console.log(data);

}).catch(function (err) {
    console.log(err);
})