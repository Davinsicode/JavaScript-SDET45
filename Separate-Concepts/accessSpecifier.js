class accessSpecifier
{
    Name = "Suresh" // Default Access Specifier

    // # --> Symbol is used to make variable as private
    #NamePrivate = "SureshKumar" // Private Access Specifier
    get()
    {
        return this.#NamePrivate
    }

}
data1 = new accessSpecifier()
data1.Name = "Roshan"
console.log(data1.Name);
// console.log(data1.NamePrivate); //--> Undefined bcoz it is Private
console.log(data1.get()); //--> we getting the value through getters