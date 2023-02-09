// Type:1 Object Creation
let signUP = {
    firstName : "Suresh",
    lastName : "Kumar",
    email : "sureshroshan2@gmail.com",
    state : function states()
            {
                let States = ["TamilNadu","Karnataka","Kerala","AndhraPradesh"]
            }
}

// Tranfer the object from one object to another object
createAccount = Object.create(signUP)
createAccount.lastName = "Roshan" // Achieve OverRide
// console.log(createAccount.lastName);
console.log(signUP.lastName);