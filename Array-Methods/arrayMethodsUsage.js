let array1 = [1,2,3,4,5,3]
let array2 = [6,7,8,9,0]
// 1
function concatMethod()
{
// Array Methods and Usages
// Concat Method --> It is used to concat arr2 to arr1 and stored with new location
console.log("Array1 values are : "+array1);
console.log("Array2 values are : "+array2);
console.log(array1.concat(array2));
}
// 2
function joinMethod()
{
// Join Method --> To perform the separate operation
console.log(array1.join('-'))
}
// 3
function pushMethod()
{
// Push Method --> It is used to get the length of the array and also we add new value to the array and get
// the update size of the array
console.log(array1.push()); // --> To get the Size
console.log(array1.push(6)); // --> To add value and get the updated Size
}
// 4
function popMethod()
{
// Pop Method --> To fetch the last value of the array
console.log(array1.pop())
console.log("Pop Method Value is : "+array1);
}
// 5
function shiftMethod()
{
// Shift Method --> Remove first value
console.log(array1.shift())
console.log(array1);
}
// 6
function unShiftMethod()
{
// UnShift Method --> Add value on first
// It will display added value along with the Size of the Array
console.log(array1.unshift('9'))
console.log("Un Shift Method Value is: "+array1);
}
// 7
function filterMethod()
{
    // Filter Method
    // to Filter the value 
    function condition(array1)
    {
        return array1>1
    }
    console.log("Filter Value is: "+array1.filter(condition));
}
// 8
function findMethod()
{
    // Find Method 
    // print the 1st matching conditioned value 
    function condition(array1)
    {
        return array1>3
    }
    console.log("Find Method Value is: "+array1.find(condition));
}


 //9 
 //console.log(array1.indexOf(5)); // --> To get the value of the index value
//10 
// console.log(typeof(array1.toString)); // Is used to covert the the array to toString
//11 
// console.log(array2.length); // To find the length of the array 
 //12 
 //console.log(array2.includes(3,0|5));

//13 
//console.log(array1.slice(3)); // --> It is used to cut or remove the values from given Number
//14 
//console.log(array1.splice(1-2)); // --> where to start - How many data should be delete from there
// console.log(array1);
// 15 
//console.log(array1.reverse());
