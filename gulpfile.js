'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('./sass/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'));
});
