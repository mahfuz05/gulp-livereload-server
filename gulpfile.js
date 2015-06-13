var gulp = require('gulp'),
    //gutil = require('gulp-util'),
    //uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    coffee = require('gulp-coffee');
    //concat = require('gulp-concat'),
     //gulpif = require('gulp-if'),
     //jshint = require('gulp-jshint');

    // gulp.task('js', function () {
    //       return gulp.src('./js/*.js')
    //           .pipe(uglify())
    //           .pipe(concat('main.js'))
    //           .pipe(gulp.dest('./js'));
    // });

    gulp.task('webserver', function() {
      connect.server({
        livereload: true,
        root: ['.', '.tmp']
      });
    });

    gulp.task('livereload', function() {
       gulp.src(['.tmp/styles/*.css', '.tmp/scripts/*.js'])
        .pipe(watch(['.tmp/styles/*.css', '.tmp/scripts/*.js']))
        .pipe(connect.reload());
    });

    gulp.task('less', function() {
       gulp.src('styles/main.less')
        .pipe(less())
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(connect.reload());
    });

   gulp.task('coffee', function() {
       gulp.src('scripts/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('.tmp/scripts'))
        .pipe(connect.reload());
    });

    // gulp.task('lint', function  () {
    //      return gulp.src('./js/*.js')
    //             .pipe(jshint())
    //             .pipe(jshint.reporter('jshint-stylish'));
    // });

    

    gulp.task('watch', function() {
      gulp.watch('styles/*.less', ['less']);
      gulp.watch('scripts/*.coffee', ['coffee']);
      //gulp.watch('./js/*', ['js', 'lint']);
    });

    

    // function js(shouldMinify) {
    // 	return gulp.src('./js/*.js')
    //           .pipe(concat('main.js'))
    //           .pipe(gulpif(shouldMinify, uglify()))
    //           .pipe(gulp.dest('./js'));
    // }

    // gulp.task('default', function() {
    //         shouldMinify = true;
    //         return js(shouldMinify);
    // }); 
//gulp.task('default', ['js']);
gulp.task('default', ['less', 'coffee', 'webserver', 'livereload', 'watch']);