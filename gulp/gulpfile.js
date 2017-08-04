/**
 * Created by Administrator on 2017/8/4.
 */
var gulp =  require('gulp');
var concat =  require('gulp-concat');
var uglify =  require('gulp-uglify');
var cssnano =  require('gulp-cssnano');
var htmlmin =  require('gulp-htmlmin');

// 创建任务
// 第一个参数: 任务名
// 第二个参数: 回调函数,当我们执行任务时就会执行这个函数
gulp.task('test', function(){
    console.log(123)
})


//js压缩合并
gulp.task('script',function () {
    gulp.src(['js1.js','js2.js'])
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});
//对css压缩合并
gulp.task('style',function () {
    gulp.src(['css1.css','css2.css'])
        .pipe(concat('index.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist'))
});

gulp.task('html',function () {
    gulp.src(['html111.html','html222.html'])
        .pipe(concat('index.html'))
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest('dist'))
});



