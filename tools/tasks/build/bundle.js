'use strict';

const fs = require('fs');
const gulp = require('gulp');
const Builder = require('systemjs-builder');


gulp.task('build:bundle', (cb) => {
	let systemJsFile = './dist/systemjs.config.js';
	let builder = new Builder('./', systemJsFile);
	let input = './src/code/main.js';
	let output = `./dist/code/bundle-${Date.now().toString(32)}.js`;

	builder.bundle(input, output, { minify: false, mangle: true })
		.then(() => {
			console.log('Build complete');
			//fs.writeFileSync(systemJsFile, fs.readFileSync(systemJsFile, 'utf8').replace('./node_modules', 'npm'));
			cb();
		})
		.catch(function(err) {
			console.log('Build error');
			console.log(err);
			cb();
		});
});