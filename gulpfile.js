const gulp = require('gulp');

gulp.task('compile-html', () => {
  return gulp
    .src('src/**/*.html')
    .pipe(gulp.dest('app'))
})
