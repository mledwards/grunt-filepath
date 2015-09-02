/*
 * grunt-filepath
 * https://github.com/mledwards/grunt-filepath
 *
 * Copyright (c) 2015 Martin Edwards
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {

  'use strict';
  // Require
  var recursive = require('recursive-readdir');

  // Register task
  grunt.registerMultiTask('filepath', 'Replace a string with the file\'s relative file path / URL. Originally created to get a dynamic URL in to the OpenGraph metadata of static HTML pages.', function () {

    var self = this;

    // Iterate over files
    this.files.forEach(function (file) {

      // Async tasks is needed for "recursive-readdir"
      var done = self.async();

      (file.src || []).forEach(function(folder) {
        recursive(folder, function (err, all) {

          // Filter out ignored strings
          var files = all.filter(function(file) {
            for (var i = 0; i < (self.data.ignore || []).length; i++) {
              if (file.indexOf(self.data.ignore[i]) > -1) {
                return false;
              }
            }
            return true;
          });

          // Write files to 
          (files || []).forEach(function(file) {
            grunt.file.write(
              file,
              grunt.file.read(file).replace(new RegExp(self.data.replace || '@@path', 'g'), self.data.base + file)
            );
            grunt.log.writeln('File "' + file + '" paths added.');
          });
          
          done();
        });
      });
    });
  });

};
