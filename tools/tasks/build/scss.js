'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const bourbon = require('node-bourbon').includePaths;
const bourbonNeat = require('bourbon-neat').includePaths;
const autoprefixer = require('gulp-autoprefixer');

gulp.task('build:scss', () => {
    return gulp.src(['./code/app/**/*.scss','./code/scss/**/*.scss'], { base: "./" })
        .pipe(sass({
            includePaths: [bourbon, bourbonNeat]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist'));
});
