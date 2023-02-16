// .js File1 --> exporting file1 to file2
class sample
{
     a = "JavaScript"
}
class sample2 extends sample
{
    b = "Selenium "
}
 
ref = new sample2() // ref is the instance
// exporting by using the "module.exports = ref_var of the object"
module.exports = ref  //exporting this class by using the instance or ref variable