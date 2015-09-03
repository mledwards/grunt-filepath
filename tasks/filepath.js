/*
 * grunt-filepath
 * https://github.com/mledwards/grunt-filepath
 *
 * Copyright (c) 2015 Martin Edwards
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {

  'use strict';

  // Register task
  grunt.registerMultiTask('filepath', 'Replace a string with the file\'s relative file path / URL. Originally created to get a dynamic URL in to the OpenGraph metadata of static HTML pages.', function () {

    var self = this;

    // Iterate over files
    this.files.forEach(function (files) {

      // Async tasks is needed for "recursive-readdir"
      var write = true;

      var src = files.src.filter(function(filepath) {

        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          
          // Ignore directories
          if (grunt.file.isDir(filepath)) {
            return false;
          }

          // Ignored locations
          for (var i = 0; i < (self.data.ignore || []).length; i++) {
            if (filepath.indexOf(self.data.ignore[i]) > -1) {

              return false;
            }
          }
          return true;
        }
      });

      (src || []).forEach(function(file) {

        
       
        

        // Write files to 
        if (write) {
          grunt.file.write(
            file,
            grunt.file.read(file).replace(new RegExp(self.data.replace || '@@path', 'g'), self.data.base + file)
          );
          grunt.log.writeln('File "' + file + '" paths added.');
        }
      });
    });
  });

};
