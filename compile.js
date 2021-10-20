const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts','Election.sol');
const source = fs.readFileSync(inboxPath,'utf-8');
console.log(solc.compile(source, 1)).contracts[':Election'];
module.exports = solc.compile(source, 1)