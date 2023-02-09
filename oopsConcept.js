// Method Overload --> Method Name is sam evariation in arguments
class sample1
{
tourPackages(pck1, pck2)
{
    console.log(pck1+" "+pck2);
}
tourPackages(pck1, pck2, pck3)
{
    console.log(pck1+" "+pck2+" "+pck3);
}
}
data1 = new sample1()
data1.tourPackages("Friends","Family","Bachelor","Couple")

// Method Override --> Method name is same variation in different class/objects
class sample2
{
    tourPackages(create, manage)
    {
        console.log(create+" "+manage);
    }
}
data2 = new sample2()
data2.tourPackages("Created Successfully","Updated Successfully")
data3 = Object.create(data2)
data3.tourPackages("Created Successfully","Updated Failed")

// 