var exec = require('child_process').exec; 

var cmdStr = 'cd ../home && npm run export';

exec(cmdStr, function(err, stdout, stderr){

  if(err) {
    console.log('build error:' + stderr);
  } else {
    console.log(stdout);
    // var data = JSON.parse(stdout);
    // console.log(data);
  }
});