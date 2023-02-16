"use strict" //--> if we use "use strict" ref variable is not working it will restrict the ref variable
class sample
{
    #name = "Suresh"
    get()
    {
        return this.#name
    }
    set(name)
    {
        this.#name = name
    }
}

// Note: These set of codes not workin bcoz of the "use strict"
/* ref = new sample()
console.log(ref.get());
ref.set("Roshan")
console.log(ref.get()); */

console.log(new sample().get());  
new sample().set("Roshan") // --> we can fetch the private value but we can't reinitialize the value
console.log(new sample().get());