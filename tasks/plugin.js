'use strict';

module.exports = function(grunt) {
  var marked = require('marked');

  grunt.registerMultiTask('plugin', function() {
    var options = this.options({
      tables: false
    });

    marked.setOptions(options);

    this.files.forEach(function(f) {
      var src = f.src.map(function(filepath) {
        var data = grunt.file.read(filepath);
        return marked(data);
      });

      grunt.file.write(f.dest, src);
    });
  });
};
