var fs = require('fs');

fs.writeFileSync('myFile.txt', 'This is content to put in file');
console.log(fs.readFileSync('myFile.txt').toString());
