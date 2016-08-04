"use strict";

const config = require('./config');
const vendorIncludes = require('./vendor-includes');

const cleanCss = require('gulp-clean-css');
const changed = require('gulp-changed');
const concat = require('gulp-concat');
const gulp = require('gulp');
const hash = require('gulp-hash-filename');
const inject = require('gulp-inject');
const jade = require('gulp-jade');
const merge = require('merge2');
const sass = require('gulp-sass');
const ngAnnotate = require('gulp-ng-annotate');
const uglify = require('gulp-minify');


module.exports = {
    bundleJsVendor,
    bundleCssVendor,
    bundleCssSrc,
    bundleJsSrc,
    bundleMain,
    bundleComponents
};

function bundleJsVendor() {
    return gulp.src(vendorIncludes.js)
        .pipe(concat(`${config.ASSETS_DIR}/vendor.js`))
        .pipe(uglify())
        .pipe(gulp.dest(config.BUILD_DIR));
}

function bundleCssVendor() {
    return gulp.src(vendorIncludes.css)
        .pipe(concat(`${config.ASSETS_DIR}/vendor-min.css`))
        .pipe(cleanCss())
        .pipe(gulp.dest(config.BUILD_DIR));
}

function bundleCssSrc() {
    return gulp.src(config.ALL_SASS_IN_SRC)
        .pipe(sass({
            minify: true
        }).on('error', sass.logError))
        .pipe(concat(`${config.ASSETS_DIR}/bundle-min.css`))
        .pipe(cleanCss())
        .pipe(gulp.dest(config.BUILD_DIR));
}

function bundleComponents() {
    return gulp.src([config.ALL_JADE_IN_SRC, `!${config.MAIN_JADE_IN_SRC}`])
        .pipe(changed(config.BUILD_DIR, {extension: '.html'}))
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(config.BUILD_DIR));
}


function bundleJsSrc() {

    const modules = gulp.src(config.ALL_MODULES_IN_SRC);
    const components = gulp.src([config.ALL_JS_IN_SRC, `!${config.ALL_MODULES_IN_SRC}`, `!${config.ALL_TESTS_IN_SRC}`]);

    return merge(modules, components)
        .pipe(ngAnnotate())
        .pipe(concat(`${config.ASSETS_DIR}/bundle.js`))
        .pipe(uglify())
        .pipe(gulp.dest(config.BUILD_DIR));
}

function bundleMain() {
    const cwdConfig = {cwd: config.BUILD_DIR};
    const devSources = [
        `${config.ASSETS_DIR}/bundle-min.js`,
        `${config.ASSETS_DIR}/bundle-min.css`
    ];
    const bundlePipe = gulp.src(devSources, cwdConfig)
        .pipe(hash())
        .pipe(gulp.dest(config.ASSETS_DIR, cwdConfig));

    const vendorSources = [
        `${config.ASSETS_DIR}/vendor-min.js`,
        `${config.ASSETS_DIR}/vendor-min.css`
    ];
    const vendorPipe = gulp.src(vendorSources, cwdConfig)
        .pipe(hash())
        .pipe(gulp.dest(config.ASSETS_DIR, cwdConfig));

    return gulp.src(config.MAIN_JADE_IN_SRC)
        .pipe(inject(bundlePipe, {name: 'bundle'}))
        .pipe(inject(vendorPipe, {name: 'vendor'}))
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(config.BUILD_DIR));
}
