var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('minify-css',function(){
	return gulp.src('src/*.css').pipe(cleanCss()).pipe(gulp.dest('dist'));
});

gulp.task('minify-js',function(){
	return gulp.src('src/swipe.js').pipe(uglify()).pipe(gulp.dest('dist'));
});

gulp.task('default',['minify-css','minify-js']);