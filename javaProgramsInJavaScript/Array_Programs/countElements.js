var number = [1,2,5,4,1,4,4]
for(var i=0; i<number.length; i++)
{
    var count =0
    for(var j=0; j<number.length; j++)
    {
        
        if(number[i]==number[j])
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
        console.log(number[i]+"--->"+count);
    }
}