'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const rename = require('gulp-rename');

gulp.task('build:copy', (cb) => {
    runSequence(['build:copy:config', 'build:copy:systemjs'], cb);
});

gulp.task('build:copy:config', () => {
    let sourceFilePath = `./src/config/config.${global.ENV}.json`;

    return gulp.src(sourceFilePath)
        .pipe(rename('config.json'))
        .pipe(gulp.dest('./dist/config'));
});

gulp.task('build:copy:systemjs', () => {
   return gulp.src(['./src/systemjs.config.js'])
        .pipe(gulp.dest('./dist'));
});