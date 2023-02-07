 // Object Creation
let tourPackage = 
{
    createPackage : "Package created Successfully",
    managePackage : "Package Updated Successfully"
}
let manageUser =
{
    user1 : "user1 details are created successfully",
    user2 : "user2 details are created successfully",
    user3 : "user3 details are created successfully"
}
let manageBookings =
{
    friends : " Friends Package Booked Successfully",
    family : " Family Package Booked Successfully",
    couple : " Couple Package Booked Successfully",
    bachelors : " Bachelor Package Booked Successfully"
}

// Lets keep inside all the objecys into the array
let TSM = [tourPackage, manageUser, manageBookings] 
console.log(TSM[0].createPackage);