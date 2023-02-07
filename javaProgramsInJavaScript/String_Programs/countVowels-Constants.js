let value = "testyantra"
let vowels = 0
let constants = 0
for(let i=0; i<value.length; i++)
{
    if(value[i]=='a' || value[i]=='e' || value[i]=='i' || value[i]=='o' || value[i]=='u')
        {
            vowels++
        }
        else
        {
            constants++
        }
}
console.log("Count of the Vowels is: "+vowels);
console.log("Count of the Constants is: "+constants);