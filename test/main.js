/**
 * Created by andreasoldino on 1/11/16.
 */

Error.stackTraceLimit = Infinity;

__karma__.loaded = function () {
};

System.config({
    baseURL: '/base/',
    defaultJSExtensions: true,

    paths: {
        'angular2/*': 'node_modules/angular2/*.js',
        'rxjs/*': 'node_modules/rxjs/*.js'
    }
});

System.import("angular2/src/platform/browser/browser_adapter")
    .then(function (browser_adapter_1) {
        browser_adapter_1.BrowserDomAdapter.makeCurrent();
    }).then(function () {
        return Promise.all(
            Object.keys(window.__karma__.files)
                .filter(onlySpecFiles)
                .map(window.file2moduleName)
                .map(function (path) {
                    console.debug('Running test suite [' + path + '].');
                    return System.import(path).then(function (module) {
                        if (module.hasOwnProperty('main')) {
                            module.main();
                        } else {
                            throw new Error('Module ' + path + ' does not implement main() method.');
                        }
                    })
                }));
    })
    .then(function () {
        __karma__.start();
    }, function (err) {
        __karma__.error(err.stack || err);
    });

function onlySpecFiles(path) {
    return /_spec\.js$/.test(path);
}