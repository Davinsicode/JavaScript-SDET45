"use strict" // It is used to restrict accessing the private data through getters()
// Note: 1
// if the variable is private if we try to initialize the value we will not get any value 
// and also it will not throw any error
// if the variable is not private if we try to initialize the value we will get the value

// Note: 2
// if we access the getter like new className().getters() --> we will get the value
// if we access the getter like ref = new className() --> ref.getters() --> it will throw reference error
class sample
{
    data = ""
    #value ="hello"
    getter()
    {
        return this.data
    }
    constructor(data)
    {
this.data = data
    }
}
console.log(new sample("javaScript").getter());
// console.log(ref.getter());
