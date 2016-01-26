/**
 * Created by andreasoldino on 1/12/16.
 */

module.exports = buildSystem;

function buildSystem(config) {
    var _ = require('lodash');

    var config = _.defaults(config || {}, {
        src: {
            ts: './src/**/*.ts',
            assets: './src/**/*.{html, css, png, gif}',
            karmaConf: __dirname + 'karma.conf.js'
        },

        destFolder: './dist',
        defaultSpaFile: './dist/index.html'
    });

    var gulp = require('gulp'),
        watch = require('gulp-watch'),
        ts = require('gulp-typescript'),
        karma = require('karma'),
        liveServer = require('live-server'),
        rimraf = require('gulp-rimraf'),
        runSequence = require('run-sequence'),

        tsProject = ts.createProject('tsconfig.json', {
            watch: true,
            typescript: require('typescript')
        });

    gulp.task('clean', function () {
        return gulp
            .src(config.destFolder + '/*', {read: false})
            .pipe(rimraf());
    })

    gulp.task('copy-assets', function () {
        return gulp
            .src(config.src.assets)
            .pipe(gulp
                .dest(config.destFolder));
    });

    gulp.task('compile', function () {
        return gulp
            .src(config.src.ts)
            .pipe(ts(tsProject))
            .pipe(gulp.dest('dist'));
    });

    gulp.task('test', function (done) {
        new karma.Server({
            configFile: config.src.karmaConf,
            singleRun: true
        }, done).start();
    });

    gulp.task('test-continous', function () {
        new karma.Server({
            configFile: config.src.karmaConf
        }).start();
    });

    gulp.task('serve', function() {
        var params = {
            port: 3000,
            root: '.',
            open: false,
            file: config.defaultSpaFile,
            mount: [['/app', config.destFolder]]
        }

        liveServer.start(params);
    });

    gulp.task('ci', function (done) {
        runSequence('clean', ['copy-assets', 'compile'], ['test-continous', 'serve'], done);

        gulp.watch(config.src.assets, ['copy-assets']);
        gulp.watch(config.src.ts, ['compile']);
    });

    return gulp;
}