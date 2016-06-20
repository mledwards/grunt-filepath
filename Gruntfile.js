/*
 * grunt-filepath
 * https://github.com/mledwards/grunt-filepath
 *
 * Copyright (c) 2015 Martin Edwards
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Run file path
    filepath: {
      multiple_files: {
        files: {
          'src_and_dest': ['./test/**']
        },
        remove: './test/',
        ignore: ['ignore-this'],
        base: 'https://mywebsite.com/',
        replace: '@@path'
      }
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint.
  grunt.registerTask('default', ['jshint', 'filepath']);

};
