var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	browserSync = require('browser-sync').create();


gulp.task('sass', function () {
	return sass('app/scss/style.scss')
		.on('error', sass.logError)
		.pipe(gulp.dest('app/css/'))
		.pipe(browserSync.stream());
});


gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: "app/",
		online: false,
		notify: false,
		open: false
	});

	gulp.watch("app/scss/*.scss", ['sass']);
	gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
