const fs = require('fs');

const b1 = fs.readFileSync(process.argv[2],'utf-8'); //will return buffer
let splitted = b1.split('\n').length - 1;
console.log(splitted);