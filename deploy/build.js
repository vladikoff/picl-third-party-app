var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) {
  console.log(error);
  console.log(stdout);
  console.log(stderr);
  //sys.puts(stdout)
}
exec("node_modules/.bin/bower install", puts);
exec("node_modules/.bin/grunt build", puts);
