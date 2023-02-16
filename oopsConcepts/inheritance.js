class createPackage
{
    packageName = "Friends"
    packageCost = "25,000"
    packageDetails = "Only 5 members will allowed for this package"
    
    issues = (information, query) => { console.log(information); 
    (function writeUs(query) { console.log(query)})(query) }}

class editPackage extends createPackage
{
    editPck()
    {
        this.issues("Site is on under working....please wait until the we reeach you","hello")
        
        console.log(this.packageName);
    }
}
new editPackage().editPck()



