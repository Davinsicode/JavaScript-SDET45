
class sample1
{
    get()
    {
        console.log("Java");
    }
}
class sample2 extends sample1
{
    get()
    {
        console.log("Selenium");
    }
}
class sample3 extends sample1
{
    get()
    {
        console.log("JavaScript");
    }
} 
ref = new sample3()
ref.get()

// type2
let numbers = {
    one : 1,
    two : 2
}
ref = new Object(numbers)
console.log(ref.one);