# grunt-filepath

> Add relative file path or URL to static pages.


## The "filepath" task

### Overview
In your project's Gruntfile, add a section named `filepath` to the data object passed into `grunt.initConfig()`.

In this example, we're adding the relative file path to the folder './test/files' and adding a base of 'https://mywebsite.com/' to make the relative file path a URL.

```js
grunt.initConfig({
  filepath: {
    dev: {
      base: 'https://mywebsite.com/',
      replace: '@@path',
      files: {
        'src_and_dest': ['./test/files']
      }
    }
  },
})
```

### Options

#### options.folders
Type: `String`
Default value: `@@path`

The folders you wish to search and replace

#### options.replace
Type: `String`
Default value: `@@path`

The variable name you wish to replace with the relative file path

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
