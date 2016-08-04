"use strict";
/*eslint-env node*/

const gulp = require('gulp');
const del = require('del');
const sequence = require('gulp-sequence');

const lintTask = require('./gulp/lint');
const bundleTask = require('./gulp/bundle');
const testTask = require('./gulp/test');
const browse = require('./gulp/browse');


gulp.task('default', ['bundle']);

gulp.task('bundle', ['lint:js', 'lint:scss'], (cb) => {
    return sequence(
        ['bundle:js-vendor', 'bundle:js-src', 'bundle:css-vendor', 'bundle:css-src'], 'bundle:main')(cb);
});

gulp.task('lint:js', lintTask.lintJs);
gulp.task('lint:scss', lintTask.lintScss);

gulp.task('test', (cb) => {
    return sequence('test:unit', 'test:integration')(cb);
});
gulp.task('test:integration', testTask.testIntegration);
gulp.task('test:unit', testTask.testUnit);

gulp.task('bundle:js-vendor', bundleTask.bundleJsVendor);
gulp.task('bundle:js-src', bundleTask.bundleJsSrc);
gulp.task('bundle:css-vendor', bundleTask.bundleCssVendor);
gulp.task('bundle:css-src', bundleTask.bundleCssSrc);
gulp.task('bundle:main', bundleTask.bundleMain);

gulp.task('clean:build', () => {
    return del('./build');
});

gulp.task('browse', ['bundle'], browse.webserver);