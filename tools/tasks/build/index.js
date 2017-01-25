'use strict';

const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const uglify = require('gulp-uglify');
const inject = require('gulp-inject');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');

gulp.task('build:index', (cb) => {
	runSequence('build:index:inject'/*, 'build:index:minify'*/, cb);
});

gulp.task('build:index:inject', () => {
	return gulp.src('./src/index.html')
		.pipe(usemin({
			css: [cssmin(), 'concat', rev()],
			libcss: [cssmin(), 'concat', rev()],
			vendors: [uglify(), rev()]
		}))
		.pipe(inject(gulp.src(['./dist/code/bundle-*.js'], { read: false }), { ignorePath: 'dist', addRootSlash: false }))
		.pipe(gulp.dest('./dist'));
});

gulp.task('build:index:minify', () => {
	return gulp.src('./dist/index.html')
		.pipe(htmlmin(global.config.htmlMinOptions))
		.pipe(gulp.dest('./dist'));
});