'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const del = require('del');

gulp.task('build', (cb) => {
	global.ENV = !global.ENV ? 'dev' : global.ENV;
	runSequence(
		'build:before',
		'build:scss',
	//	'build:templates',
		'build:copy',
		'build:bundle',
		'build:index',
		'build:after',
		cb);
});

gulp.task('build:before', ['clear']);

gulp.task('build:after', (cb) => {
//	del(['./dist/code']).then(() => cb(), cb);
	cb();
});
