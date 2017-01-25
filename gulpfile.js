/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

const fs = require('fs');
const path = require('path');

global.config = {
  root: __dirname,
  htmlMinOptions: {
    collapseWhitespace: true,
    caseSensitive: true,
    removeComments: true,
    removeRedundantAttributes: true
  }
};

/**
 *  This will load all js files in the gulp directory
 *  in order to load all gulp tasks
 */
walk('./tools/tasks/').filter((file) => {
  return (/\.(js)$/i).test(file);
}).map(function (file) {
  require('./' + file);
});

function walk(dir) {
  let results = [];
  let list = fs.readdirSync(dir);

  list.forEach((file) => {
    file = path.join(dir, file);
    let stat = fs.statSync(file);

    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });

  return results;
}