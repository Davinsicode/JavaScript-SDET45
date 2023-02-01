// var keyword
var a = 10
var a = 20 // --> ReDeclaration
a=30 // --> Re Initialization
console.log(a)

// let keyword
let b = 10
// let b = 20 --> ReDeclaration is not Possible
b=20 // --> Re Initialization
console.log(b)

// const keyword
const c = 10
// const c = 20 --> ReDeclaration is not Possible
// c = 30 -->  Re Initialization is not possible --> Here we will get run time exception like TypeError
console.log(c)

// To find the DataType
var x = 10
let y = "hello"
console.log(typeof(x))
console.log(typeof(y))

// TypeCasting
var num = "50"
console.log(typeof(Number(num))+" "+num)