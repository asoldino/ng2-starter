# ng2-starter
Set of gulp predefined tasks and dependencies to work with Angular2 and Typescript.

The build system will run on top of some assumptions to make new application development easier if you follow those:

* All the source files are inside src folder
* All the source files are typescript
* All the tests you want to run ends with _spec.ts - This convention and procedure was taken from the angular2 source code repository
* All the compiled files will be put on dist folder

# Instructions
``` bash
npm i --save ng2-starter
```

The build system relies on Typescript to work. It is configured to use your preferred typescript version along with a tsconfig.json file in the project root folder. 

To install Typescript just
``` bash
npm i --save-dev typescript (@optionally specifiy a version here)
```

Here it is a sample tsconfig.json file with some standard settings you will want:
``` javascript
{
  "exclude": [
    "node_modules",
    "dist" /* Just to be sure your .d.ts files will not be touced */
  ],

  "compilerOptions": {
    "listFiles": true,
    "isolatedModules": true,

    "charset": "UTF-8",
    "declaration": true,
    "module": "system",

    "sourceMap": true,
    "target": "es5",
    "watch": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,

    "pretty": true /* This option only works from typescript 1.8 onwards */
  }
}
```

Then you will need angular2
``` bash
npm i --save angular2 (@optionally specify a version here)
```

Edit your gulpfile.js as follows:
``` javascript
var gulp = require('ng2-starter')();
```

Now you have access to the following gulp tasks you can add to your package.json file, or even better, the access to the gulp configured system so you can add your tasks at will.

## clean

Use it to clean your dist folder

## copy-assets

Use it to copy the application assets *.{html, css, png, gif} to your dist folder

## compile

Use it to transpile your ts code to es5 js into dist folder

## test

Use it to single run your tests and check for the results

## test-continous

Use it to run your tests and make karma be aware of any file change

## serve

Use it to publish your dist folder to localhost:3000/ as a single page application which will load a file named index.html

## ci

Use it to clean compile copy-assets test-continuos serve and watch for any file change in src folder to trigger a rebuild and retest of your application :)

# Sample package.json

This is a sample package.json using the described tasks to trigger the build process:

``` javascript
{
  "name": "awesome-project",
  "version": "1.0.0",
  "description": "Really awesome project",
  "main": "index.js",
  "scripts": {
    "clean": "gulp clean",
    "serve": "gulp serve",
    "compile": "gulp compile",
    "test": "gulp test",
    "ci": "gulp ci",
    "copy-assets": "gulp copy-assets"
  },

  // Less interesting stuff
```

With this package, you can simply run

``` bash
npm run ci
```

to have the complete package up and running on your environment. Cool, isn't it?

# to-do:
Alot, like

* Webpack integration (nice to have)
