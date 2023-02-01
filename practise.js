var package = ["Friends","Family","Bachelors"]
for(var i=0; i<package.length; i++)
{
    if(package[i]=="Family")
    {
        switch(package[i])
        {
            case "Friends" : console.log("Frinds Package Booked Successfully");
            break
            case "Family" : console.log("Family Package Booked Successfully");
            break
            case "Bachelors" : console.log("Bachelors Package Booked Successfully");
            break
        }
        
    }
}