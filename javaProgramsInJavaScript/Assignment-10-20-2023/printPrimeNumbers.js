let array = [1,2,3,4,5,6,7,8,9]
let count = 0
for (let j = array[1]; j <= array.length; j++) 
{
    for (let i = array[0]; i <=j; i++)
     {
        if(i%j==0)
        {
            count++
        }
        
    }
    if(count==2)
    {
        console.log(j);
        count=0
    }
    
}