let array = [1,2,3,4,5,6,7,8,9]

// To find the Max Number which is present in the given array
// console.log(Math.max(...array));

for(i=0; i<array.length; i++)
{
    let count = 0
    for(j=1; j<=Math.max(...array); j++)
    {
        if(array[i]%j==0)
        {
            count++
        }
    }        
    if(count==2)
    {
        console.log("Prime Number is: "+array[i]);
    }
}