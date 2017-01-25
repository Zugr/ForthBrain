'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('start', (cb) => {
    runSequence('clear', ['build'], ['livereload', 'watch'], 'server', cb);
});

gulp.task('start:scss', (cb) => {
    runSequence('clear', ['build'], ['livereload', 'watch:scss'], 'server', cb);
});
