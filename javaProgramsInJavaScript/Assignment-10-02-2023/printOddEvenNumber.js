let array = [3,4,6,7,5]
for (let index = 0; index < array.length; index++) 
{
    if(array[index]%2==0)
    {
        console.log("Even Number is: "+array[index]);
    }
    else if(array[index]%2==1)
    {
        console.log("Odd Number is: "+array[index]);
    }
    
}