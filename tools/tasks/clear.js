'use strict';

const gulp = require('gulp');
const del = require('del');

gulp.task('clear', (cb) => {
	del(['./dist']).then(() => cb(), cb);
});
