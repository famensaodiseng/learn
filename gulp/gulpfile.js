// 引入本地gulp
const gulp = require('gulp');
// 引入htmlmin
const htmlmin = require('gulp-htmlmin');
// 引入cssmin
const cssmin = require('gulp-cssmin');
// 引入browser-sync
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// 1. 压缩html
// 创建压缩html的任务
gulp.task('minifyhtml', function () {
    return gulp.src('./*.html') // 要压缩的路径
        .pipe(htmlmin({ // 把html交给htmlmin插件处理
            collapseWhitespace: true, // 设置参数去除空白
            minifyJS: true, // 压缩html中的js
            minifyCSS: true, // 压缩html中的css
            removeComments: true // 去除html注释
        }))
        .pipe(gulp.dest('./dist')); // 设置输出的目录
});

// 2. 压缩css
// 创建压缩css的任务
gulp.task('minifycss', function () {
    return gulp.src('./css/*.css') // 要压缩的路径
        .pipe(cssmin()) // 把css交给cssmin插件处理
        .pipe(gulp.dest('./dist/css')) // 设置输出的目录
});

// 3. 把其它依赖文件复制到指定目录
gulp.task('copy', function () {
    gulp.src('./img/*.*')
        .pipe(gulp.dest('./dist/img'));
    gulp.src('./fonts/*.*')
        .pipe(gulp.dest('./dist/fonts'));
    gulp.src('./upload/*.*')
        .pipe(gulp.dest('./dist/upload'));
});

gulp.task('build', ['minifyhtml', 'minifycss', 'copy']);

// 5. 开启静态服务器，并监视文件的变化
gulp.task('dev', function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch('./*.html').on('change', reload);
    gulp.watch('./css/*.css').on('change', reload);
    gulp.watch('./js/*.js').on('change', reload);
});