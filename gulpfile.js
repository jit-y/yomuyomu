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

gulp.task('compile-css', () => {
  return gulp
    .src('src/**/*.scss')
    .pipe(sass({
      includePaths: [
        "./node_modules/bootstrap-sass/assets/stylesheets"
      ]}
    ).on('error', sass.logError))
    .pipe(gulp.dest('app'))
})
