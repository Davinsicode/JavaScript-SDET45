// .js file2 --> importing file1 from file2
// importing the exported objects by using the "require" and store into the ref variable
// by using that ref variable we can access other .js file to current .js file

let importing = require("./export")
console.log(importing.a);
console.log(importing.b);