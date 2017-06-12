var gulp = require('gulp');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');


gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('script', function() {
  return gulp.src('src/js/index')
    .pipe( webpack( require('./webpack.config.js') ) )
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('scss', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({
      // outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('default', ['script', 'scss', 'html'], function() {
  gulp.watch('src/js/**', ['script']);
  gulp.watch('src/scss/**', ['scss']);

  gulp.watch('src/*.html', ['html']);
});
