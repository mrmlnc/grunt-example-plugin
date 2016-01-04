module.exports = function (grunt) {
  grunt.initConfig({
    plugin: {
      taskName: {
        files: [{
          expand: true,
          cwd: 'test/fixtures',
          src: '*.md',
          ext: '.html',
          dest: '.tmp'
        }]
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['plugin']);
};
