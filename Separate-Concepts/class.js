class sample
{
    static  a = 10 // Static variable
    b=20 // Non static variable
    constructor(n, r)
    {
        let name = n
        let rank = r
        console.log(name+" "+rank);
    }
    static demo() // Static method
    {
        console.log(this.a); //--> 10
        console.log(this.b); //--> undefined --> bcoz it is Non static
    }
    demo2() // Non static method
    {
        console.log(this.a); //--> undefined --> bcoz it is static
        console.log(this.b); //--> 20
    }

}
// sample.demo() // we can call the static method directly
console.log(sample.b);
// new sample("Suresh", 07).demo2() // 