const path = require('path');

('https://nodejs.org/dist/latest-v14.x/docs/api/path.html');

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.parse(__filename).ext);
console.log(path.parse(__filename).base);

console.log(path.join(__dirname, 'test', 'second.html'));
console.log(path.resolve(__dirname, 'test', 'second.html'));
console.log(path.resolve(__dirname, './test', '/second.html'));
