 var gulp = require("gulp")  	

var gulp = require("gulp-uglify");   	

gulp.task('script', function(){
	gulp.src('./app.js')
	.pipe(uglify())
	.pipe(gulp.dest('./dist'))
});		