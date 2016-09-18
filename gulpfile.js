var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');


gulp.task('scripts', function() {
  return gulp.src(['src/**/*.js', '!src/dist/'])
    .pipe(uglify())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('src/dist/scripts/'))
    .pipe(notify({message : 'JS files successfully concated and reduced'}));
});

gulp.task('styles', function(){
  return sass('src/assets/**/*.scss', { style: 'expanded'})
    .pipe(gulp.dest('src/dist/styles/'))
    .pipe(rename({suffix : '.min'}))
    .pipe(cssnano())
    .pipe(concat('style.css'))
    .pipe(notify({message : 'Scss Successfully compiled and reduced'}));
});

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('src/assets/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/**/*.js', ['scripts']);
});