const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');


function print(output){
   process.stdout.write(output)
   process.stdout.write('\nprompt > ')
}

function bash() {
   process.stdout.write('prompt > ')
   process.stdin.on( 'data', (data) => {
      const args =  data.toString().trim().split(' ');
      const cmd = args.shift();
      args = args.join(' ')

      commands[cmd] 
      ? commands[cmd](print, args) 
      : print(`command not found: ${cmd}`)
      
   } )
}
bash();

module.exports = {
   print,
   bash,
};
