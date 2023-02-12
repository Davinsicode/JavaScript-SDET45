let arr = [0,1,0,0,1,1,1]
for(i=0; i<arr.length; i++)
{
    let count = 0
    for(j=0; j<arr.length; j++)
    {
        if(arr[i]==arr[j])
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
        console.log(arr[i]+"-->"+count );
    }
}
