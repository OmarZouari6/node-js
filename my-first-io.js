const fs = require('fs');
const file = fs.readFileSync(process.argv[2]);
const arr=file.toString().split('\n');
console.log(arr.length - 1);