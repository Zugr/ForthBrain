'use strict';

const path = require('path');
const gulp = require('gulp');
const express = require('express');
const tinylr = require('tiny-lr');
const connectlr = require('connect-livereload');
const openurl = require('openurl');

const ROOT_DIR = global.config.root;
const PORT = 4000;
const LR_PORT = 35728;

gulp.task('server', (cb) => {
	let app = express();
	let root = path.join(ROOT_DIR, 'dist');
	let libRoot = path.join(ROOT_DIR, 'node_modules');

	app.use(connectlr({ port: LR_PORT }));
	app.use('/node_modules', express.static(libRoot));
	app.use(express.static(root));

	app.all('/', function (req, res, next) {
		res.sendFile('index.html', { root: root });
	});

	app.listen(PORT, function (err) {
		if (err) throw err;
		openurl.open('http://localhost:' + PORT);
		cb();
	});
});

gulp.task('livereload', (cb) => {
	let server = tinylr();
	server.listen(LR_PORT, cb);
});