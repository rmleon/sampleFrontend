"use strict";

const config = require('./config');
const gulp = require('gulp');
const link = require('gulp-sym');
const path = require('path');

module.exports = {assets};

const settings = {force: true, relative: true};

/**
 * Link the assets in the build folder
 */
function assets() {
    return gulp.src(`${config.SRC_ASSETS_DIR}/*`)
        .pipe(link(source => {
            return path.resolve(config.BUILD_ASSETS_DIR, path.basename(source.path));
        }, settings));
}