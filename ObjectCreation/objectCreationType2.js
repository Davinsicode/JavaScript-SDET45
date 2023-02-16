// With this keyword
// When the Property is constant value is dynamic then we will go for the TYPE2
function packageDetails(name, price, status)
{
    this.name = name
    this.price = price
    this.status = status
    console.log(name+" "+price+" "+status); 
}
//new packageDetails("Friends",25000,"Available Now")

// Without this keyword
function packageDetails2(name, price, status)
{
    let  Name1 = name
    let Price1 = price
    let Status1 = status
    console.log(Name1+" "+Price1+" "+Status1); 
}
//new packageDetails2("Family",35000,"Not Available Now")

// Passing Array and Function
function packageDetails3(func, arr)
{
    this.func = func
    this.arr= arr
    console.log("Array Value is: "+arr);
}
let obj=new packageDetails3(function(){ console.log("Function Value is: print")},["Chennai","Banglore","Kerla"])
obj.func();
