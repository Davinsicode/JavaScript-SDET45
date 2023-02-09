let stringvalue = "testyantra"
// splittedvalue = stringvalue.split('')
for(i=0; i<stringvalue.length; i++)
{
    count = 0
    for(j=0; j<stringvalue.length;j++)
    {
        if(stringvalue[i]==stringvalue[j])
        {
            if(j<i)
            {
             break
            }
            count++
        }
    }
    if(count>1)
    {
        // console.log(stringvalue[i]);
    }
    else
     {
        console.log(stringvalue[i]);
     }
    
}