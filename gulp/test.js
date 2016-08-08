"use strict";

const config = require('./config');
const vendorIncludes = require('./vendor-includes');

const gulp = require('gulp');
const protractor = require('gulp-angular-protractor');
const karma = require('gulp-karma-runner');
const merge = require('merge2');

module.exports = {testIntegration, testUnit};

function testIntegration() {
    return gulp.src(config.SRC_INTEGRATION_TESTS)
        .pipe(protractor({
            'configFile': './gulp/protractor/config.js',
            'debug': false,
            'autoStartStopServer': true
        })).on('error', e => {
                throw e;
            }
        );
}

function testUnit() {
    const vendorJs = gulp.src(vendorIncludes.js);
    const modules = gulp.src(config.ALL_MODULES_IN_SRC, {read: false});
    const components = gulp.src(config.ALL_COMPONENTS_IN_SRC, {read: false});
    const unit = gulp.src(config.SRC_UNIT_TESTS, {read: false});

    return merge(vendorJs, modules, components, unit).pipe(
        karma.server({
            singleRun: true,
            autoWatch: true,
            frameworks: ['jasmine'],
            browsers: ['Chrome'],
            plugins: [
                'karma-chrome-launcher',
                'karma-jasmine'
            ]
        })
    );
}
