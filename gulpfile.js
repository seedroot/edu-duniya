var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var templateCache = require('gulp-angular-templatecache');
var nodemon = require('gulp-nodemon');
var inject = require('gulp-inject');

var port = process.env.PORT = process.env.PORT || 5000;

gulp.task('js', function () {
  return gulp.src(['./js/app.js', 'views/*.js'])
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('cache', function () {

  var options = {
    root: 'app/',
    module: 'edu'
  }

  return gulp.src('app/**/*.html')
      .pipe(templateCache(options))
      .pipe(gulp.dest('./app/config'));
});

gulp.task('inject', ['cache'], function () {
  var target = gulp.src('./index.html');

  var sources = gulp.src(['./app/**/*.js', './lib/*.js', './css/*.css'], {read: false});

  return target.pipe(inject(sources))
               .pipe(gulp.dest('./'));
});

gulp.task('server', function () {
  connect.server({
    port: port
  });

  // nodemon({
  //  script: 'app.js'
  // })
  // .on('restart', function () {
  //  console.log('restarted');
  // })
});

gulp.task('default', ['cache', 'server', 'inject']);

gulp.watch('app/**/*.html', ['cache'])
