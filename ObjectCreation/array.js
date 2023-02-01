// Here Object return type is (var , let, const)only
// TYPE-1
var arr = new Array("String Value", 1, true)
console.log(arr.length);
console.log(arr[1]);

// forOfLoop
for (const iterator of arr) {
    console.log(iterator);
}

// NOTE: It is has Drawback --> If we mention only one Number data in array it will consider the value as size
// But if we mention the "Only one String it will print as usual" (var arr2 = new Array("JavaScript"))
var arr1 = new Array(5)
console.log(arr1);
console.log(arr1.length);

// NOTE: Always we Use TYPE-2 Array
// To OverCome this drwaback we will go for this type of arry "TYPE-2"
var arr3 = [5]
console.log(arr3);