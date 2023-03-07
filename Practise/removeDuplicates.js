value = "sureshkumar"
for(i=0; i<value.length; i++)
{
    count = 0
    for(j=0; j<value.length; j++)
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
    if(count==1)
    {
        console.log(value[i]);
    }
}
