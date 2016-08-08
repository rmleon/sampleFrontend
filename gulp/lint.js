"use strict";

const config = require('./config');

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const scsslint = require('gulp-sass-lint');
const puglint = require('gulp-pug-linter');

module.exports = {
    lintJs,
    lintScss,
    lintPug
};

function lintJs() {
    return gulp.src(config.ALL_JS_IN_SRC)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function lintScss() {
    return gulp.src(config.ALL_SASS_IN_SRC)
        .pipe(scsslint())
        .pipe(scsslint.format())
        .pipe(scsslint.failOnError());
}

function lintPug() {
    return gulp.src(config.ALL_JADE_IN_SRC)
        .pipe(puglint())
        .pipe(puglint.reporter('fail'));
}