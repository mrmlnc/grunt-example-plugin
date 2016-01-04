var assert = require('assert');
var grunt = require('grunt');

it('Default test', function() {
  var result = grunt.file.read('.tmp/test.html');
  var expected = grunt.file.read('test/expected/test.html');
  assert.equal(result, expected);
});
