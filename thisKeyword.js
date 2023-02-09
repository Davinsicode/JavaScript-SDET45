let createPackage = 
{
    packageName : "Family",
    packageCost : "30,000",
    packageDetail : "Only Five Family Members will allow to go",
    packageContents : function brief()
                        {
                            console.log(`
PackageName: ${this.packageName}
PackageCost: ${this.packageCost}
PackageDetail: ${this.packageDetail}
                            `); // this Keyword is possible here bcoz value are in same object
                        }
}
let managePackage =
{
    packageContents : function brief()
    {
        console.log(`
PackageName: ${this.packageName}
PackageCost: ${this.packageCost}
PackageDetail: ${this.packageDetail}
        `); // --> Undefined --> this Keyword is not possible here
            // --> Bcoz input values are from another object
            console.log(`
PackageName: ${createPackage.packageName}
PackageCost: ${createPackage.packageCost}
PackageDetail: ${createPackage.packageDetail}
        `); // --> we need to mention here that particular object name
    }
}
// createPackage.packageContents()
managePackage.packageContents()