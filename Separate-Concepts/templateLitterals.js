function packageDetails(PackageType, PackageCost, PackageDetails)
{
    // console.log(PackageType+" "+PackageCost+" "+PackageDetails); // Normal Print statement
    // Template Litterals ex: ~ Text: ${argument} ~
    console.log(`
    Package Type: ${PackageType}
    Package Cost: ${PackageCost}
    PACKAGE Details: ${PackageDetails}
    `);
}
packageDetails("Family","25000","Only 5 members Allowed")