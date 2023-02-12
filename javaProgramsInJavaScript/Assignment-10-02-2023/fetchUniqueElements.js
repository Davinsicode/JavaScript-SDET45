let array = [1,1,2,3,4,4,5,6]
for (let index1 = 0; index1 < array.length; index1++) 
{
    let count = 0
    for (let index2 = 0; index2 < array.length; index2++)
     {
        if(array[index1]==array[index2])
        {
            if(array[index2]<array[index1])
            {
                break
            }
            count++
        }
        
    }
    if(count<=1)
    {
        console.log(array[index1]);
    }
    
}