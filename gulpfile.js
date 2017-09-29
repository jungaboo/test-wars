var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('stream', function () {
	// Endless stream mode
    return watch('css/style.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('callback', function () {
	// Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('css/style.css', function () {
        gulp.src('css/style.css')
            .pipe(gulp.dest('build'));
    });
});

gulp.task('default', ['stream','callback']);