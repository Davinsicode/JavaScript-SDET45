// When the Property and value is not constant then we will go for the TYPE1
let TSM  = 
{
    createPackage: "Package Created Successfully",
    managaPackage: "Package Managed Successfully",
    packages : ["family","friends","couples","bachelors"],
    packagecost : 25000,
    issues : function WriteEnquiry(enq) 
    {
      console.log(enq);  
    },
    project2 : TSM2 = 
    {
        warning : "This is on going project kindly wait the project is getting completed"
    },

}
    // Calling Properties
    console.log(TSM.createPackage)
    console.log(TSM.managaPackage)
    console.log(TSM.packagecost)

    // Calling Object
    //console.log(TSM) 

    // Calling Function
    TSM.issues("All Your Packages are Very Good and More Comfortable for US") 

    // Calling the Nested Object
    console.log(TSM.project2.warning);