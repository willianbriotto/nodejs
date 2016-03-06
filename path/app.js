var path = require('path');
var _1 = 'path/path2///path.html';
var _2 = 'path///path3//path2.html';

console.log(path.normalize(_1));
console.log(path.normalize(_2));

console.log('------------------');
console.log(path.dirname(path.normalize(_2)));
console.log(path.basename(_2));
console.log(path.extname(_2));


console.log('------------------');
console.log(__dirname);
console.log(__filename);
