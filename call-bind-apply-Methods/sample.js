// 1.call Function

// Object - 1
/* let customer1 = 
{
    firstName : "Suresh",
    lastName : "Kumar",
    adress : function()
            {
                permanentAddress = "TamilNadu"
                tempraryAddress = "Karnataka"
console.log(`
First Name: ${this.firstName}
Last Name: ${this.lastName}
Permanent Address: ${permanentAddress}
Temprary Address: ${tempraryAddress}
`);
            }
}

// Object - 2
let customer2 = 
{
    firstName : "Suresh",
    lastName : "Roshan",
    adress : function()
            {
                permanentAddress = "TamilNadu"
                tempraryAddress = "Kerala"
console.log(`
First Name: ${this.firstName}
Last NAme: ${this.lastName}
Permanent Address: ${permanentAddress}
Temprary Address: ${tempraryAddress}
`);
            }
    
}

// Normal Function
function information()
{
    console.log("Welcome to Let's Feel Romania");
    this.adress();
}
// Using Call Function --> call function is applicable for only functions
information.call(customer1) // Borrowing the parameters from another object */

/* **************************************************************************************************** */

// 2.bind Function

// Object - 1
/* let customer1 = 
{
    firstName : "Suresh",
    lastName : "Kumar",
    adress : function(permanentAddress, tempraryAddress)
            {
                
console.log(` 
First Name: ${this.firstName}
Last Name: ${this.lastName}
Permanent Address: ${permanentAddress}
Temprary Address: ${tempraryAddress}

`);
            }
}

// Object - 2
let customer2 = 
{
    firstName : "Suresh",
    lastName : "Roshan",
    adress : function()
            {
                permanentAddress = "TamilNadu"
                tempraryAddress = "Kerala"
console.log(`
First Name: ${this.firstName}
Last NAme: ${this.lastName}
Permanent Address: ${permanentAddress}
Temprary Address: ${tempraryAddress}
`);
            }
    
}
//--> Passing parameter by using " " double quotes
var data = customer1.adress.bind(customer2, "TamilNadu", "Karnataka") // --> it will not involke the method directly we need to create reference variable for that module invoke that ref variable
data() */

/* **************************************************************************************************** */

// apply Method

let customer1 = 
{
    firstName : "Suresh",
    lastName : "Kumar",
    adress : function()
            {
                permanentAddress = "TamilNadu"
                tempraryAddress = "Karnataka"
console.log(`
First Name: ${this.firstName}
Last Name: ${this.lastName}
`);
            }
}

// Object - 2
let customer2 = 
{
    firstName : "Suresh",
    lastName : "Roshan",
    adress : function(permanentAddress, tempraryAddress)
            {
                
console.log(`
First Name: ${this.firstName}
Last NAme: ${this.lastName}
Permanent Address: ${permanentAddress}
Temprary Address: ${tempraryAddress}
`);
            }
    
}
//--> Passing parameter by using " " double quotes with Array ["a", "b"]
customer2.adress.apply(customer1, ["TamilNadu", "Karnataka"])