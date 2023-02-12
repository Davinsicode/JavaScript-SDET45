// Count of the people live in India

values = [{fname : "abc"},{address : "India"},
{fname : "def"},{address : "Europe"},
{fname : "ghi"},{address : "India"},
{fname : "jkl"},{address : "Europe"},
{fname : "mno"},{address : "Russia"}]

peopleCount = 0
for (const index in values) 
{
    if(values[index].address=="India")
    {
        peopleCount++
    }
}
console.log("Count of the People Lives in INDIA: "+peopleCount);