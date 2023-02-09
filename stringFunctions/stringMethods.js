let value = "Test Yantra"
let values = "Test Yantra"

// 1 
// console.log(value.charAt(3)); // --> Print Particular Char
// 2 
// console.log(value.startsWith('t',3)); // --> if the value is present the particular index then it will give (True/False)
// 3 
// console.log(value.endsWith('a')); // --> if the value is present at the last then it will give (True/False)
// 4 
// console.log(value.concat(" - JavaScriptBatch")); // --> Concordination
// 5 
// console.log(value.indexOf('Y')); // --> To get the particular index value of the char's
// 6 
// console.log(value.length); // to get the length of the string
// 7 
// console.log(value.replace('t','T')); // --> It will replace the values in one word
// 8 
// console.log(value.replaceAll('t','T')); // --> It will replace the values in whole sentence
// 9 
// console.log(value.split(" ")); // It is used to split the string
// 10 
// console.log(value.substring(2,4)); // Print the value for the particular range
// 11 
// console.log(value.toUpperCase);
// 12 
// console.log(value.toLowerCase);
// 13 
// Case Sensitive for Lower
for (const key in value) 
{
    lower = value.toLocaleLowerCase()
    if(lower[key]=='t')
    {
        // console.log(lower[key]);
    }
}
// 14 
// Case Sensitive for Upper
for (const key in value) 
{
    lower = value.toLocaleUpperCase()
    if(lower[key]=='T')
    {
        // console.log(lower[key]);
    }
}
// 15 
// console.log(value.lastIndexOf('t'));
// 16 
//  console.log(value.localeCompare(values)); // If value are matching it will return as 0 or else -1
// 17 
//  console.log(value.padEnd(value.length+7," Suresh")); // We need to give the length of the string and newely adding string size
// 18 
//  console.log(value.padStart(value.length+7,"Suresh "));