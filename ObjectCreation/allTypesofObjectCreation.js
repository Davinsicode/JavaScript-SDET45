//Type:1 --> Ordinary Object Creation
let obj1 = {
    one : 1,
    two : 2,
    three : 3
}
console.log("Type1: "+typeof(obj1));
//Type:2 --> Using function Keyword object created
function obj2(four, five)
{
    four = four
    five = five
    console.log(four + " " + five);
}
console.log("Type2: "+typeof(obj2));
//Type:3 --> Using new Object() method object created
obj3 = new Object
obj3.six = 6
console.log("Type3: "+typeof(obj3));

//Type:4 --> Using Array Object created
let obj4 = [7,8,9,10]
console.log("Type4: "+typeof(obj4));

obj2(4,5)