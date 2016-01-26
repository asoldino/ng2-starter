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

Now you have access to the following gulp tasks you can add to your package.json file

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

# to-do:
Alot, like

* Webpack integration (nice to have)
