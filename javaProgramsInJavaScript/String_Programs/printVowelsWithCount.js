let value = "testyantra"
for(let i=0; i<value.length; i++)
{
    let count =0
    for(let j=0; j<value.length; j++)
    {
        if(value[i]==value[j])
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
       if(value[i]=='a' || value[i]=='e' || value[i]=='i' || value[i]=='o' || value[i]=='u')
       {
            console.log(value[i]+"--->"+count);
       }
        
    }
}