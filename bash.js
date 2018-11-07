const pwd = require('./pwd.js');
const fs = require('./ls.js');
const cat = require('./cat.js');

//Output a prompt
process.stdout.write('prompt >');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  const cmd = data.toString().trim(); //remove the newLine
  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    fs();
  } else if (cmd.split(' ')[0] === 'cat') {
    cat(cmd.split(' ')[1]);
  }
});
