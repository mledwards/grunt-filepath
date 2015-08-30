/*
 * grunt-filepath
 * https://github.com/mledwards/grunt-filepath
 *
 * Copyright (c) 2015 Martin Edwards
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {

  'use strict';

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var recursive = require('recursive-readdir');

  grunt.registerMultiTask('filepath', 'Replace a string with the file\'s relative file path / URL. Originally created to get a dynamic URL in to the OpenGraph metadata of static HTML pages.', function () {

    var self = this;
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          if (!grunt.file.isDir(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" is not directory.');
            return false;
          }
          return true;
        }
      });
      var done = self.async();

      (src || []).forEach(function(folder) {
        recursive(folder, function (err, files) {
          (files || []).forEach(function(file) {
            console.log(file);
            grunt.file.write(
              file,
              grunt.file.read(file).replace(new RegExp(self.data.replace || '@@path', 'g'), self.data.base + file)
            );
            grunt.log.writeln('File "' + file + '" paths added.');
          });
          
          done();
        });
      });

      // src.forEach(function(folder) {
      //   var files = grunt.file.expand({cwd: folder}, '*');
      //   files.forEach(function(file) {
      //     var filepath = folder + '/' + file;
      //     var contents = grunt.file.read(folder + '/' + file);

      //     grunt.file.write(filepath, contents.replace(new RegExp(self.data.replace, 'g'), self.data.base + filepath));
      //     // Print a success message.
      //     grunt.log.writeln('File "' + filepath + '" paths added.');
      //   });
        
      // });
    });
  });

};
