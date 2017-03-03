const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('compile-html', () => {
  return gulp
    .src('src/**/*.html')
    .pipe(gulp.dest('app'))
})

gulp.task('compile-js', () => {
  return gulp
    .src('dist/**/*.js')
    .pipe(gulp.dest('app'))
})
