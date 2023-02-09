class encapsule
{
    packageNames = "Keeps on changing"
    packageNameSetters(packageNames)
    {
        this.packageNames = packageNames
    }
    #packageCost = "25000" // defaultvalue --> private
    packageCostGetters()
    {
        return this.#packageCost
    }
    
    packageDetails = "Keeps on changing"
    packageDetailsSetters(packageDetails)
    {
        this.packageDetails = packageDetails
    }
    
}
data = new encapsule()
 data.packageNameSetters("Friends")
 data.packageDetailsSetters("Nothing")
console.log(`
${data.packageNames}
${data.packageCostGetters()}
${data.packageDetails}
`);
