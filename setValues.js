//"use strict"
class sample
{
    #property1 = ""
    property2 = ""
    property3 = ""

    packages = 
    {
        package1 : "Family",
        package2 : "Friends",
        package3 : "Couple",
        package4 : "Bachelor"
    }

    constructor(property1, property2, property3)
    {
        this.#property1 = property1
        this.property2 = property2
        this.property3 = property3
    }
     prop1(property1)
    {
        this.#property1 = property1
    }
     prop2(property2)
    {
        this.property2 = property2
    }
     prop3(property3)
    {
        this.property3 = property3
    }

    invokingValues()
    {
        console.log(this.#property1+" "+this.property2+" "+this.property3);
    }
   
}
data = new sample("one","two","three")
// data.invokingValues()

data.prop1("1")
data.prop2("2")
data.prop3("3")

data.invokingValues()
console.log(data.packages.package1); // Invoking the object inside class --> getting the objectvalue inside the class

// console.log(data.property1); //--> private --> undefined
// console.log(data.property2); //--> non private --> two