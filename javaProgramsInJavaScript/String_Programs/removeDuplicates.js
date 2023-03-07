let stringvalue = "testyantra"
splittedvalue = stringvalue.split('')
for(i=0; i<splittedvalue.length; i++)
{
    count = 0
    for(j=0; j<splittedvalue.length;j++)
    {
        if(splittedvalue[i]==splittedvalue[j])
        {
            if(j<i)
            {
             break
            }
            count++
        }
    }
    if(count==1)
    {
        console.log(splittedvalue[i]);
    }
    /* else
     {
        console.log(splittedvalue[i]);
     } */
    
}