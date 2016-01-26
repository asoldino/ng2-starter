module.exports = function(config) {
    config.set({
        basePath: '../..',

        frameworks: ['jasmine'],

        files: [
            // Sources and specs.
            // Loaded through the System loader, in `test-main.js`.
            {pattern: 'dist/**/*.js', included: false, watched: true, served: true},
            // Maps, sources and definition files. Handy for debugging
            {pattern: 'dist/**/*.d.ts', included: false, watched: false, served: true},
            {pattern: 'dist/**/*.js.map', included: false, watched: false, served: true},
            {pattern: 'src/**/*', included: false, watched: false, served: true},

            {pattern: 'node_modules/angular2/**/*.js', included: false, watched: false, served: true},
            {pattern: 'node_modules/rxjs/**', included: false, watched: false, served: true},
            
            'node_modules/es6-shim/es6-shim.js',

            'node_modules/systemjs/dist/system.js',
            'node_modules/reflect-metadata/Reflect.js',

            'node_modules/ng2-starter/test/file2modulename.js',
            'node_modeuls/ng2-starter/test/test-main.js'
        ],

        exclude: [
            'node_modules/angular2/es6/**/examples/**',
            'node_modules/angular2/examples/**',
            'node_modules/angular2/**/e2e_test/**'
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