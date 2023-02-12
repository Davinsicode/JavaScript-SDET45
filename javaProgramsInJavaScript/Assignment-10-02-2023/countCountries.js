values = [{fname : "abc"},{address : "India"},
{fname : "def"},{address : "Europe"},
{fname : "ghi"},{address : "India"},
{fname : "jkl"},{address : "Europe"},
{fname : "mno"},{address : "Russia"}]

for(i=0; i<values.length; i++)
{
    count =0
    for(j=0; j<values.length; j++)
    {
        if(values[i].address==values[j].address)
        {
            if(j<i)
            {
                break
            }
            
                count++
        }
    }
        if(count>=1)
        {
            if(values[i].address)
            {
                console.log(values[i].address+"-->"+count);
            }
        } 
}

