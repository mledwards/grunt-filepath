# grunt-filepath

> Replace a string with the file's relative file path / URL. Originally created to get a dynamic URL in to the OpenGraph metadata of static HTML pages.


## The "filepath" task

### Overview
In your project's Gruntfile, add a section named `filepath` to the data object passed into `grunt.initConfig()`.

In the example below, we're:
1.  Recursing through the 'test' folder
2.  Ignoring any files or folders that contain the strings in the ignore array
2.  Finding the string '@@path'
3.  Replacing it with the relative file path prefixed with the base variable 'https://mywebsite.com/'.

*NOTE: Omit the base parameter if you wish to use the relative path to the file*

```js
grunt.initConfig({
  filepath: {
    dev: {
      base: 'https://mywebsite.com/',
      replace: '@@path',
      ignore: ['ignore-this', 'ignore-that'],
      files: {
        'src_and_dest': ['./test']
      }
    }
  },
})
```

### Options

#### options.files (required)
Type: `Array`
Default value: none

The folders you wish to search and replace

#### options.replace
Type: `String`
Default value: `@@path`

The variable name you wish to replace with the relative file path

#### options.ignore
Type: `Array`
Default value: none

The files and folders you wish to ignore, currently only in string format.

#### options.base
Type: `String`
Default value: ``

Turn your relative file path in to a URL.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Martin Edwards. Licensed under the MIT license.
