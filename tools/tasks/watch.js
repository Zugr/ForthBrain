'use strict';

const path = require('path');
const gulp = require('gulp');
const tinylr = require('tiny-lr');

gulp.task('watch', ['watch:scss', 'watch:css', 'watch:js']);

gulp.task('watch:scss', () => {
	return gulp.watch(['./code/**/*.scss'], ['build:scss']);
});

gulp.task('watch:js', () => {
	return gulp.watch(['./src/**/*.js'], ['build']);
});

gulp.task('watch:css', function () {
	return gulp.watch('./code/**/*.css', function (event) {
		tinylr.changed(path.relative(__dirname, event.path));
	});
});