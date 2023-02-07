var number = [1,2,5,4,1,4,4]
for(var i=0; i<number.length; i++)
{
    for(var j=i+1; j<number.length; j++)
    {
        if(number[i]==number[j])
        {
           number[i]=8
        }
    }
    if(number[i]!=8)
    {
        console.log(number[i]);
    }
}