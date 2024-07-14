const path = require("path");

console.log(__filename); //D:\WEB DEVLOPMENT\30 DAYS OF CODING\backend\node js\path.js
console.log(path.basename(__filename)); //path.js

console.log(__dirname); //:\WEB DEVLOPMENT\30 DAYS OF CODING\backend\node js
console.log(path.basename(__dirname)); //node.js

console.log(path.extname(__filename)); //.js
