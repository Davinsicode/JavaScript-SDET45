let packages1 = 
{
packageName : "Friends",
packageCost : "25000",
packageDetails : "only 5 members can allowed for this package",
bookPackages : function book()
{console.log(this.packageName+" "+this.packageCost+" "+this.packageDetails)} 
}

let packages2 = 
{
packageName : "Family",
packageCost : "40000",
packageDetails : "only 5 members can allowed for this package",
}
packages1.bookPackages.call(packages2) 