"use strict";

const gulp = require('gulp');
const connect = require('gulp-connect');
const config = require('./config');

module.exports = {
    webserver
};

function webserver() {
    return connect.server({root: config.BUILD_DIR, port: 9000});
}