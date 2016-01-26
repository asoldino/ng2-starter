module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            // Sources and specs.
            // Loaded through the System loader, in `test-main.js`.
            {pattern: '../../dist/**/*.js', included: false, watched: true, served: true},
            // Maps, sources and definition files. Handy for debugging
            {pattern: '../../dist/**/*.d.ts', included: false, watched: false, served: true},
            {pattern: '../../dist/**/*.js.map', included: false, watched: false, served: true},
            {pattern: '../../src/**/*', included: false, watched: false, served: true},

            {pattern: '../angular2/**/*.js', included: false, watched: false, served: true},
            {pattern: '../rxjs/**', included: false, watched: false, served: true},
            {pattern: '../random-words/index.js', included: false, watched: false, served: true},
            {pattern: '../lodash/**/*.js', included: false, watched: false, served: true},

            '../es6-shim/es6-shim.js',

            '../systemjs/dist/system.js',
            '../reflect-metadata/Reflect.js',

            '../../test/file2modulename.js',
            '../../test-main.js'
        ],

        exclude: [
            '../angular2/es6/**/examples/**',
            '../angular2/examples/**',
            '../angular2/**/e2e_test/**'
        ],

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher'
        ],

        reporters: ['progress'],

        browsers: ['Chrome'],

        colors: true,

        logLevel: config.LOG_INFO,

        port: 9876,

        autoWatch: true,

        singleRun: false
    })
};