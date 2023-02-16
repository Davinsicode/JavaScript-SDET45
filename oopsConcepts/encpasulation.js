class sample
{
    #name = "suresh"
    get()
    {
        return this.#name
    }
}
console.log(new sample().get());