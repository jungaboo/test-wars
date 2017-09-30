var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('app/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('app/scss/style.scss',['styles']);
});